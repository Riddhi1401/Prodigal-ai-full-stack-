import React, { useState } from 'react';

const NewsClassifier = () => {
  const [inputType, setInputType] = useState('text');
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResult({
        classification: Math.random() > 0.5 ? 'REAL' : 'FAKE',
        confidence: (Math.random() * 100).toFixed(2),
        explanation: 'Our AI analyzed the content and found several indicators of credibility including source verification, factual consistency, and corroboration with other reliable sources.',
        sources: ['Reuters.com', 'APNews.com', 'FactCheck.org'],
        similarArticles: [
          { title: 'Related verified article on this topic', url: '#', credibility: 'high' },
          { title: 'Alternative perspective from trusted source', url: '#', credibility: 'medium' }
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Advanced News Verification</h2>
      <p className="text-gray-600 mb-6">Get comprehensive analysis of news content using our premium AI technology</p>
      
      <div className="flex space-x-2 mb-6">
        <button 
          className={`px-4 py-2 rounded-md ${inputType === 'text' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setInputType('text')}
        >
          Text Input
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${inputType === 'url' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setInputType('url')}
        >
          URL
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${inputType === 'file' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setInputType('file')}
        >
          Document
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        {inputType === 'text' && (
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste news content here..."
            rows={8}
          />
        )}
        {inputType === 'url' && (
          <input
            type="url"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter news article URL"
          />
        )}
        {inputType === 'file' && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              className="hidden"
              id="file-upload"
              onChange={(e) => setFile(e.target.files[0])}
              accept=".pdf,.doc,.docx,.txt"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  {file ? file.name : 'Drag and drop file here or click to browse'}
                </p>
              </div>
            </label>
          </div>
        )}
        
        <div className="mt-4 space-y-2">
          <h4 className="font-medium text-gray-700">Advanced Options:</h4>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-gray-700">Include source verification</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-gray-700">Cross-check with similar articles</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
              <span className="ml-2 text-gray-700">Perform deep analysis</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`mt-6 w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : 'Verify Authenticity'}
        </button>
      </form>

      {result && (
        <div className={`p-6 rounded-lg mb-6 ${result.classification === 'REAL' ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800">Verification Result: 
              <span className={`ml-2 ${result.classification === 'REAL' ? 'text-blue-600' : 'text-red-600'}`}>
                {result.classification}
              </span>
            </h3>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${result.classification === 'REAL' ? 'bg-blue-600' : 'bg-red-600'}`} 
                  style={{ width: `${result.confidence}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{result.confidence}% Confidence</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800">Analysis Breakdown:</h4>
              <p className="text-gray-700 mt-1">{result.explanation}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800">Source Reliability:</h4>
              <ul className="mt-2 space-y-2">
                {result.sources.map((source, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{source}</span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">92% reliable</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800">Similar Articles:</h4>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {result.similarArticles.map((article, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <a href={article.url} className="text-indigo-600 hover:underline">{article.title}</a>
                    <span className={`ml-2 text-xs px-2 py-1 rounded-full ${article.credibility === 'high' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {article.credibility} credibility
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
              Save to History
            </button>
            <button className="px-4 py-2 bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-600 rounded-md">
              Export Report
            </button>
            <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-md">
              Share Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsClassifier;