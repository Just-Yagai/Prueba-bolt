import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Hello, I'm John Doe
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-8 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </div>
  );
}