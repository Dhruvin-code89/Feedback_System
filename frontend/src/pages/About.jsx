const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
          
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 mb-4">
              Welcome to the Feedback System! This application allows users to submit feedback
              and view analytics on all submitted feedbacks.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Submit feedback with name, email, message, and rating</li>
              <li>View all feedbacks in a comprehensive dashboard</li>
              <li>Analytics including total feedbacks, average rating, and sentiment analysis</li>
              <li>Fully responsive design for all devices</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Technology Stack</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>React with Vite for fast development</li>
              <li>Tailwind CSS for modern, responsive styling</li>
              <li>Axios for API communication</li>
              <li>React Router for navigation</li>
              <li>React Hot Toast for notifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

