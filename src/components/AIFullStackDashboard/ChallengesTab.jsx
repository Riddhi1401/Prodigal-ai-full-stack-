import { AlertCircle, Clock, Shield } from 'lucide-react';
import StatusBadge from './components/StatusBadge';
// nothing 

const ChallengesTab = () => {
  const challenges = [
    {
      title: 'Data Synchronization',
      description: 'Real-time sync between frontend and backend',
      status: 'resolved',
      impact: 'high'
    },
    {
      title: 'Latency Optimization',
      description: 'Minimizing response times across components',
      status: 'in-progress',
      impact: 'medium'
    },
    {
      title: 'Security Implementation',
      description: 'End-to-end encryption and authentication',
      status: 'resolved',
      impact: 'high'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Architecture Challenges</h2>
        <div className="space-y-4">
          {challenges.map((challenge, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 mr-3">{challenge.title}</h3>
                    <StatusBadge status={challenge.status} />
                  </div>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
                <div className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${
                  challenge.impact === 'high' ? 'bg-red-100 text-red-800' : 
                  challenge.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-green-100 text-green-800'
                }`}>
                  {challenge.impact.toUpperCase()} IMPACT
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-2xl">
        <h3 className="text-xl font-bold mb-4">Key Considerations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-2">Data Synchronization</h4>
              <p className="text-orange-100 text-sm">Ensuring consistent state across distributed components</p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-2">Latency Management</h4>
              <p className="text-orange-100 text-sm">Optimizing response times for real-time interactions</p>
            </div>
          </div>
          <div className="flex items-start">
            <Shield className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-2">Security</h4>
              <p className="text-orange-100 text-sm">Implementing robust authentication and data protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesTab;