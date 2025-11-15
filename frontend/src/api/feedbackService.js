import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to extract error message
const getErrorMessage = (error) => {
  if (error.response?.data) {
    // Backend returned an error object
    if (error.response.data.message) {
      return error.response.data.message;
    }
    if (error.response.data.error) {
      return error.response.data.error;
    }
    if (typeof error.response.data === 'string') {
      return error.response.data;
    }
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

/**
 * Submit feedback to the backend API
 * @param {Object} feedbackData - The feedback data object
 * @param {string} feedbackData.name - User's name (required)
 * @param {string} feedbackData.email - User's email (optional)
 * @param {string} feedbackData.message - Feedback message (required)
 * @param {string|number} feedbackData.rating - Rating from 1-5 (required)
 * @returns {Promise<Object>} The response data from the server
 * @throws {Error} If the request fails
 */
export const submitFeedback = async (feedbackData) => {
  try {
    // Ensure rating is a number
    const payload = {
      ...feedbackData,
      rating: parseInt(feedbackData.rating, 10),
    };

    const response = await api.post('/feedback', payload);
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

/**
 * Get all feedbacks from the backend API
 * @returns {Promise<Array>} Array of feedback objects
 * @throws {Error} If the request fails
 */
export const getAllFeedbacks = async () => {
  try {
    const response = await api.get('/feedback');
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

// Export service object for backward compatibility
export const feedbackService = {
  getAllFeedbacks,
  submitFeedback,
};

export default feedbackService;

