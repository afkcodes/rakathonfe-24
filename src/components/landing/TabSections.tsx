// components/SongDetails.tsx

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { SongItem } from './SongItem';
import { Song } from './types';

interface SongDetailsProps {
  lyrics: string;
  similarSongs: Song[];
  complementarySongs: Song[];
}

export const SongDetails: React.FC<SongDetailsProps> = ({
  lyrics,
  similarSongs,
  complementarySongs,
}) => {
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
      <Card className='flex flex-col justify-center flex-1 bg-zinc-900 border-zinc-800'>
        <CardContent className='flex flex-col h-64 gap-4 py-3 overflow-auto justify-evenly'>
          <h2 className='text-white'>Recommendations:</h2>
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
      </Card>
      <Card className='flex flex-col justify-center flex-1 bg-zinc-900 border-zinc-800'>
        <CardContent className='flex flex-col h-64 gap-4 overflow-auto justify-evenly'>
          {similarSongs.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
