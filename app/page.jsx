// MainPage.jsx

'use client';

import React, { useState, useEffect } from 'react';
import User from './components/user';
import Register from './components/register';
import Update from './components/update';

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://16.171.58.68:3000/api/users');
      const data = await response.json();
      if (data.users) {
        setUsers(data.users);
      } else {
        setUsers([]);
      }
      setError(null);
    } catch (error) {
      setError('Failed to load users');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRegister = () => {
    fetchUsers();
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsUpdating(true);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch('http://16.171.58.68:3000/api/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: userId })
      });

      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdateComplete = () => {
    setIsUpdating(false);
    setSelectedUser(null);
    fetchUsers();
  };

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-8">User Management System</h1>
      
      <Register onRegister={handleRegister} />

      {isUpdating && selectedUser && (
        <Update
          user={selectedUser}
          onUpdate={handleUpdateComplete}
          onCancel={() => setIsUpdating(false)}
        />
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">Users</h2>
        {loading ? (
          <p className="text-gray-400 text-center">Loading users...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : users && users.length > 0 ? (
          <div className="space-y-4">
            {users.map((user) => (
              <User
                key={user._id}
                user={user}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No users found</p>
        )}
      </div>
    </div>
  );
}
