/* eslint-disable @typescript-eslint/no-explicit-any */
import {MOOD_ANGRY,MOOD_HAPPY,MOOD_RELAX,MOOD_ENERGETIC,MOOD_SAD} from '../../constants/common.constants';
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
  [MOOD_HAPPY]: number;
  [MOOD_ANGRY]: number;
  [MOOD_ENERGETIC]: number;
  [MOOD_SAD]: number;
  [MOOD_RELAX]: number;
}

export interface MoodHistoryItem extends Mood {
  time: string;
}

export type MoodHistory = MoodHistoryItem[];
