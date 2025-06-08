import React, { useState, useEffect } from 'react';
import { Brain, Settings, Users } from 'lucide-react';
import OverviewTab from './OverviewTab';
import ChallengesTab from './ChallengesTab';
import SetupTab from './SetupTab';
import TabButton from './components/TabButton';

const AIFullStackDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [connectionStatus, setConnectionStatus] = useState('connecting');

  useEffect(() => {
    const timer = setTimeout(() => setConnectionStatus('connected'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-800">AI Full Stack Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Users className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 py-4">
            <TabButton
              id="overview"
              label="Architecture Overview"
              isActive={activeTab === 'overview'}
              onClick={setActiveTab}
            />
            <TabButton
              id="challenges"
              label="Challenges"
              isActive={activeTab === 'challenges'}
              onClick={setActiveTab}
            />
            <TabButton
              id="setup"
              label="Environment Setup"
              isActive={activeTab === 'setup'}
              onClick={setActiveTab}
            />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && <OverviewTab connectionStatus={connectionStatus} />}
        {activeTab === 'challenges' && <ChallengesTab />}
        {activeTab === 'setup' && <SetupTab />}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p className="mb-2">AI Full Stack Architecture - Day 1-15 Implementation</p>
            <p className="text-sm">Built with React, Vite, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIFullStackDashboard;