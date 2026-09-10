import { useNavigate } from 'react-router-dom';
import { ParticipantData, ChallengeData } from '../types';
import { Building2, Leaf, Plane, ArrowRight, User, GraduationCap } from 'lucide-react';

interface ChallengeSelectionProps {
  participant: ParticipantData;
  onSelectChallenge: (challenge: ChallengeData) => void;
}

const challenges: ChallengeData[] = [
  {
    id: 'P01',
    title: 'Smart Campus Hub',
    subtitle: 'Campus Information Portal',
    level: 'Intermediate',
    description: 'Create a modern campus information hub with real-time updates and event management.',
    features: ['Hero Section with Campus Overview', 'Events Calendar & Listings', 'Campus News & Updates Feed'],
  },
  {
    id: 'P02',
    title: 'EcoTrack',
    subtitle: 'Environmental Impact Tracker',
    level: 'Advanced',
    description: 'Build a comprehensive environmental tracking dashboard with data visualization.',
    features: ['Impact Overview Dashboard', 'Environmental Statistics & Charts', 'Action Center & Challenges'],
  },
  {
    id: 'P03',
    title: 'TravelMate',
    subtitle: 'Travel Planning Companion',
    level: 'Intermediate',
    description: 'Design an interactive travel planning platform with destination guides and itineraries.',
    features: ['Destination Hero Section', 'Interactive Itinerary Builder', 'Travel Tips & Recommendations'],
  },
];

const challengeIcons = {
  P01: Building2,
  P02: Leaf,
  P03: Plane,
};

const levelColors = {
  Intermediate: 'from-blue-500 to-cyan-500',
  Advanced: 'from-red-500 to-orange-500',
};

export default function ChallengeSelection({ participant, onSelectChallenge }: ChallengeSelectionProps) {
  const navigate = useNavigate();

  const handleSelectChallenge = (challenge: ChallengeData) => {
    onSelectChallenge(challenge);
    navigate('/workspace');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">PROMPT 2 PAGE</h1>
              <p className="text-sm text-blue-300">ACETCM'26 - Round 2</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <User className="w-4 h-4" />
                <span className="font-medium">{participant.name}</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-400/30">
                <GraduationCap className="w-4 h-4" />
                <span className="font-medium">{participant.department}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Select Your Challenge</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Choose a project track that matches your interests and skill level. Each challenge is designed to test your AI prompting and web development abilities.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge) => {
            const Icon = challengeIcons[challenge.id as keyof typeof challengeIcons];
            return (
              <div
                key={challenge.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${levelColors[challenge.level]} p-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="bg-black/30 px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {challenge.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{challenge.id}</h3>
                  <h4 className="text-xl font-semibold text-white/90">{challenge.title}</h4>
                  <p className="text-sm text-white/80 mt-1">{challenge.subtitle}</p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 text-sm">{challenge.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-blue-300 uppercase">Key Features</p>
                    {challenge.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSelectChallenge(challenge)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition transform group-hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Start Challenge
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 text-center">
          <p className="text-yellow-200">
            <strong>Time Limit:</strong> 45 minutes per challenge | <strong>Tools:</strong> ChatGPT Simulator + VS Code IDE | <strong>Submit:</strong> Complete project before time expires
          </p>
        </div>
      </div>
    </div>
  );
}
