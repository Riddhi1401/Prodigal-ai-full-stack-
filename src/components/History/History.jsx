import React, { useState } from 'react';

const History = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  const historyData = {
    all: [
      { id: 1, title: 'COVID vaccine study finds significant efficacy', content: 'Recent study shows 95% efficacy...', date: '2023-06-15', result: 'REAL', confidence: 98, source: 'Reuters' },
      { id: 2, title: 'Political scandal rocks administration', content: 'Allegations of misconduct...', date: '2023-06-14', result: 'MIXED', confidence: 65, source: 'Unknown Blog' },
      { id: 3, title: 'Celebrity death hoax spreads online', content: 'False reports claim actor has passed...', date: '2023-06-12', result: 'FAKE', confidence: 92, source: 'Social Media' },
      { id: 4, title: 'Economic growth exceeds expectations', content: 'Q2 GDP numbers show strong recovery...', date: '2023-06-10', result: 'REAL', confidence: 96, source: 'Financial Times' },
      { id: 5, title: 'Alien contact made by scientists', content: 'Researchers claim communication with...', date: '2023-06-08', result: 'FAKE', confidence: 99, source: 'Fringe Website' }
    ],
    real: [
      { id: 1, title: 'COVID vaccine study finds significant efficacy', content: 'Recent study shows 95% efficacy...', date: '2023-06-15', result: 'REAL', confidence: 98, source: 'Reuters' },
      { id: 4, title: 'Economic growth exceeds expectations', content: 'Q2 GDP numbers show strong recovery...', date: '2023-06-10', result: 'REAL', confidence: 96, source: 'Financial Times' }
    ],
    fake: [
      { id: 3, title: 'Celebrity death hoax spreads online', content: 'False reports claim actor has passed...', date: '2023-06-12', result: 'FAKE', confidence: 92, source: 'Social Media' },
      { id: 5, title: 'Alien contact made by scientists', content: 'Researchers claim communication with...', date: '2023-06-08', result: 'FAKE', confidence: 99, source: 'Fringe Website' }
    ],
    mixed: [
      { id: 2, title: 'Political scandal rocks administration', content: 'Allegations of misconduct...', date: '2023-06-14', result: 'MIXED', confidence: 65, source: 'Unknown Blog' }
    ]
  };

  const toggleSelectItem = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    // In a real app, you would call an API here
    alert(`Deleted ${selectedItems.length} items`);
    setSelectedItems([]);
  };

  const exportSelected = () => {
    // In a real app, you would generate a report
    alert(`Exported ${selectedItems.length} items`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Verification History</h1>
        <div className="flex space-x-3">
          {selectedItems.length > 0 && (
            <>
              <button 
                onClick={deleteSelected}
                className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md text-sm font-medium"
              >
                Delete Selected
              </button>
              <button 
                onClick={exportSelected}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium"
              >
                Export Selected
              </button>
            </>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'all' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('all')}
          >
            All Items
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'real' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('real')}
          >
            Verified Real
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'fake' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('fake')}
          >
            Detected Fake
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm ${activeTab === 'mixed' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('mixed')}
          >
            Mixed Credibility
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input 
                    type="checkbox" 
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                    checked={selectedItems.length === historyData[activeTab].length}
                    onChange={() => {
                      if (selectedItems.length === historyData[activeTab].length) {
                        setSelectedItems([]);
                      } else {
                        setSelectedItems(historyData[activeTab].map(item => item.id));
                      }
                    }}
                  />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {historyData[activeTab].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input 
                      type="checkbox" 
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectItem(item.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{item.content}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.result === 'REAL' ? 'bg-blue-100 text-blue-800' :
                      item.result === 'FAKE' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.result}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            item.result === 'REAL' ? 'bg-blue-600' :
                            item.result === 'FAKE' ? 'bg-red-600' :
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${item.confidence}%` }}
                        ></div>
                      </div>
                      <span className="ml-2">{item.confidence}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Share</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{historyData[activeTab].length}</span> of{' '}
            <span className="font-medium">{historyData[activeTab].length}</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-4">History Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-sm font-medium text-blue-800 mb-1">Total Verifications</h3>
            <p className="text-2xl font-bold text-blue-600">1,248</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="text-sm font-medium text-green-800 mb-1">Verified Real</h3>
            <p className="text-2xl font-bold text-green-600">856 (68.6%)</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="text-sm font-medium text-red-800 mb-1">Detected Fake</h3>
            <p className="text-2xl font-bold text-red-600">327 (26.2%)</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <h3 className="text-sm font-medium text-yellow-800 mb-1">Mixed Credibility</h3>
            <p className="text-2xl font-bold text-yellow-600">65 (5.2%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;