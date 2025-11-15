// Quick test script to verify the POST endpoint works
import axios from 'axios';

const testFeedback = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/feedback', {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test feedback',
      rating: 5
    });
    
    console.log('✅ Success!', response.data);
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    console.error('Status:', error.response?.status);
  }
};

testFeedback();

