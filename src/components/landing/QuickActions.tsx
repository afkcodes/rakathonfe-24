// components/QuickActions.tsx

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Radio, Sparkles } from 'lucide-react';
import React from 'react';

export const QuickActions: React.FC = () => (
  <Card className='bg-zinc-900 border-zinc-800'>
    <CardContent className='pt-6'>
      <h2 className='mb-4 text-xl font-semibold text-zinc-100'>Quick Actions</h2>
      <div className='space-y-2'>
        <Button variant='outline' className='justify-start w-full'>
          <Music className='w-4 h-4 mr-2' /> Discover New Music
        </Button>
        <Button variant='outline' className='justify-start w-full'>
          <Radio className='w-4 h-4 mr-2' /> Start Radio
        </Button>
        <Button variant='outline' className='justify-start w-full'>
          <Sparkles className='w-4 h-4 mr-2' /> Personalized Playlist
        </Button>
      </div>
    </CardContent>
  </Card>
);
