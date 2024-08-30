// components/SongItem.tsx

import { timeToReadable } from '@/helpers/common';
import React from 'react';
import { Song } from './types';

interface SongItemProps {
  song: Song;
  onPlay: () => void;
}

export const SongItem: React.FC<SongItemProps> = ({ song, onPlay }) => {
  return (
    <div className='flex items-center justify-between w-full p-2 rounded bg-zinc-800'>
      <div className='flex space-x-2 '>
        <div className='overflow-hidden rounded-sm w-14 h-14'>
          <img src={song.images[2].link} alt={song.title} />
        </div>
        <div>
          <p className='font-semibold text-zinc-100'>{song.title}</p>
          <p className='text-sm text-zinc-400'>{song.subtitle}</p>
        </div>
      </div>
      <div>
        <p className='pr-2 text-background'>{timeToReadable(Number(song.duration))}</p>
      </div>
    </div>
  );
};
