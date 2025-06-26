import React from 'react';

const Dashboard = () => {
  const stats = {
    verifiedToday: 24,
    fakeDetected: 8,
    accuracy: 94.5,
    trendingTopics: ['Election', 'Climate Change', 'Health'],
    recentActivity: [
      { id: 1, title: 'COVID vaccine study', result: 'REAL', time: '2h ago' },
      { id: 2, title: 'Political scandal claim', result: 'FAKE', time: '5h ago' },
      { id: 3, title: 'Celebrity death hoax', result: 'FAKE', time: '1d ago' }
    ],
    trustedSources: [
      { name: 'Reuters', score: 98 },
      { name: 'Associated Press', score: 97 },
      { name: 'BBC News', score: 95 },
      { name: 'The Economist', score: 94 }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Verification Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium">Verified Today</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.verifiedToday}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium">Fake Detected</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">{stats.fakeDetected}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium">System Accuracy</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.accuracy}%</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium">Active Monitoring</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
          <p className="text-gray-500 text-sm">sources</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trending Section */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Trending Topics</h2>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">View All</button>
          </div>
          <ul className="space-y-3">
            {stats.trendingTopics.map((topic, index) => (
              <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-700">{topic}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">+42% checks</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Activity Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">View Full History</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stats.recentActivity.map(item => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.result === 'REAL' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.result}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Premium Tools */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Premium Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800">Real-time Monitoring</h3>
            </div>
            <p className="text-gray-600 mb-4">Set up alerts for specific topics and get notified when new information is published</p>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md">
              Configure
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800">Batch Analysis</h3>
            </div>
            <p className="text-gray-600 mb-4">Upload multiple articles at once for comprehensive verification and comparison</p>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md">
              Upload Files
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800">API Access</h3>
            </div>
            <p className="text-gray-600 mb-4">Integrate our verification system directly with your applications and workflows</p>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md">
              Get API Key
            </button>
          </div>
        </div>
      </div>
      
      {/* Trusted Sources */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Your Trusted Sources</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.trustedSources.map((source, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <h3 className="font-medium text-gray-800">{source.name}</h3>
              <div className="mt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {source.score} Reliability
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;