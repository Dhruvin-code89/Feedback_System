import Feedback from '../models/Feedback.js';

// @desc    Get all feedbacks
// @route   GET /api/feedback
// @access  Public
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch feedbacks',
      message: error.message 
    });
  }
};

// @desc    Create new feedback
// @route   POST /api/feedback
// @access  Public
export const createFeedback = async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ 
        error: 'Validation failed',
        message: 'Name is required' 
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ 
        error: 'Validation failed',
        message: 'Message is required' 
      });
    }

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ 
        error: 'Validation failed',
        message: 'Rating must be between 1 and 5' 
      });
    }

    // Create feedback
    const feedback = await Feedback.create({
      name: name.trim(),
      email: email ? email.trim() : '',
      message: message.trim(),
      rating: parseInt(rating),
    });

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      data: feedback,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        error: 'Validation failed',
        messages 
      });
    }

    res.status(500).json({ 
      error: 'Failed to create feedback',
      message: error.message 
    });
  }
};

