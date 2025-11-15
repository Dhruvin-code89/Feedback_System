import express from 'express';
import {
  getAllFeedbacks,
  createFeedback,
} from '../controllers/feedbackController.js';

const router = express.Router();

// Handle OPTIONS for CORS preflight (must be first)
router.options('/', (req, res) => {
  res.sendStatus(200);
});

// GET /api/feedback - Get all feedbacks
router.get('/', getAllFeedbacks);

// POST /api/feedback - Create new feedback
router.post('/', createFeedback);

export default router;

