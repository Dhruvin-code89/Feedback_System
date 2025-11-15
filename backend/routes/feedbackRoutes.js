import express from 'express';
import {
  getAllFeedbacks,
  createFeedback,
} from '../controllers/feedbackController.js';

const router = express.Router();

// GET /api/feedback - Get all feedbacks
router.get('/', getAllFeedbacks);

// POST /api/feedback - Create new feedback
router.post('/', createFeedback);

export default router;

