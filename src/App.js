import React, { useState } from 'react';
import LoginPage from './login';
import DetailsPage from './details';
import WorkflowPage from './workflow';
import RecordPage from './recordPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <LoginPage onLogin={() => setCurrentPage('details')} />;
      case 'details':
        return <DetailsPage onNavigate={setCurrentPage} />;
      case 'workflow':
        return <WorkflowPage onNavigate={setCurrentPage} />;
      case 'record':
        return <RecordPage onNavigate={setCurrentPage} />;
      default:
        return <LoginPage onLogin={() => setCurrentPage('details')} />;
    }
  };
  
  // Navigation controls for demo purposes
  const DemoNav = () => (
    <div className="fixed bottom-4 right-4 bg-white p-2 rounded-md shadow-lg z-50">
      <div className="text-sm font-medium mb-2">Demo Navigation:</div>
      <div className="flex gap-2">
        <button 
          onClick={() => setCurrentPage('login')}
          className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
        >
          Login
        </button>
        <button 
          onClick={() => setCurrentPage('details')}
          className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
        >
          Details
        </button>
        <button 
          onClick={() => setCurrentPage('workflow')}
          className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
        >
          Workflow
        </button>
        <button 
          onClick={() => setCurrentPage('record')}
          className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
        >
          Record
        </button>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
      <DemoNav />
    </div>
  );
}