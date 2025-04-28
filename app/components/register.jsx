import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://16.171.58.68:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        onRegister();
        setFormData({ name: '', email: '' });
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Register New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
