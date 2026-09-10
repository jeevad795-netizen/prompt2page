import { X, Code2, MessageSquare, Play, Send } from 'lucide-react';
import { ChallengeData } from '../types';

interface WelcomeOverlayProps {
  challenge: ChallengeData;
  onClose: () => void;
}

export default function WelcomeOverlay({ challenge, onClose }: WelcomeOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-500/50 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">
            🎯 {challenge.title}
          </h2>
          <p className="text-blue-300">{challenge.subtitle}</p>
          <span className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold ${
            challenge.level === 'Advanced'
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
            {challenge.level}
          </span>
        </div>

        <div className="mb-6 bg-gray-950 rounded-lg p-4 border border-gray-700">
          <h3 className="text-white font-semibold mb-3">Quick Start Guide:</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">1. Use ChatGPT Assistant</p>
                <p className="text-sm text-gray-400">Ask for help, code examples, or design suggestions on the left panel</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">2. Write Your Code</p>
                <p className="text-sm text-gray-400">Edit HTML, CSS, and JavaScript files in the VS Code editor</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Play className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">3. Run & Preview</p>
                <p className="text-sm text-gray-400">Click the Run button to see your project in action</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">4. Submit Your Work</p>
                <p className="text-sm text-gray-400">Complete and submit before the 45-minute timer expires</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <p className="text-yellow-200 text-sm">
            <strong>⚠️ Important:</strong> You have <strong>45 minutes</strong> to complete this challenge. 
            The editor will lock after submission or when time expires. Good luck! 🚀
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
        >
          Start Coding Now!
        </button>
      </div>
    </div>
  );
}
