import { audio } from '@/App';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { timeToReadable } from '@/helpers/common';
import { AudioState } from 'audio_x';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import React from 'react';
import { Mood, Song } from './types';

import lyric from '../../assets/lyrics.json';
import LyricsDisplay from './Lyrics';

interface RightSidebarProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  currentMood: Mood;
  lyrics: string;
  audioState: AudioState;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  currentSong,
  onPlayPause,
  lyrics,
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
    <div className='flex flex-col h-full'>
      <div className='flex flex-col items-center p-4'>
        <img
          src={currentSong?.images[2].link}
          alt='Album cover'
          className='w-[200px] h-[200px]  mb-4 rounded-lg'
        />
        <h2 className='font-bold text-md text-zinc-100 line-clamp-1'>
          {currentSong?.title || 'No song selected'}
        </h2>
        <p className='text-sm text-zinc-400 line-clamp-1'>
          {currentSong?.subtitle || 'Select a song to play'}
        </p>
      </div>

      <div className='px-4'>
        <div className='flex justify-center mb-4 space-x-2'>
          <Button size='icon' variant='ghost'>
            <SkipBack className='w-4 h-4' />
          </Button>
          <Button size='icon' onClick={onPlay}>
            {audioState.playbackState === 'playing' ? (
              <Pause className='w-12 h-12' fill='white' strokeWidth={0} />
            ) : (
              <Play className='w-12 h-12' fill='white' strokeWidth={0} />
            )}
          </Button>
          <Button size='icon' variant='ghost'>
            <SkipForward className='w-4 h-4' />
          </Button>
        </div>
        <Slider
          max={Number(audioState.currentTrack.duration)}
          min={0}
          value={[Number(audioState.progress)]}
          className='top-0 w-full'
          onValueChange={(val) => {
            audio.seek(val[0]);
          }}
        />
        <div className='flex justify-between text-[10px] text-zinc-400 mt-2'>
          <span>{timeToReadable(audioState.progress || 0)}</span>
          <span>{timeToReadable(audioState.duration || 0)}</span>
        </div>
      </div>

      {/* <div className='p-4'>
        <h3 className='mb-2 text-lg font-semibold text-zinc-100'>Lyrics</h3>
        <div className='flex flex-col items-center h-56 overflow-y-auto '>
          <div className='text-xl font-medium whitespace-pre-line text-zinc-400'>
            {lyric.data.segments.map((item) => {
              return (
                <p key={item.id} className='leading-10'>
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </div> */}
      <LyricsDisplay
        segments={lyric.data.segments}
        currentTime={audioState.progress || 0}
      />
    </div>
  );
};
