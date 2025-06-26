import React from 'react';

const PremiumFeatures = () => {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Set up alerts for specific topics and get notified when new information is published.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      ),
      included: true
    },
    {
      title: "Batch Analysis",
      description: "Upload multiple articles at once for comprehensive verification and comparison.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      included: true
    },
    {
      title: "API Access",
      description: "Integrate our verification system directly with your applications and workflows.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      included: true
    },
    {
      title: "Advanced Analytics",
      description: "Detailed reports and insights about misinformation trends and patterns.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      included: true
    },
    {
      title: "Team Collaboration",
      description: "Share verification results and collaborate with your team members.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      included: true
    },
    {
      title: "Browser Extension",
      description: "Verify news directly in your browser with our companion extension.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      included: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Premium Features</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Unlock the full potential of TruthGuard with our premium subscription
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Basic</h2>
            <p className="text-gray-600 mb-4">For individuals getting started with fact-checking</p>
            <div className="text-4xl font-bold text-gray-800 mb-2">$0<span className="text-lg text-gray-500">/month</span></div>
            <button className="w-full mt-4 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
              Your Current Plan
            </button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Basic news verification</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Limited history (30 days)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>10 verifications per day</span>
            </li>
            <li className="flex items-start text-gray-400">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span>No advanced analytics</span>
            </li>
            <li className="flex items-start text-gray-400">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span>No API access</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-500 relative">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            RECOMMENDED
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Professional</h2>
            <p className="text-gray-600 mb-4">For power users and small teams</p>
            <div className="text-4xl font-bold text-gray-800 mb-2">$29<span className="text-lg text-gray-500">/month</span></div>
            <button className="w-full mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium">
              Upgrade Now
            </button>
          </div>
          <ul className="space-y-3">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature.title}</span>
              </li>
            ))}
            <li className="flex items-start text-gray-400">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span>Limited team collaboration</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h2>
            <p className="text-gray-600 mb-4">For organizations and large teams</p>
            <div className="text-4xl font-bold text-gray-800 mb-2">$99<span className="text-lg text-gray-500">/month</span></div>
            <button className="w-full mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium">
              Contact Sales
            </button>
          </div>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature.title}</span>
              </li>
            ))}
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Priority support</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Premium Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-indigo-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-indigo-800 mb-3">Ready to upgrade?</h2>
        <p className="text-indigo-600 mb-6 max-w-2xl mx-auto">
          Join thousands of users who trust TruthGuard Premium for accurate, reliable news verification
        </p>
        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm">
          Get Premium Now
        </button>
      </div>
    </div>
  );
};

export default PremiumFeatures;