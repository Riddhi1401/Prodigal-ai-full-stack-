import { Code, Server, Brain, Database, Zap, Clock, Shield } from 'lucide-react';
import StatusBadge from './components/StatusBadge';
import MetricCard from './components/MetricCard';

const OverviewTab = ({ connectionStatus }) => {
  const metrics = {
    apiCalls: 1247,
    modelAccuracy: 94.2,
    latency: 234,
    uptime: 99.8
  };

  const architectureComponents = [
    {
      name: 'React Frontend',
      type: 'frontend',
      status: 'active',
      icon: <Code className="w-6 h-6" />,
      description: 'Modern UI with Vite & Tailwind'
    },
    {
      name: 'FastAPI Backend',
      type: 'backend',
      status: 'active',
      icon: <Server className="w-6 h-6" />,
      description: 'High-performance Python API'
    },
    {
      name: 'AI Model Service',
      type: 'ai',
      status: 'active',
      icon: <Brain className="w-6 h-6" />,
      description: 'ML model inference engine'
    },
    {
      name: 'Database',
      type: 'database',
      status: 'active',
      icon: <Database className="w-6 h-6" />,
      description: 'Data persistence layer'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-4">AI Full Stack Architecture</h1>
        <p className="text-blue-100 text-lg mb-6">
          Modern integration of frontend, backend APIs, and AI model serving with real-time monitoring.
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${connectionStatus === 'connected' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
            <span className="text-sm">System Status: </span>
            <StatusBadge status={connectionStatus} />
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="API Calls Today" 
          value={metrics.apiCalls.toLocaleString()} 
          unit="" 
          icon={<Zap className="w-6 h-6 text-blue-600" />}
          trend={12}
        />
        <MetricCard 
          title="Model Accuracy" 
          value={metrics.modelAccuracy} 
          unit="%" 
          icon={<Brain className="w-6 h-6 text-purple-600" />}
          trend={2.1}
        />
        <MetricCard 
          title="Avg Latency" 
          value={metrics.latency} 
          unit="ms" 
          icon={<Clock className="w-6 h-6 text-orange-600" />}
          trend={-5.3}
        />
        <MetricCard 
          title="Uptime" 
          value={metrics.uptime} 
          unit="%" 
          icon={<Shield className="w-6 h-6 text-green-600" />}
          trend={0.2}
        />
      </div>

      {/* Architecture Components */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureComponents.map((component, index) => (
            <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  {component.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{component.name}</h3>
                  <StatusBadge status={component.status} />
                </div>
              </div>
              <p className="text-gray-600 text-sm">{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;