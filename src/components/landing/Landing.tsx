/* eslint-disable @typescript-eslint/no-explicit-any */
// App.tsx

import { audio } from '@/App';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AudioStateContainer from '@/container/AudioStateContainer';
import { createMediaTrack } from '@/helpers/common';
import { AudioState } from 'audio_x';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import song from '../../assets/song.json';
import { MoodGraphSection } from './MoodGraphSection';
import { QuickActions } from './QuickActions';
import { RightSidebar } from './RightSideBar';
import { MoodHistory, Song } from './types';
import { WeeklyTrends } from './WeeklyTrend';

const sampleLyrics = `[Verse 1]
Lyrics of the song go here...

[Chorus]
More lyrics...

[Verse 2]
Even more lyrics...`;

const similarSongs: Song[] = [
  { id: '4', title: 'Similar Song 1', artist: 'Artist 1' },
  { id: '5', title: 'Similar Song 2', artist: 'Artist 2' },
  { id: '6', title: 'Similar Song 3', artist: 'Artist 3' },
];

const playlistSongs: Song[] = [
  { id: '1', title: 'Upbeat Melody', artist: 'Happy Tunes' },
  { id: '2', title: 'Energetic Rhythm', artist: 'Power Beats' },
  { id: '3', title: 'Calm Waters', artist: 'Serene Sounds' },
  { id: '4', title: 'Midnight Jazz', artist: 'Smooth Operators' },
  { id: '5', title: 'Rock Anthem', artist: 'The Guitars' },
  { id: '6', title: 'Electronic Dreams', artist: 'Synth Master' },
];

const complementarySongs: Song[] = [
  { id: '7', title: 'Complementary Song 1', artist: 'Artist A' },
  { id: '8', title: 'Complementary Song 2', artist: 'Artist B' },
  { id: '9', title: 'Complementary Song 3', artist: 'Artist C' },
];

const SongRecommendationApp: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [moodHistory, setMoodHistory] = useState<MoodHistory>([
    { time: '0:00', Happy: 0, Sad: 0, Energetic: 0, Calm: 0 },
  ]);

  const handlePlaySong = (song: Song) => {
    // setCurrentSong(song);
    setIsPlaying(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => (prevTime + 1) % 300);
        setMoodHistory((prev) => [
          ...prev,
          {
            time: `${Math.floor(currentTime / 60)}:${(currentTime % 60)
              .toString()
              .padStart(2, '0')}`,
            Happy: Math.random() * 5,
            Sad: Math.random() * 5,
            Energetic: Math.random() * 5,
            Calm: Math.random() * 5,
          },
        ]);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime]);

  const recommendedSongs: Song[] = [
    { id: '1', title: 'Upbeat Melody', artist: 'Happy Tunes' },
    { id: '2', title: 'Energetic Rhythm', artist: 'Power Beats' },
    { id: '3', title: 'Calm Waters', artist: 'Serene Sounds' },
  ];

  const onPlay = (item: any) => {
    audio.addMediaAndPlay(createMediaTrack(item, '320kbps'));
  };

  return (
    // <div className='min-h-screen bg-zinc-950 text-zinc-100 pb-36'>
    //   {/* Header with Search */}
    //   <header className='sticky top-0 z-20 p-4 shadow-lg bg-zinc-900'>
    //     <div className='flex items-center justify-between mx-auto max-w-7xl'>
    //       <div className='flex items-center space-x-2'>
    //         <Rewind fill='#D64664' strokeWidth={0} size={30} />
    //         <h1 className='text-2xl font-bold text-zinc-100'>ReAudio</h1>
    //       </div>
    //       <div className='flex items-center space-x-4'>
    //         <Input
    //           type='text'
    //           placeholder='Search for a song...'
    //           className='w-64 bg-zinc-800 text-zinc-100 border-zinc-700'
    //         />
    //         <Button size='icon' variant='outline'>
    //           <Search className='w-4 h-4' />
    //         </Button>
    //       </div>
    //     </div>
    //   </header>

    //   <main className='p-6 mx-auto max-w-7xl'>
    //     <div className='grid grid-cols-3 gap-6 mb-6'>
    //       <WeeklyTrends />
    //       {/* <Recommendations songs={recommendedSongs} /> */}
    //       <QuickActions />
    //     </div>

    //     <MoodGraphSection moodHistory={moodHistory} />
    //     <TabSections
    //       lyrics={sampleLyrics}
    //       similarSongs={recommendedSongs}
    //       complementarySongs={complementarySongs}
    //     />
    //     <div className='col-span-1 mt-4'>
    //       <Playlist songs={song.data} onPlaySong={handlePlaySong} />
    //     </div>
    //   </main>
    //   <AudioStateContainer
    //     renderItem={(audioState) => (
    //       <Player
    //         isPlaying={isPlaying}
    //         onPlayPause={() => {
    //           onPlay(song.data[0]);
    //         }}
    //         currentSong={song.data[0]}
    //         audioState={audioState}
    //       />
    //     )}
    //   />
    // </div>
    <div className='flex min-h-screen bg-zinc-950 text-zinc-100'>
      {/* Main Content */}
      <main className='flex-grow p-6 overflow-y-auto' style={{ marginRight: '320px' }}>
        {/* Header with Search */}
        <header className='mb-6'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-zinc-100'>Mood Music</h1>
            <div className='flex items-center space-x-4'>
              <Input
                type='text'
                placeholder='Search for a song...'
                className='w-64 bg-zinc-800 text-zinc-100 border-zinc-700'
              />
              <Button size='icon' variant='outline'>
                <Search className='w-4 h-4' />
              </Button>
            </div>
          </div>
        </header>

        <MoodGraphSection moodHistory={moodHistory} />

        <div className='grid grid-cols-3 gap-6 mb-6'>
          <WeeklyTrends />
          {/* <Recommendations songs={recommendedSongs} /> */}
          <QuickActions />
        </div>

        {/* <Playlist songs={playlistSongs} onPlaySong={handlePlaySong} /> */}
      </main>

      {/* Right Sidebar */}
      <div className='fixed top-0 bottom-0 right-0 overflow-y-auto w-80 bg-zinc-900'>
        <AudioStateContainer
          renderItem={(audioState: AudioState) => (
            <RightSidebar
              currentSong={song.data[0]}
              isPlaying={isPlaying}
              onPlayPause={() => {
                onPlay(song.data[0]);
              }}
              currentMood={moodHistory[moodHistory.length - 1]}
              lyrics={sampleLyrics}
              audioState={audioState}
            />
          )}
        />
      </div>
    </div>
  );
};

export default SongRecommendationApp;
