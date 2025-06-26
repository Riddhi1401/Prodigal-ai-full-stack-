import React, { useState } from 'react';

const SourcesChecker = () => {
  const [sourceUrl, setSourceUrl] = useState('');
  const [sourceInfo, setSourceInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([
    { name: 'Reuters', url: 'reuters.com', lastChecked: '2 days ago', reliability: 98 },
    { name: 'BBC News', url: 'bbc.com', lastChecked: '1 week ago', reliability: 95 },
    { name: 'Associated Press', url: 'apnews.com', lastChecked: '3 days ago', reliability: 97 }
  ]);

  const checkSource = (e) => {
    e.preventDefault();
    if (!sourceUrl) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newSource = {
        name: sourceUrl.includes('nytimes') ? 'The New York Times' : 
              sourceUrl.includes('bbc') ? 'BBC News' : 
              sourceUrl.includes('reuters') ? 'Reuters' : 'Unknown Source',
        url: sourceUrl,
        reliability: Math.floor(Math.random() * 100),
        bias: ['Left', 'Center', 'Right'][Math.floor(Math.random() * 3)],
        factChecking: Math.random() > 0.5 ? 'Strong' : 'Weak',
        history: [
          { date: '2023-01-15', accuracy: 92 },
          { date: '2023-02-20', accuracy: 88 },
          { date: '2023-03-10', accuracy: 95 }
        ],
        recentArticles: [
          { title: 'Recent article 1', url: '#', classification: 'REAL' },
          { title: 'Recent article 2', url: '#', classification: 'MIXED' },
          { title: 'Recent article 3', url: '#', classification: 'REAL' }
        ]
      };
      
      setSourceInfo(newSource);
      setIsLoading(false);
      
      // Add to history if not already there
      if (!history.some(item => item.url.includes(newSource.url))) {
        setHistory([{
          name: newSource.name,
          url: newSource.url,
          lastChecked: 'Just now',
          reliability: newSource.reliability
        }, ...history]);
      }
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Source Reliability Checker</h1>
      <p className="text-gray-600 mb-6">Verify the credibility of news sources before trusting their content</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={checkSource} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
            <div className="flex">
              <input
                type="url"
                className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="Enter news source domain or URL"
                required
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className={`px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-r-lg ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Checking...' : 'Analyze'}
              </button>
            </div>
          </form>
          
          {sourceInfo && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{sourceInfo.name}</h2>
                  <a href={`https://${sourceInfo.url}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm">
                    {sourceInfo.url}
                  </a>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    sourceInfo.reliability >= 80 ? 'bg-green-500' : 
                    sourceInfo.reliability >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-700">
                    {sourceInfo.reliability >= 80 ? 'Highly Reliable' : 
                     sourceInfo.reliability >= 60 ? 'Mostly Reliable' : 
                     'Low Reliability'}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Reliability Score</h4>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-gray-800 mr-2">{sourceInfo.reliability}</div>
                    <div className="text-sm text-gray-500">/100</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Political Bias</h4>
                  <div className="text-lg font-medium text-gray-800">{sourceInfo.bias}-leaning</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Fact-Checking</h4>
                  <div className="text-lg font-medium text-gray-800">{sourceInfo.factChecking}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Historical Accuracy</h3>
                <div className="h-64 bg-gray-50 p-4 rounded-lg">
                  <div className="flex h-full items-end space-x-2">
                    {sourceInfo.history.map((entry, index) => (
                      <div key={index} className="flex flex-col items-center flex-grow">
                        <div 
                          className="w-full bg-indigo-100 rounded-t-sm hover:bg-indigo-200 transition"
                          style={{ height: `${entry.accuracy}%` }}
                          title={`${entry.accuracy}% on ${entry.date}`}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">{entry.date.split('-')[1]}/{entry.date.split('-')[2]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Recent Articles from this Source</h3>
                <div className="space-y-3">
                  {sourceInfo.recentArticles.map((article, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <a href={article.url} className="text-indigo-600 hover:underline flex-grow">{article.title}</a>
                      <span className={`ml-4 text-xs px-2 py-1 rounded-full ${
                        article.classification === 'REAL' ? 'bg-blue-100 text-blue-800' :
                        article.classification === 'MIXED' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {article.classification}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
                  Monitor This Source
                </button>
                <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-md">
                  Compare with Others
                </button>
                <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-md">
                  Export Report
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Your Source History</h2>
            <div className="space-y-4">
              {history.map((item, index) => (
                <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    item.reliability >= 80 ? 'bg-green-500' : 
                    item.reliability >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.url}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{item.lastChecked}</p>
                    <p className="text-sm font-medium">{item.reliability}/100</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Top Trusted Sources</h2>
            <div className="space-y-3">
              {[
                { name: 'Reuters', score: 98, description: 'International news organization' },
                { name: 'Associated Press', score: 97, description: 'Non-profit news cooperative' },
                { name: 'BBC News', score: 95, description: 'British public service broadcaster' },
                { name: 'The Economist', score: 94, description: 'Global newspaper and magazine' }
              ].map((source, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-gray-800">{source.name}</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {source.score}/100
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{source.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcesChecker;