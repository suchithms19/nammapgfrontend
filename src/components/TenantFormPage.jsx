import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TenantFormPage() {
  const [formData, setState] = useState({
    name: '',
    email: '',
    phone: '',
    pgName: '',
    pgAddress: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://nammapgbackend.onrender.com/api/tenant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/thankyou');
      } else {
        console.error('Failed to submit tenant data');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex justify-center mb-8">
        <h1 className="font-semibold text-bluecus text-3xl">Namma Pg</h1>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-center">Apply for Early Access</h1>
      <p className="text-center text-gray-600 mb-8">
        Reserve your spot for a seamless experience with NammaPg.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name *</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email *</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number *</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">PG Name *</label>
          <input 
            type="text" 
            name="pgName"
            value={formData.pgName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">PG Address *</label>
          <input 
            type="text" 
            name="pgAddress"
            value={formData.pgAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-bluecus text-white py-2 rounded-lg hover:scale-105 transition-colors"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Apply'}
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 bg-gray-200 text-gray-700 py-2 rounded-lg hover:scale-105 transition-colors"
        >
          Back
        </button>
      </form>
    </div>
  );
} 