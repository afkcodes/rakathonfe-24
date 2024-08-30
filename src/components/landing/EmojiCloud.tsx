// components/MoodEmojiCloud.tsx

import React from 'react';
import { Mood } from './types';

interface MoodEmojiProps {
  emoji: string;
  value: number;
  max: number;
}

const MoodEmoji: React.FC<MoodEmojiProps> = ({ emoji, value, max }) => {
  const size = 32 + (value / max) * 64;

  return (
    <span
      className='inline-block m-2 transition-all duration-500 ease-in-out'
      style={{
        fontSize: `${size}px`,
        opacity: 0.3 + (value / max) * 0.7,
      }}>
      {emoji}
    </span>
  );
};

interface MoodEmojiCloudProps {
  moods: Mood;
}

export const MoodEmojiCloud: React.FC<MoodEmojiCloudProps> = ({ moods }) => {
  const maxValue = Math.max(...Object.values(moods));

  const moodEmojis: Record<keyof Mood, string> = {
    Happy: '😄',
    Sad: '😢',
    Energetic: '⚡',
    Calm: '😌',
  };

  return (
    <div className='p-4 text-center'>
      {(Object.entries(moods) as [keyof Mood, number][]).map(([mood, value]) => (
        <MoodEmoji key={mood} emoji={moodEmojis[mood]} value={value} max={maxValue} />
      ))}
    </div>
  );
};
