import React, { useState } from 'react';
import { FiSave, FiX } from 'react-icons/fi';

const Update = ({ user, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    id: user._id,
    name: user.name,
    email: user.email,
  });
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsUpdating(true);
      setError(null);

      const response = await fetch('http://16.171.58.68:3000/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: formData.id,
          name: formData.name,
          email: formData.email
        })
      });

      const data = await response.json();
      if (response.ok) {
        onUpdate();
      } else {
        throw new Error('Failed to update user');
      }
    } catch (error) {
      setError('Failed to update user. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 w-full max-w-md relative">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6">Update User</h2>
        
        {error && (
          <div className="bg-red-900/50 border border-red-500/50 rounded-md p-3 mb-4">
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
              required
              disabled={isUpdating}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
              required
              disabled={isUpdating}
            />
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              disabled={isUpdating}
              className={`flex-1 ${
                isUpdating ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-500'
              } text-white py-3 rounded-md transition-all duration-200 font-semibold flex justify-center items-center gap-2`}
            >
              <FiSave className="w-4 h-4" />
              {isUpdating ? 'Updating...' : 'Update'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              disabled={isUpdating}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-md transition-all duration-200 font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;

