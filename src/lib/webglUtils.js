// lib/webglUtils.js
'use client';

export const checkWebGLAvailability = () => {
  if (typeof window === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return false;
    
    // Test basic WebGL functionality
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, 'void main() {}');
    gl.compileShader(vertexShader);
    return gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
  } catch (e) {
    return false;
  }
};