// Gemini AI client using official Google SDK
const { GoogleGenerativeAI } = require('@google/generative-ai');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function getReply(message) {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    
    // Try multiple model names in order of preference
    const modelNames = [
      'gemini-1.5-flash-latest',
      'gemini-1.5-pro-latest', 
      'gemini-pro',
      'models/gemini-1.5-flash',
      'models/gemini-pro'
    ];
    
    let lastError;
    
    for (const modelName of modelNames) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        
        const prompt = `You are Meru AI, a helpful and compassionate health assistant. Provide accurate, clear health information while being empathetic. Always remind users to consult healthcare professionals for serious concerns.\n\nUser: ${message}\nAssistant:`;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        console.log(`✅ Success with model: ${modelName}`);
        return text || 'Sorry, I could not generate a response.';
      } catch (error) {
        console.log(`❌ Failed with model ${modelName}:`, error.message);
        lastError = error;
        continue;
      }
    }
    
    throw lastError || new Error('All models failed');
  } catch (error) {
    console.error('Gemini API error:', error);
    throw error;
  }
}

module.exports = { getReply };
