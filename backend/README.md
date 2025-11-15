# Feedback System Backend

Express.js backend API for the Feedback System with MongoDB Atlas integration.

## Features

- RESTful API endpoints for feedback management
- MongoDB Atlas database integration
- Input validation and error handling
- CORS enabled for frontend communication
- Environment-based configuration

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas (via Mongoose)
- dotenv for environment variables

## API Endpoints

### GET /api/feedback
Get all feedbacks sorted by creation date (newest first).

**Response:**
```json
[
  {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great service!",
    "rating": 5,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### POST /api/feedback
Create a new feedback entry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great service!",
  "rating": 5
}
```

**Response:**
```json
{
  "success": true,
  "message": "Feedback submitted successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great service!",
    "rating": 5,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create a database user (Database Access)
4. Whitelist your IP address (Network Access) - use `0.0.0.0/0` for development
5. Get your connection string from "Connect" → "Connect your application"
6. Replace `<username>`, `<password>`, and `<cluster>` in the connection string

### 3. Environment Configuration

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit `.env` and add your MongoDB Atlas connection string:

```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/feedback_db?retryWrites=true&w=majority
NODE_ENV=development
```

### 4. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection configuration
├── controllers/
│   └── feedbackController.js  # Feedback business logic
├── models/
│   └── Feedback.js        # Mongoose schema/model
├── routes/
│   └── feedbackRoutes.js  # API routes
├── .env                   # Environment variables (not in git)
├── .env.example           # Example environment file
├── .gitignore
├── package.json
├── server.js              # Express server entry point
└── README.md
```

## Validation Rules

- **Name**: Required, non-empty string
- **Email**: Optional, must be valid email format if provided
- **Message**: Required, non-empty string
- **Rating**: Required, must be between 1 and 5 (inclusive)

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success (GET requests)
- `201` - Created (POST requests)
- `400` - Bad Request (validation errors)
- `404` - Not Found (invalid routes)
- `500` - Internal Server Error

Error responses follow this format:
```json
{
  "error": "Error type",
  "message": "Detailed error message"
}
```

## CORS Configuration

CORS is enabled to allow requests from the frontend application running on `http://localhost:3000`.

