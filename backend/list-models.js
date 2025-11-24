// Test script to find working Gemini model
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function testModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error('❌ GEMINI_API_KEY not found');
    return;
  }

  console.log('🔍 Testing Gemini models...\n');
  
  const modelsToTest = [
    'gemini-pro',
    'gemini-1.5-pro',
    'gemini-1.5-flash',
    'gemini-1.5-flash-8b',
    'gemini-1.5-pro-latest',
    'gemini-1.5-flash-latest',
    'models/gemini-pro',
    'models/gemini-1.5-flash'
  ];
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  for (const modelName of modelsToTest) {
    try {
      console.log(`Testing: ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent('Say hi');
      const response = await result.response;
      const text = response.text();
      
      console.log(`✅ SUCCESS with ${modelName}`);
      console.log(`   Response: ${text.substring(0, 50)}...\n`);
      
      console.log(`\n🎉 Use this model: "${modelName}"\n`);
      return modelName;
    } catch (error) {
      console.log(`❌ Failed: ${error.message}\n`);
    }
  }
  
  console.log('❌ No working models found');
}

testModels();
