import supabase from "@/app/Supabase/config";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Validate request content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { message: 'Invalid content type. Please send JSON data' },
        { status: 415 }
      );
    }

    // Parse and validate request body
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    if (!supabase) {
      throw new Error('Supabase client is not initialized. Please check your environment variables.');
    }
    const { data, error } = await supabase

      .from('contact_submissions')
      .insert([{ 
        name, 
        email, 
        subject, 
        message 
      }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully!', 
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: error.message || 'Failed to send message' 
      },
      { status: 500 }
    );
  }
}

// Add OPTIONS method for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    }
  );
}
