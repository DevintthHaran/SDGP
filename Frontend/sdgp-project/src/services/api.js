const API_BASE_URL = 'http://localhost:5000/api';

const submitFeedback = async (feedbackData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedback/addFeedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedbackData)
    });

    // First get the text response
    const rawResponse = await response.text();
    
    // Try to parse it as JSON
    try {
      const data = JSON.parse(rawResponse);
      return data;
    } catch {
      // If it's not JSON, return a formatted response
      return {
        success: true,
        message: rawResponse
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export default submitFeedback;




