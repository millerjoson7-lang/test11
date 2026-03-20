import { LucideIcon } from 'lucide-react';

export interface Vocabulary {
  word: string;
  explanation: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Story {
  id: string;
  title: string;
  icon: string;
  color: string;
  summary: string;
  character: string;
  vocabulary: Vocabulary[];
  goodSentence: {
    text: string;
    explanation: string;
  };
  moral: string;
  questions: Question[];
  reflection: string;
}

export interface UserState {
  points: number;
  completedStories: string[];
  unlockedBadges: string[];
}
