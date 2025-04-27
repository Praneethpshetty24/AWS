'use client';
import { useState } from 'react';
import Register from './components/register';
import View from './components/view';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRegisterSuccess = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white/90 tracking-tight">
            User Management
          </h1>
          <p className="mt-2 text-gray-400">Register and manage your users</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Register onRegisterSuccess={handleRegisterSuccess} />
          <View key={refreshKey} />
        </div>
      </div>
    </div>
  );
}
