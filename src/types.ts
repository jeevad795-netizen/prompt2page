export type Department = 'CSE' | 'IT' | 'ECE' | 'EEE' | 'MECH' | 'CIVIL';

export interface ParticipantData {
  name: string;
  department: Department;
}

export type ChallengeLevel = 'Intermediate' | 'Advanced';

export interface ChallengeData {
  id: string;
  title: string;
  subtitle: string;
  level: ChallengeLevel;
  description: string;
  features: string[];
}

export interface FileData {
  name: string;
  content: string;
  language: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
