/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Song {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  images: any[];
  duration: string;
  emotions: string[];
}

export interface Mood {
  Happy: number;
  Sad: number;
  Energetic: number;
  Calm: number;
}

export interface MoodHistoryItem extends Mood {
  time: string;
}

export type MoodHistory = MoodHistoryItem[];
