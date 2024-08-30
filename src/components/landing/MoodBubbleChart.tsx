import React, { useState, useEffect, useMemo } from 'react';
import { moodColorMap, MOOD_ANGRY, MOOD_ENERGETIC, MOOD_HAPPY, MOOD_RELAX, MOOD_SAD } from '../../constants/common.constants';
import { Key } from 'lucide-react';


interface MoodData {
  mood: string;
  value: number;
  color: string;
}

interface PropsInterface {
  data: {
    [MOOD_ANGRY]: number,
    [MOOD_ENERGETIC]: number,
    [MOOD_HAPPY]: number,
    [MOOD_RELAX]: number,
    [MOOD_SAD]: number
  }
}

const BubbleChart: React.FC<PropsInterface> = ({ data }) => {


  const [moodData, setMoodData] = useState<MoodData[]>([
    { mood: MOOD_HAPPY, value: 20, color: moodColorMap[MOOD_HAPPY] },
    { mood: MOOD_ENERGETIC, value: 20, color: moodColorMap[MOOD_ENERGETIC] },
    { mood: MOOD_RELAX, value: 20, color: moodColorMap[MOOD_RELAX] },
    { mood: MOOD_SAD, value: 20, color: moodColorMap[MOOD_SAD] },
    { mood: MOOD_ANGRY, value: 20, color: moodColorMap[MOOD_ANGRY] },
  ]);

  const svgWidth = 550;
  const svgHeight = 400;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const radius = Math.min(svgWidth, svgHeight) / 3;

  const positions = useMemo(() => {
    return moodData.map((_, index) => {
      const angle = (index / moodData.length) * 2 * Math.PI;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });
  }, [moodData.length]);

  useEffect(() => {
    if (data) {
      let moodData = Object.entries(data).map(([mood, value]) => ({
        mood: mood,
        value: value,
        color: moodColorMap[mood as keyof typeof moodColorMap], // Default to white if color not found
      }));
  
      setMoodData(moodData);
    }
  }, [data]);

  return (
    <div style={{ width: '100%', maxWidth: `${svgWidth}px`, margin: '0 auto' }}>
      <svg width={svgWidth} height={svgHeight}>
        {moodData.map((item, index) => (
          <g key={item.mood}>
            <circle
              cx={positions[index].x}
              cy={positions[index].y}
              r={item.value}
              fill={item.color}
              opacity={0.9}
              style={{ transition: 'r 1s, fill 1s' }}
            />
            {[1, 2, 3].map((_, i) => (
              <circle
                key={i}
                cx={positions[index].x}
                cy={positions[index].y}
                r={item.value}
                fill="none"
                stroke={item.color}
                strokeWidth="1"
                opacity="0"
              >
                <animate
                  attributeName="r"
                  values={`${item.value};${item.value * 1.5}`}
                  dur="2s"
                  begin={`${i * 1.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.7;0"
                  dur="2s"
                  begin={`${i * 1.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            <text
              x={positions[index].x}
              y={positions[index].y + item.value + 25}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              style={{ 
                filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.5))',
                transition: 'y 1s'
              }}
            >
              {item.mood}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BubbleChart;