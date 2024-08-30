// // components/MoodGraphSection.tsx

// import { Card, CardContent } from '@/components/ui/card';
// import React from 'react';
// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from 'recharts';
// import { MoodEmojiCloud } from './EmojiCloud';
// import { MoodHistory } from './types';

// interface MoodGraphSectionProps {
//   moodHistory: MoodHistory;
// }

// export const MoodGraphSection: React.FC<MoodGraphSectionProps> = ({ moodHistory }) => {
//   const currentMood = moodHistory[moodHistory.length - 1];

//   return (
//     <div className='grid grid-cols-2 gap-6 mb-6'>
//       <Card className='bg-zinc-900 border-zinc-800'>
//         <CardContent className='pt-6'>
//           <h2 className='mb-4 text-2xl font-bold text-zinc-100'>Current Mood</h2>
//           <MoodEmojiCloud moods={currentMood} />
//         </CardContent>
//       </Card>

//       <Card className='bg-zinc-900 border-zinc-800'>
//         <CardContent className='pt-6'>
//           <h2 className='mb-4 text-2xl font-bold text-zinc-100'>Mood Graph</h2>
//           <ResponsiveContainer width='100%' height={300}>
//             <AreaChart data={moodHistory}>
//               <CartesianGrid strokeDasharray='3 3' stroke='#444' />
//               <XAxis dataKey='time' stroke='#888' />
//               <YAxis domain={[0, 5]} stroke='#888' />
//               <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
//               <Legend />
//               <Area
//                 type='monotone'
//                 dataKey='Happy'
//                 stackId='1'
//                 stroke='#EAB308'
//                 fill='#EAB308'
//                 fillOpacity={0.6}
//               />
//               <Area
//                 type='monotone'
//                 dataKey='Sad'
//                 stackId='1'
//                 stroke='#60A5FA'
//                 fill='#60A5FA'
//                 fillOpacity={0.6}
//               />
//               <Area
//                 type='monotone'
//                 dataKey='Energetic'
//                 stackId='1'
//                 stroke='#F87171'
//                 fill='#F87171'
//                 fillOpacity={0.6}
//               />
//               <Area
//                 type='monotone'
//                 dataKey='Calm'
//                 stackId='1'
//                 stroke='#34D399'
//                 fill='#34D399'
//                 fillOpacity={0.6}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// components/MoodGraphSection.tsx

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

import { MoodHistory } from './types';
import BubbleChart from './MoodBubbleChart'
import { MOOD_ANGRY, MOOD_ENERGETIC, MOOD_HAPPY, MOOD_RELAX, MOOD_SAD, moodColorMap } from '../../common.constants';


interface MoodGraphSectionProps {
  moodHistory: MoodHistory;
}

const MoodData = {
  [MOOD_ANGRY]: 30,
    [MOOD_ENERGETIC]: 40,
    [MOOD_HAPPY]: 10,
    [MOOD_RELAX]: 10,
    [MOOD_SAD]: 10
}

export const MoodGraphSection: React.FC<MoodGraphSectionProps> = ({ moodHistory }) => {
  const currentMood = moodHistory[moodHistory.length - 1];

  // Generate some sample data for the last 20 minutes
  const sampleData = Array.from({ length: 20 }, (_, i) => ({
    time: `${i}m`,
    [MOOD_HAPPY]: Math.random() * 5,
    [MOOD_SAD]: Math.random() * 5,
    [MOOD_ENERGETIC]: Math.random() * 5,
    [MOOD_RELAX]: Math.random() * 5,
    [MOOD_ANGRY]: Math.random() * 5,
  }));

  return (
    <div className='grid grid-cols-2 gap-6 mb-6'>
      <Card className='bg-zinc-900 border-zinc-800'>
        <CardContent className='pt-6'>
          <h2 className='mb-4 text-2xl font-bold text-zinc-100'>Current Mood</h2>
          <BubbleChart data={MoodData} />
          {/* <MoodEmojiCloud moods={currentMood} /> */}
        </CardContent>
      </Card>

      <Card className='bg-zinc-900 border-zinc-800'>
        <CardContent className='pt-6'>
          <h2 className='mb-4 text-2xl font-bold text-zinc-100'>Mood Graph</h2>
          <ResponsiveContainer width='100%' height={450}>
            <AreaChart data={sampleData}>
              {/* <CartesianGrid strokeDasharray='3 3' stroke='#444' /> */}
              <XAxis padding='gap' height={20} dataKey='time' stroke='#fff' />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#333',
                  border: 'none',
                  borderRadius: '4px',
                }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend />
              <Area
                type='monotone'
                dataKey={MOOD_HAPPY}
                stackId='1'
                stroke={moodColorMap[MOOD_HAPPY]}
                fill={moodColorMap[MOOD_HAPPY]}
                fillOpacity={0.75}
              />
              <Area
                type='monotone'
                dataKey={MOOD_SAD}
                stackId='1'
                stroke={moodColorMap[MOOD_SAD]}
                fill={moodColorMap[MOOD_SAD]}
                fillOpacity={0.75}
              />
              <Area
                type='monotone'
                dataKey={MOOD_ENERGETIC}
                stackId='1'
                stroke={moodColorMap[MOOD_ENERGETIC]}
                fill={moodColorMap[MOOD_ENERGETIC]}
                fillOpacity={0.75}
              />
              <Area
                type='monotone'
                dataKey={MOOD_RELAX}
                stackId='1'
                stroke={moodColorMap[MOOD_RELAX]}
                fill={moodColorMap[MOOD_RELAX]}
                fillOpacity={0.75}
              />
              <Area
                type='monotone'
                dataKey={MOOD_ANGRY}
                stackId='1'
                stroke={moodColorMap[MOOD_ANGRY]}
                fill={moodColorMap[MOOD_ANGRY]}
                fillOpacity={0.75}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
