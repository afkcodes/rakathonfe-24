// components/WeeklyTrends.tsx

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const weeklyData = [
  { name: 'Mon', Happy: 4, Sad: 2, Energetic: 3, Calm: 1 },
  { name: 'Tue', Happy: 3, Sad: 1, Energetic: 4, Calm: 2 },
  { name: 'Wed', Happy: 2, Sad: 3, Energetic: 2, Calm: 3 },
  { name: 'Thu', Happy: 5, Sad: 1, Energetic: 4, Calm: 0 },
  { name: 'Fri', Happy: 4, Sad: 2, Energetic: 5, Calm: 1 },
];

export const WeeklyTrends: React.FC = () => (
  <Card className='bg-zinc-900 border-zinc-800'>
    <CardContent className='pt-6'>
      <h2 className='mb-4 text-xl font-semibold text-zinc-100'>Weekly Mood Trends</h2>
      <ResponsiveContainer width='100%' height={200}>
        <AreaChart data={weeklyData}>
          <CartesianGrid strokeDasharray='3 3' stroke='#444' />
          <XAxis dataKey='name' stroke='#888' />
          <YAxis stroke='#888' />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
          <Legend />
          <Area
            type='monotone'
            dataKey='Happy'
            stackId='1'
            stroke='#EAB308'
            fill='#EAB308'
            fillOpacity={0.6}
          />
          <Area
            type='monotone'
            dataKey='Sad'
            stackId='1'
            stroke='#60A5FA'
            fill='#60A5FA'
            fillOpacity={0.6}
          />
          <Area
            type='monotone'
            dataKey='Energetic'
            stackId='1'
            stroke='#F87171'
            fill='#F87171'
            fillOpacity={0.6}
          />
          <Area
            type='monotone'
            dataKey='Calm'
            stackId='1'
            stroke='#34D399'
            fill='#34D399'
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
