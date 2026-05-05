import supabase from '@/app/Supabase/config';
import { NextResponse } from 'next/server';

export async function GET(request) {
  // Basic authentication
  const authHeader = request.headers.get('authorization');
  const validPassword = "gocscs@041"; // Make sure this matches your client-side password

  if (!authHeader || authHeader !== `Bearer ${validPassword}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    if (!supabase) {
      throw new Error('Supabase client is not initialized. Please check your environment variables.');
    }
    const { data, error } = await supabase

      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
