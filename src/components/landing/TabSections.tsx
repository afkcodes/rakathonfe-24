// components/SongDetails.tsx

import { Card, CardContent } from '@/components/ui/card';
import AudioStateContainer from '@/container/AudioStateContainer';
import { AudioState } from 'audio_x';
import React from 'react';
import lyric from '../../assets/lyrics.json';
import { Song } from './types';

interface SongDetailsProps {
  lyrics: string;
  similarSongs: Song[];
  complementarySongs: Song[];
}

export const TabSections: React.FC<SongDetailsProps> = ({
  lyrics,
  similarSongs,
  complementarySongs,
}) => {
  console.log(lyric);

  return (
    // <Tabs defaultValue='lyrics' className='mt-6'>
    //   <TabsList className='grid w-full grid-cols-3 bg-zinc-800'>
    //     <TabsTrigger value='lyrics' className='data-[state=active]:bg-zinc-700'>
    //       Lyrics
    //     </TabsTrigger>
    //     <TabsTrigger value='similar' className='data-[state=active]:bg-zinc-700'>
    //       Similar Songs
    //     </TabsTrigger>
    //     <TabsTrigger value='complement' className='data-[state=active]:bg-zinc-700'>
    //       Complementary Songs
    //     </TabsTrigger>
    //   </TabsList>
    //   <TabsContent value='lyrics' className='flex flex-col justify-center'>
    //     <Card className='pt-3 bg-zinc-900 border-zinc-800'>
    //       <CardContent className='flex items-center justify-center overflow-auto'>
    //         <p className='whitespace-pre-line text-zinc-100'>{lyrics}</p>
    //       </CardContent>
    //     </Card>
    //   </TabsContent>

    //   <Card className='flex flex-col justify-center bg-zinc-900 border-zinc-800'>
    //     <CardContent className='flex flex-col h-64 gap-4 overflow-auto justify-evenly'>
    //       {similarSongs.map((song) => (
    //         <SongItem key={song.id} song={song} />
    //       ))}
    //     </CardContent>
    //   </Card>

    //   <TabsContent value='complement'>
    //     <Card className='bg-zinc-900 border-zinc-800'>
    //       <CardContent className='h-64 overflow-auto'>
    //         {complementarySongs.map((song) => (
    //           <SongItem key={song.id} song={song} />
    //         ))}
    //       </CardContent>
    //     </Card>
    //   </TabsContent>
    // </Tabs>
    <div className='flex gap-3 '>
      <AudioStateContainer
        renderItem={(audioState: AudioState) => {
          const chunk = lyric.data.segments.find(
            (item) =>
              item.start <= Math.floor(Number(audioState.progress)) &&
              item.end >= Math.floor(Number(audioState.progress))
          );
          console.log(chunk);
          return (
            <Card className='flex flex-col justify-center flex-1 bg-zinc-900 border-zinc-800'>
              <CardContent className='flex flex-col gap-4 p-4 overflow-auto justify-evenly'>
                <h2 className='text-lg font-semibold text-white '>Lyrics:</h2>
                <div className='text-white'>{chunk?.text}</div>
              </CardContent>
            </Card>
          );
        }}
      />

      {/* -----non used----- */}
      <Card className='flex flex-col justify-center flex-1 bg-zinc-900 border-zinc-800'>
        <CardContent className='flex flex-col gap-4 p-4 overflow-auto justify-evenly'>
          <h2 className='text-white '>Lyrics:</h2>
          <div className=''>Lyrics...</div>
        </CardContent>
      </Card>
      <Card className='flex flex-col justify-center flex-1 bg-zinc-900 border-zinc-800'>
        <CardContent className='flex flex-col gap-4 p-4 overflow-auto justify-evenly'>
          <h2 className='text-white '>Lyrics:</h2>
          <div className='text-white'>Lyrics...</div>
        </CardContent>
      </Card>
      {/* <Card className='flex flex-col justify-center flex-1 bg-zinc-900 border-zinc-800'>
        <CardContent className='flex flex-col h-64 gap-4 overflow-auto justify-evenly'>
          {similarSongs.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </CardContent>
      </Card>
      <Card className='flex flex-col justify-center flex-1 bg-zinc-900 border-zinc-800'>
        <CardContent className='flex flex-col h-64 gap-4 overflow-auto justify-evenly'>
          {similarSongs.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </CardContent>
      </Card> */}
    </div>
  );
};
