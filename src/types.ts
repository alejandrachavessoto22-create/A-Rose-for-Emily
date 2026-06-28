export interface TimelineEvent {
  id: string;
  text: string;
  narrativeOrder: number; // The order it appears in the story
  chronologicalOrder: number; // The actual chronological order (1-indexed)
  description: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string; // The text of the correct answer
  feedback: string;
}

export interface PillarCard {
  id: string;
  title: string;
  description: string;
  quote: string;
  citation: string;
}

export interface EvidenceRow {
  id: string;
  characteristic: string;
  evidence: string;
  explanation: string;
}

export interface DustCard {
  id: string;
  term: string;
  preview: string;
  definition: string;
  historicalFact: string;
}

export interface CharacterData {
  id: string;
  name: string;
  role: string;
  traits: string[];
  description: string;
  symbolism: string;
  keyQuote: string;
  historicalContext: string;
}

