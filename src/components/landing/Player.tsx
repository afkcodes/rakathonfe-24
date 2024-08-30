// components/Player.tsx

import { audio } from '@/App';
import { Button } from '@/components/ui/button';
import { AudioState } from 'audio_x';
import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import React from 'react';
import { Slider } from '../ui/slider';
import { Song } from './types';

interface PlayerProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentSong: Song | null;
  audioState: AudioState;
}

export const Player: React.FC<PlayerProps> = ({
  isPlaying,
  onPlayPause,
  currentSong,
  audioState,
}) => {
  const onPlay = () => {
    if (audioState.playbackState === 'playing') {
      audio.pause();
    } else if (Number(audioState.progress) > 0) {
      audio.play();
    } else {
      onPlayPause();
    }
  };
  return (
    <div className='fixed bottom-0 left-0 right-0 shadow-md bg-zinc-900'>
      <Slider
        max={Number(audioState.currentTrack.duration)}
        min={0}
        value={[Number(audioState.progress)]}
        className='top-0 w-full'
        onValueChange={(val) => {
          audio.seek(val[0]);
          // console.log(val);
        }}
      />
      <div className='flex items-center justify-between p-4 mx-auto max-w-7xl'>
        <div className='flex items-center space-x-4'>
          <img
            src={currentSong?.images[2].link}
            alt='Album cover'
            className='w-12 h-12 rounded'
          />
          <div className='w-40'>
            <h3 className='font-semibold text-zinc-100 line-clamp-1'>
              {currentSong?.title || 'No song selected'}
            </h3>
            <p className='text-sm text-zinc-400 line-clamp-1'>
              {currentSong?.subtitle || 'Select a song to play'}
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <Button size='icon' variant='ghost'>
            <SkipBack className='w-6 h-6' />
          </Button>
          <Button size='icon' onClick={onPlay}>
            {audioState.playbackState === 'playing' ? (
              <Pause className='w-12 h-12' fill='white' strokeWidth={0} />
            ) : (
              <Play className='w-12 h-12' fill='white' strokeWidth={0} />
            )}
          </Button>
          <Button size='icon' variant='ghost'>
            <SkipForward className='w-6 h-6' />
          </Button>
        </div>
        <div className='flex items-center space-x-4 w-44'>
          <Volume2 className='w-8 h-8 text-zinc-400' />
          <Slider
            max={100}
            min={0}
            value={[Number(audioState.volume)]}
            onValueChange={(val) => {
              audio.setVolume(val[0]);
            }}
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
};
