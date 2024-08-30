import { audio } from '@/App';
import { AUDIO_STATE, AudioState } from 'audio_x';
import { ReactNode, useEffect, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

interface AudioStateContainerProps {
  renderItem: (audioState: AudioState) => ReactNode;
}

const AudioStateContainer: React.FC<AudioStateContainerProps> = ({ renderItem }) => {
  const [audioState, setAudioState] = useState(AUDIO_STATE);

  useEffect(() => {
    audio.subscribe('AUDIO_X_STATE', (audioState: AudioState) => {
      setAudioState(audioState);
    });
  }, []);

  return <Fragment>{renderItem(audioState)}</Fragment>;
};

export default AudioStateContainer;
