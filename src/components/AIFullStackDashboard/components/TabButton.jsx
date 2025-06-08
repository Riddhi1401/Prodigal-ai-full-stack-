const TabButton = ({ id, label, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
      isActive 
        ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
    }`}
  >
    {label}
  </button>
);

export default TabButton;