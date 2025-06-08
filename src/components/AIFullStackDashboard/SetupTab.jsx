import { Container, Code, Server, GitBranch, Play, CheckCircle } from 'lucide-react';

const SetupTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Development Environment</h2>
        
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center mb-4">
              <Container className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Docker Configuration</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Containerized development environment with Docker Compose orchestration for seamless deployment.
            </p>
            <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div># docker-compose.yml</div>
              <div>version: '3.8'</div>
              <div>services:</div>
              <div>&nbsp;&nbsp;frontend:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;build: ./frontend</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;ports:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "3000:3000"</div>
              <div>&nbsp;&nbsp;backend:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;build: ./backend</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;ports:</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "8000:8000"</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-blue-200 rounded-xl">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold">Frontend Stack</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  React 18 with Vite
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  TypeScript Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Hot Module Replacement
                </li>
              </ul>
            </div>

            <div className="p-6 border-2 border-green-200 rounded-xl">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-green-600 mr-3" />
                <h4 className="text-lg font-semibold">Backend Stack</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  FastAPI Framework
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Express.js Alternative
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Async/Await Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Auto API Documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl">
        <h3 className="text-xl font-bold mb-4">CI/CD Pipeline</h3>
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <GitBranch className="w-6 h-6 mr-2" />
            <span>Git Integration</span>
          </div>
          <div className="flex items-center">
            <Play className="w-6 h-6 mr-2" />
            <span>Automated Testing</span>
          </div>
          <div className="flex items-center">
            <Container className="w-6 h-6 mr-2" />
            <span>Container Deployment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupTab;