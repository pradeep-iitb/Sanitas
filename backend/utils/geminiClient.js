// Gemini AI client using official Google SDK
const { GoogleGenerativeAI } = require('@google/generative-ai');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function getReply(message) {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    
    // Use gemini-2.0-flash which is available
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash'
    });
    
    const prompt = `You are Meru AI, a helpful and compassionate health assistant. Provide accurate, clear health information while being empathetic. Always remind users to consult healthcare professionals for serious concerns.\n\nUser: ${message}\nAssistant:`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Gemini API error:', error);
    throw error;
  }
}

module.exports = { getReply };
