'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function View() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://13.60.75.97:3000/api/users');
      setUsers(response.data.users);
      setError('');
    } catch (err) {
      setError('Error fetching users');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-full max-w-md p-8 bg-black/90 rounded-xl shadow-2xl border border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-white/90">User List</h2>
      {error && <p className="text-red-400 mb-4">{error}</p>}
      <div className="space-y-4">
        {users.map((user) => (
          <div 
            key={user._id} 
            className="p-4 border border-gray-800 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors"
          >
            <p className="text-white font-medium mb-1">{user.name}</p>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
        ))}
        {users.length === 0 && (
          <p className="text-gray-500 text-center py-4">No users found</p>
        )}
      </div>
    </div>
  );
}
