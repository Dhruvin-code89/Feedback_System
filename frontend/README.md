# Feedback System Frontend

A modern React application for collecting and managing user feedback.

## Features

- **Feedback Form**: Submit feedback with name, email, message, and rating (1-5)
- **Dashboard**: View all feedbacks in a table with analytics
- **Analytics Cards**: Display total feedbacks, average rating, positive/negative feedbacks
- **Responsive Design**: Works seamlessly on all devices
- **Form Validation**: Client-side validation for required fields
- **Toast Notifications**: User-friendly success/error messages

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Axios
- React Router
- React Hot Toast

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── api/
  │   └── feedbackService.js    # API service wrapper using Axios
  ├── components/
  │   ├── Navbar.jsx            # Navigation component
  │   ├── Loader.jsx            # Loading spinner
  │   ├── EmptyState.jsx        # Empty state component
  │   └── AnalyticsCard.jsx     # Analytics card component
  ├── pages/
  │   ├── FeedbackForm.jsx      # Feedback submission form
  │   ├── Dashboard.jsx         # Dashboard with table and analytics
  │   └── About.jsx             # About page
  ├── App.jsx                   # Main app component with routing
  ├── main.jsx                  # Entry point
  └── index.css                 # Global styles with Tailwind
```

## API Endpoints

The application expects the following backend endpoints:

- `GET /api/feedback` - Fetch all feedbacks
- `POST /api/feedback` - Submit new feedback

The Vite proxy is configured to forward `/api` requests to `http://localhost:5000`.

## Environment Setup

Make sure your backend API is running on `http://localhost:5000` or update the proxy configuration in `vite.config.js`.

