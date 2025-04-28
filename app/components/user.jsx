import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const User = ({ user, onDelete, onUpdate }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex justify-between items-center hover:border-gray-600 transition-all duration-200">
      <div className="flex-1">
        <h3 className="text-white text-lg font-semibold mb-1">{user.name}</h3>
        <p className="text-gray-400">{user.email}</p>
        <p className="text-gray-500 text-sm mt-1">ID: {user._id}</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => onUpdate(user)}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 text-sm"
        >
          <FiEdit2 className="w-4 h-4" />
          Update
        </button>
        <button
          onClick={() => onDelete(user._id)}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 text-sm"
        >
          <FiTrash2 className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
