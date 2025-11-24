// Gemini AI client using official Google SDK
const { GoogleGenerativeAI } = require('@google/generative-ai');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function getReply(message) {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-pro',
      systemInstruction: 'You are Meru AI, a helpful and compassionate health assistant. Provide accurate, clear health information while being empathetic. Always remind users to consult healthcare professionals for serious concerns.'
    });
    
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    
    return text || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Gemini API error:', error);
    throw error;
  }
}

module.exports = { getReply };
