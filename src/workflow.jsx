import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function WorkflowPage() {
  const workflowStages = [
    { name: 'To-Do', hasDropdown: true },
    { name: 'Washers', hasDropdown: false },
    { name: 'Dryers', hasDropdown: false },
    { name: 'Folding', hasDropdown: false },
    { name: 'Completed', hasDropdown: false }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="grid grid-cols-5 gap-4 h-full">
        {workflowStages.map((stage, index) => (
          <div key={index} className="bg-gray-100 rounded-md flex flex-col">
            <div className="p-4 text-center font-medium text-gray-800 border-b border-gray-200">
              {stage.name}
            </div>
            {stage.hasDropdown && (
              <div className="p-2">
                <button className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 bg-white rounded shadow-sm border border-gray-200">
                  <span>Order Time</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            )}
            <div className="flex-1 overflow-y-auto p-2">
              {/* Cards would be placed here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}