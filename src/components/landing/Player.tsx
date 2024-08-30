// components/Player.tsx

import { Button } from '@/components/ui/button';
import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import React from 'react';
import { Song } from './types';

interface PlayerProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentSong: Song | null;
}

export const Player: React.FC<PlayerProps> = ({
  isPlaying,
  onPlayPause,
  currentSong,
}) => (
  <div className='fixed bottom-0 left-0 right-0 p-4 shadow-md bg-zinc-900'>
    <div className='flex items-center justify-between mx-auto max-w-7xl'>
      <div className='flex items-center space-x-4'>
        <img
          src='/api/placeholder/48/48'
          alt='Album cover'
          className='w-12 h-12 rounded'
        />
        <div>
          <h3 className='font-semibold text-zinc-100'>
            {currentSong?.title || 'No song selected'}
          </h3>
          <p className='text-sm text-zinc-400'>
            {currentSong?.artist || 'Select a song to play'}
          </p>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <Button size='icon' variant='ghost'>
          <SkipBack className='w-4 h-4' />
        </Button>
        <Button size='icon' onClick={onPlayPause}>
          {isPlaying ? <Pause className='w-4 h-4' /> : <Play className='w-4 h-4' />}
        </Button>
        <Button size='icon' variant='ghost'>
          <SkipForward className='w-4 h-4' />
        </Button>
      </div>
      <div className='flex items-center space-x-4'>
        <Volume2 className='w-4 h-4 text-zinc-400' />
        <div className='w-32 h-2 rounded-full bg-zinc-700'>
          <div className='w-1/2 h-2 rounded-full bg-zinc-400'></div>
        </div>
      </div>
    </div>
  </div>
);
