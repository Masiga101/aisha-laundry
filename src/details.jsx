import React from 'react';
import Navigation from './navigation';
import { ChevronDown, RefreshCw } from 'lucide-react';

export default function DetailsPage() {
  const tableHeaders = [
    { name: 'ID', sortable: false },
    { name: 'READY BY', sortable: false },
    { name: 'PLACED', sortable: false },
    { name: 'CUSTOMER', sortable: true },
    { name: 'ORDER', sortable: false },
    { name: 'PCS', sortable: false },
    { name: 'NOTES', sortable: false },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      
      <div className="px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800">Detail</h1>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <div className="text-gray-700">
              <h3 className="text-sm font-medium">Orders</h3>
              <p className="text-lg font-bold">0</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-sm font-medium">Pieces</h3>
              <p className="text-lg font-bold">0</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-sm font-medium">Value</h3>
              <p className="text-lg font-bold">KES0</p>
            </div>
            <div className="text-gray-700">
              <h3 className="text-sm font-medium">Unpaid</h3>
              <p className="text-lg font-bold">KES0</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-white flex items-center border border-gray-300 rounded-md px-4 py-2">
              <span className="text-gray-700 mr-2">Filter Sections</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>
            <button className="text-blue-500">
              <RefreshCw size={24} />
            </button>
          </div>
        </div>
        
        <div className="mt-6 bg-white rounded-md shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  {tableHeaders.map((header) => (
                    <th
                      key={header.name}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="flex items-center">
                        {header.name}
                        {header.sortable && (
                          <ChevronDown size={16} className="ml-1 text-gray-500" />
                        )}
                      </div>
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-3">
                    <input
                      type="text"
                      className="block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Filter"
                    />
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* This would be populated with actual data */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}