import React, { useEffect, useRef, useState } from 'react';

interface Segment {
  id: number;
  text: string;
  start: number;
  end: number;
}

interface LyricsDisplayProps {
  segments: Segment[];
  currentTime: number;
}

const LyricsDisplay: React.FC<LyricsDisplayProps> = ({ segments, currentTime }) => {
  const [activeLineIndex, setActiveLineIndex] = useState<number>(0);
  const lyricsRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const updateActiveLine = () => {
      const activeIndex = segments.findIndex(
        (segment, index) =>
          currentTime >= segment.start &&
          (index === segments.length - 1 || currentTime < segments[index + 1].start)
      );
      if (activeIndex !== -1 && activeIndex !== activeLineIndex) {
        setActiveLineIndex(activeIndex);
      }
    };

    updateActiveLine();
  }, [currentTime, segments, activeLineIndex]);

  useEffect(() => {
    if (lineRefs.current[activeLineIndex]) {
      lineRefs.current[activeLineIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeLineIndex]);

  return (
    <div className='p-4'>
      <h3 className='mb-2 text-lg font-semibold text-zinc-100'>Lyrics</h3>
      <div
        ref={lyricsRef}
        className='flex flex-col items-center h-56 overflow-y-auto no-scrollbar'>
        <div className='text-xl font-medium whitespace-pre-line text-zinc-400'>
          {segments.map((segment, index) => (
            <p
              key={segment.id}
              ref={(el) => (lineRefs.current[index] = el)}
              className={`leading-9 text-center tracking-wider ${
                index === activeLineIndex
                  ? 'text-zinc-100 drop-shadow-md font-bold text-2xl'
                  : 'text-lg'
              }`}>
              {segment.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LyricsDisplay;
