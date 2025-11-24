// Direct REST API test to find working models
const https = require('https');
require('dotenv').config();

const apiKey = process.env.GEMINI_API_KEY;

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`${res.statusCode}: ${data}`));
        }
      });
    }).on('error', reject);
  });
}

async function findModels() {
  console.log('🔍 Fetching available models from Google AI...\n');
  
  try {
    // List models from v1 API
    const url = `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`;
    const result = await makeRequest(url);
    
    console.log('✅ Available models:\n');
    
    if (result.models) {
      result.models.forEach(model => {
        console.log(`📦 ${model.name}`);
        if (model.supportedGenerationMethods) {
          console.log(`   Methods: ${model.supportedGenerationMethods.join(', ')}`);
        }
        console.log('');
      });
      
      // Find models supporting generateContent
      const contentModels = result.models.filter(m => 
        m.supportedGenerationMethods?.includes('generateContent')
      );
      
      if (contentModels.length > 0) {
        console.log('\n🎯 Use one of these models:');
        contentModels.forEach(m => {
          const modelName = m.name.replace('models/', '');
          console.log(`   "${modelName}"`);
        });
      }
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

findModels();
