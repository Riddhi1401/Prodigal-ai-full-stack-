const StatusBadge = ({ status }) => {
  const statusConfig = {
    active: { color: 'bg-green-500', text: 'Active' },
    connecting: { color: 'bg-yellow-500', text: 'Connecting' },
    connected: { color: 'bg-blue-500', text: 'Connected' },
    resolved: { color: 'bg-green-500', text: 'Resolved' },
    'in-progress': { color: 'bg-orange-500', text: 'In Progress' }
  };

  const config = statusConfig[status] || { color: 'bg-gray-500', text: 'Unknown' };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${config.color}`}>
      {config.text}
    </span>
  );
};

export default StatusBadge;