// components/Playlist.tsx

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { SongItem } from './SongItem';
import { Song } from './types';

interface PlaylistProps {
  songs: Song[];
  onPlaySong: (song: Song) => void;
}

export const Playlist: React.FC<PlaylistProps> = ({ songs, onPlaySong }) => {
  return (
    <Card className='py-4 bg-zinc-900 border-zinc-800'>
      <CardContent>
        <h2 className='mb-4 text-xl font-semibold text-zinc-100'>Your Playlist</h2>
        <div className='space-y-2 max-h-[400px] overflow-y-auto'>
          {songs.map((song) => (
            <SongItem key={song.id} song={song} onPlay={() => onPlaySong(song)} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
