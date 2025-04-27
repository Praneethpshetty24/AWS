'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Register({ onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://13.60.75.97:3000/api/register', formData);
      setFormData({ name: '', email: '' });
      setError('');
      if (onRegisterSuccess) {
        onRegisterSuccess();
      }
    } catch (err) {
      setError('Error registering user');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-md p-8 bg-black/90 rounded-xl shadow-2xl border border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-white/90">Register New User</h2>
      {error && <p className="text-red-400 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200 font-medium"
        >
          Register
        </button>
      </form>
    </div>
  );
}
