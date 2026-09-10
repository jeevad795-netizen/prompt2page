import { ParticipantData, ChallengeData } from '../types';
import { Clock, User, GraduationCap, Trophy, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  participant: ParticipantData;
  challenge: ChallengeData;
  timeRemaining: number;
  isSubmitted: boolean;
  onSubmit: () => void;
}

export default function Header({ participant, challenge, timeRemaining, isSubmitted, onSubmit }: HeaderProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const timeColor = timeRemaining < 300 ? 'text-red-400' : timeRemaining < 900 ? 'text-yellow-400' : 'text-green-400';

  return (
    <header className="bg-gray-950 border-b border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-lg font-bold text-white">PROMPT 2 PAGE</h1>
            <p className="text-xs text-gray-400">ACETCM'26</p>
          </div>
          
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-2 rounded-lg border border-blue-500/30">
            <Trophy className="w-4 h-4 text-blue-400" />
            <div>
              <p className="text-xs text-gray-400">Challenge</p>
              <p className="text-sm font-bold text-white">{challenge.id} - {challenge.title}</p>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            challenge.level === 'Advanced' 
              ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
            {challenge.level}
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-white">{participant.name}</span>
          </div>

          <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-white">{participant.department}</span>
          </div>

          <div className={`flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border ${
            timeRemaining < 300 ? 'border-red-500/50' : 'border-gray-700'
          }`}>
            <Clock className={`w-4 h-4 ${timeColor}`} />
            <span className={`text-sm font-mono font-bold ${timeColor}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>

          {isSubmitted ? (
            <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-green-400">Submitted</span>
            </div>
          ) : (
            <button
              onClick={onSubmit}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              Submit Project
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
