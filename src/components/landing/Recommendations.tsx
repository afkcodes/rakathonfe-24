// components/Recommendations.tsx

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { SongItem } from './SongItem';
import { Song } from './types';

interface RecommendationsProps {
  songs: Song[];
}

export const Recommendations: React.FC<RecommendationsProps> = ({ songs }) => (
  <Card className='bg-zinc-900 border-zinc-800'>
    <CardContent className='pt-6'>
      <h2 className='mb-4 text-xl font-semibold text-zinc-100'>Song Recommendations</h2>
      <div className='space-y-2'>
        {songs.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
    </CardContent>
  </Card>
);
