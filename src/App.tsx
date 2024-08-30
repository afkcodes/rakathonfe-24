import { AudioX } from 'audio_x';
import SongRecommendationApp from './components/landing/Landing';

const App = () => {
  return (
    <div className='bg-background'>
      <SongRecommendationApp />
    </div>
  );
};

export default App;

const audio = new AudioX();
audio.init({
  mode: 'REACT',
  useDefaultEventListeners: true,
  crossOrigin: null,
});

export { audio };
