import { useState } from 'react';
import { ParticipantData, Department } from '../types';
import { Code2, Trophy } from 'lucide-react';

interface LoginProps {
  onLogin: (participant: ParticipantData) => void;
}

const departments: Department[] = ['CSE', 'IT', 'ECE', 'EEE', 'MECH', 'CIVIL'];

export default function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState<Department>('CSE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin({ name: name.trim(), department });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-3 rounded-xl">
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              PROMPT 2 PAGE
            </h1>
            <p className="text-blue-200 font-semibold">ACETCM'26</p>
            <div className="mt-4 bg-white/10 rounded-lg p-3 border border-white/20">
              <p className="text-sm text-white font-medium">Round 2: AI Creative Web Challenge</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Participant Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-white mb-2">
                Department
              </label>
              <select
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value as Department)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept} className="bg-gray-900">
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg"
            >
              Enter Challenge Arena
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-white/70">
              Test your AI prompting and front-end coding abilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
