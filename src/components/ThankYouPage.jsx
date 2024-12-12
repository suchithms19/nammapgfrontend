import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600 mb-8">
        We have received your application. We will contact you soon.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-5 py-3 rounded-xl bg-bluecus text-white hover:scale-105 transition-colors"
      >
        Go to Home
      </button>
    </div>
  );
} 