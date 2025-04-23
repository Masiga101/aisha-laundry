import React, { useState } from 'react';
import Navigation from './navigation';
import { Plus, Clock, ChevronUp, ChevronDown } from 'lucide-react';

export default function RecordPage() {
  const [expressDelivery, setExpressDelivery] = useState(true);
  const [quickDrop, setQuickDrop] = useState(false);
  const [saveNotes, setSaveNotes] = useState(false);
  const [retailMode, setRetailMode] = useState(true);
  
  const categories = [
    { name: 'Wash, Fold & Dry', active: true, color: 'bg-pink-300' },
    { name: 'Retail', active: false, color: 'bg-white' },
    { name: 'Dry Cleaning', active: false, color: 'bg-white' },
  ];
  
  const items = [
    { name: 'Laundry per lb', icon: '/api/placeholder/40/40' },
    { name: 'Pillows', icon: '/api/placeholder/40/40' },
    { name: 'Comforters', icon: '/api/placeholder/40/40' },
    { name: 'Bed Sheet', icon: '/api/placeholder/40/40' },
    { name: 'Duvet', icon: '/api/placeholder/40/40' },
    { name: 'Item', icon: '/api/placeholder/40/40', isPlus: true },
    { name: 'Photo', icon: '/api/placeholder/40/40', isCamera: true },
  ];
  
  const defects = [
    'Bubble', 'Button Broken', 'Button Missing', 'Collar Torn', 'Color Loss',
    'Cuff Torn', 'Dye Transfer', 'Faded', 'Hole', 'Iron Mark',
    'Iron Shine', 'Pilling Fabric', 'Snags', 'Tear', 'Torn',
    'Worn Cuffs', 'Worn Collar'
  ];
  
  const colors = [
    'bg-black', 'bg-white border border-gray-200', 'bg-gray-900', 'bg-gray-400', 'bg-blue-200',
    'bg-gray-500', 'bg-red-700', 'bg-blue-600', 'bg-blue-900', 'bg-green-600',
    'bg-red-600', 'bg-yellow-400', 'bg-pink-300', 'bg-orange-500', 'bg-purple-800'
  ];
  
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navigation />
      
      <div className="grid grid-cols-12 flex-1">
        <div className="col-span-9">
          {/* Top Tabs */}
          <div className="flex">
            {categories.map((category) => (
              <div 
                key={category.name}
                className={`px-6 py-4 text-center ${category.active ? category.color : 'bg-white'} cursor-pointer`}
              >
                {category.name}
              </div>
            ))}
          </div>
          
          {/* Item Selection */}
          <div className="grid grid-cols-7 gap-2 p-4">
            {items.map((item) => (
              <div key={item.name} className="bg-white p-4 shadow border border-gray-200 rounded-md flex flex-col items-center justify-center">
                {item.isPlus ? (
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Plus size={24} className="text-gray-500" />
                  </div>
                ) : item.isCamera ? (
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                ) : (
                  <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain" />
                )}
                <span className="mt-2 text-xs text-gray-700 text-center">{item.name}</span>
              </div>
            ))}
          </div>
          
          {/* Defects Section */}
          <div className="mt-16 px-4">
            <div className="grid grid-cols-9 gap-x-8 gap-y-2">
              {defects.map((defect) => (
                <div key={defect} className="text-sm text-gray-700">
                  {defect}
                </div>
              ))}
            </div>
            
            {/* Color Selection */}
            <div className="mt-6 flex flex-wrap gap-2">
              {colors.map((color, index) => (
                <div 
                  key={index}
                  className={`w-8 h-8 rounded-full ${color} cursor-pointer ${index === 12 ? 'ring-2 ring-green-500' : ''}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="col-span-3 border-l border-gray-200 p-4">
          <div className="mb-4">
            <div className="mb-2 text-sm text-gray-500">Customer</div>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
              placeholder="Customer name"
            />
          </div>
          
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-gray-700">Express</span>
            <div 
              className={`w-12 h-6 rounded-full flex items-center px-1 ${expressDelivery ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'}`}
              onClick={() => setExpressDelivery(!expressDelivery)}
            >
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>
          
          <div className="mb-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-lg">1</span>
                <span className="text-gray-500 ml-4">Pillow - Small</span>
              </div>
              <span className="font-medium">5.00</span>
            </div>
            <div className="text-sm text-gray-500">Green/Red</div>
          </div>
          
          <div className="mb-4 flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-500">Pieces</span>
              <span className="ml-16 text-lg">1</span>
            </div>
            <div>
              <span className="text-sm text-gray-500">Bags</span>
            </div>
          </div>
          
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">Notes</span>
            <div 
              className={`w-12 h-6 rounded-full flex items-center px-1 ${saveNotes ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'}`}
              onClick={() => setSaveNotes(!saveNotes)}
            >
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>
          
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">-</span>
              <span className="text-sm text-gray-500">Quick Drop</span>
              <span className="text-gray-500 ml-2">+</span>
            </div>
            <div 
              className={`w-12 h-6 rounded-full flex items-center px-1 ${quickDrop ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'}`}
              onClick={() => setQuickDrop(!quickDrop)}
            >
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>
          
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">Retail</span>
            <div 
              className={`w-12 h-6 rounded-full flex items-center px-1 ${retailMode ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'}`}
              onClick={() => setRetailMode(!retailMode)}
            >
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>
          
          <button className="w-full bg-green-500 text-white py-3 rounded-md flex items-center justify-between px-4 mt-4">
            <div className="flex items-center">
              <span className="font-medium">Submit</span>
              <span className="ml-2 text-sm">Fri 18 Apr</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">KES5.00</span>
              <div className="ml-2 flex flex-col">
                <ChevronUp size={16} className="text-white" />
                <ChevronDown size={16} className="text-white" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}