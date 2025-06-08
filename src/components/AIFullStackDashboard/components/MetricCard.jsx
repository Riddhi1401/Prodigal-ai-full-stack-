import { Activity } from 'lucide-react';

const MetricCard = ({ title, value, unit, icon, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-blue-100 rounded-lg">
        {icon}
      </div>
      {trend && (
        <div className={`flex items-center text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
          <Activity className="w-4 h-4 mr-1" />
          {trend > 0 ? '+' : ''}{trend}%
        </div>
      )}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-1">{value}{unit}</h3>
    <p className="text-gray-600 text-sm">{title}</p>
  </div>
);

export default MetricCard;