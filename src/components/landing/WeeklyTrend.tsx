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

import { MOOD_ANGRY, MOOD_ENERGETIC, MOOD_HAPPY, MOOD_RELAX, MOOD_SAD, moodColorMap } from '../../constants/common.constants';
const weeklyData = [
  { name: 'Mon', [MOOD_HAPPY]: 4, [MOOD_SAD]: 2, [MOOD_ENERGETIC]: 3, [MOOD_RELAX]: 1, [MOOD_ANGRY]: 2 },
  { name: 'Tue', [MOOD_HAPPY]: 3, [MOOD_SAD]: 1, [MOOD_ENERGETIC]: 4, [MOOD_RELAX]: 2, [MOOD_ANGRY]: 1 },
  { name: 'Wed', [MOOD_HAPPY]: 2, [MOOD_SAD]: 3, [MOOD_ENERGETIC]: 2, [MOOD_RELAX]: 3, [MOOD_ANGRY]: 4 },
  { name: 'Thu', [MOOD_HAPPY]: 5, [MOOD_SAD]: 1, [MOOD_ENERGETIC]: 4, [MOOD_RELAX]: 0, [MOOD_ANGRY]: 3 },
  { name: 'Fri', [MOOD_HAPPY]: 4, [MOOD_SAD]: 2, [MOOD_ENERGETIC]: 5, [MOOD_RELAX]: 1, [MOOD_ANGRY]: 1 },
];


const fillOpacity = 0.8

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
            dataKey={MOOD_HAPPY}
            stackId='1'
            stroke={moodColorMap[MOOD_HAPPY]}
            fill={moodColorMap[MOOD_HAPPY]}
            fillOpacity={fillOpacity}
          />
          <Area
            type='monotone'
            dataKey={MOOD_SAD}
            stackId='1'
            stroke={moodColorMap[MOOD_SAD]}
            fill={moodColorMap[MOOD_SAD]}
            fillOpacity={fillOpacity}
          />
          <Area
            type='monotone'
            dataKey={MOOD_ENERGETIC}
            stackId='1'
            stroke={moodColorMap[MOOD_ENERGETIC]}
            fill={moodColorMap[MOOD_ENERGETIC]}
            fillOpacity={fillOpacity}
          />
          <Area
            type='monotone'
            dataKey={MOOD_RELAX}
            stackId='1'
            stroke={moodColorMap[MOOD_RELAX]}
            fill={moodColorMap[MOOD_RELAX]}
            fillOpacity={fillOpacity}
          />
           <Area
            type='monotone'
            dataKey={MOOD_ANGRY}
            stackId='1'
            stroke={moodColorMap[MOOD_ANGRY]}
            fill={moodColorMap[MOOD_ANGRY]}
            fillOpacity={fillOpacity}
          />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
