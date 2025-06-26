import React, { useState } from 'react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [activeChart, setActiveChart] = useState('verifications');

  // Mock data
  const chartData = {
    verifications: {
      labels: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7'],
      datasets: [
        { label: 'Verified Real', data: [45, 52, 38, 61, 49, 57, 63], color: 'bg-blue-500' },
        { label: 'Detected Fake', data: [12, 18, 15, 9, 21, 14, 11], color: 'bg-red-500' },
        { label: 'Mixed Credibility', data: [3, 5, 7, 4, 6, 5, 4], color: 'bg-yellow-500' }
      ]
    },
    sources: {
      labels: ['Reuters', 'AP News', 'BBC', 'CNN', 'Social Media', 'Blogs', 'Other'],
      datasets: [
        { label: 'Reliability Score', data: [98, 97, 95, 89, 42, 38, 65], color: 'bg-indigo-500' }
      ]
    },
    topics: {
      labels: ['Politics', 'Health', 'Technology', 'Economy', 'Entertainment', 'Sports', 'Science'],
      datasets: [
        { label: 'Fake News Rate', data: [32, 18, 12, 15, 28, 8, 11], color: 'bg-red-500' }
      ]
    }
  };

  const topFakeNews = [
    { id: 1, title: 'Celebrity death hoax spreads online', date: '2023-06-07', shares: '1.2M', source: 'Social Media' },
    { id: 2, title: 'False political scandal allegations', date: '2023-06-05', shares: '876K', source: 'Fringe Blog' },
    { id: 3, title: 'Misleading health advice goes viral', date: '2023-06-03', shares: '754K', source: 'Forum' },
    { id: 4, title: 'Fabricated economic crisis report', date: '2023-05-30', shares: '621K', source: 'Unknown Site' },
    { id: 5, title: 'Doctored celebrity photo scandal', date: '2023-05-28', shares: '587K', source: 'Social Media' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
        <div className="flex space-x-2">
          <select
            className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Total Verifications</h3>
          <p className="text-3xl font-bold text-indigo-600 mb-2">1,248</p>
          <p className="text-green-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            +12.4% from last period
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Fake News Detected</h3>
          <p className="text-3xl font-bold text-red-600 mb-2">327</p>
          <p className="text-green-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            +8.2% from last period
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Average Confidence</h3>
          <p className="text-3xl font-bold text-gray-800 mb-2">94.5%</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '94.5%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Trend Analysis</h2>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeChart === 'verifications' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveChart('verifications')}
            >
              Verifications
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeChart === 'sources' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveChart('sources')}
            >
              Sources
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeChart === 'topics' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveChart('topics')}
            >
              Topics
            </button>
          </div>
        </div>
        
        <div className="h-80">
          {/* In a real app, you would use a charting library like Chart.js here */}
          <div className="flex items-end h-64 border-b border-l border-gray-200 mb-4">
            {chartData[activeChart].labels.map((label, labelIndex) => (
              <div key={label} className="flex-grow flex flex-col items-center px-1">
                <div className="flex items-end justify-center space-x-1 w-full">
                  {chartData[activeChart].datasets.map((dataset, datasetIndex) => (
                    <div
                      key={datasetIndex}
                      className={`${dataset.color} w-4 rounded-t-sm hover:opacity-75 transition`}
                      style={{ height: `${(dataset.data[labelIndex] / Math.max(...dataset.data)) * 100}%` }}
                      title={`${dataset.label}: ${dataset.data[labelIndex]}`}
                    ></div>
                  ))}
                </div>
                <span className="text-xs text-gray-500 mt-1">{label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            {chartData[activeChart].datasets.map((dataset, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 ${dataset.color} rounded-sm mr-2`}></div>
                <span className="text-sm text-gray-700">{dataset.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Top Fake News</h2>
          <div className="space-y-4">
            {topFakeNews.map(item => (
              <div key={item.id} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="bg-red-100 text-red-800 rounded-md p-2 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mt-1">
                    <span className="mr-3">{item.date}</span>
                    <span className="mr-3">{item.shares} shares</span>
                    <span>{item.source}</span>
                  </div>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 ml-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Source Reliability</h2>
          <div className="space-y-3">
            {[
              { name: 'Reuters', reliability: 98, fakeRate: 2, checked: 145 },
              { name: 'Associated Press', reliability: 97, fakeRate: 3, checked: 132 },
              { name: 'BBC News', reliability: 95, fakeRate: 5, checked: 128 },
              { name: 'The Economist', reliability: 94, fakeRate: 6, checked: 87 },
              { name: 'CNN', reliability: 89, fakeRate: 11, checked: 76 }
            ].map((source, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{source.name}</h3>
                  <span className="text-sm font-medium text-gray-700">{source.reliability}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div 
                    className="h-2 rounded-full bg-indigo-600" 
                    style={{ width: `${source.reliability}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Fake rate: {source.fakeRate}%</span>
                  <span>Checked: {source.checked} times</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;