import React from 'react';
import { Search, MessageSquare, HelpCircle, RefreshCw } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { name: 'Record', href: '#', active: false },
    { name: 'Tagging', href: '#', active: true },
    { name: 'Cleaning', href: '#', active: false },
    { name: 'Press & Iron', href: '#', active: false },
    { name: 'Sorting', href: '#', active: false },
    { name: 'Packing & Ready To Deliver', href: '#', active: false },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-white p-1 border border-purple-800">
          <img src="/api/placeholder/40/40" alt="Aisha Drycleaners Logo" className="h-8 w-8" />
        </div>
        <button className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <div className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`px-1 py-2 text-sm font-medium ${
              item.active ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-500">
          <Search size={20} />
        </button>
        <button className="text-gray-500">
          <MessageSquare size={20} />
        </button>
        <div className="flex items-center space-x-1">
          <span className="text-gray-500">Help</span>
          <HelpCircle size={20} className="text-gray-500" />
        </div>
        <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center text-white text-sm">
          IW
        </div>
        <button className="bg-purple-800 text-white px-4 py-2 rounded-md font-medium text-sm">
          JOIN NOW
        </button>
      </div>
    </nav>
  );
}