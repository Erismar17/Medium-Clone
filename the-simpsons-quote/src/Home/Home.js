import './style.css';
import audioSimpson from '../sound/LosSimpson.mp3';

function Home() {
  
  const audio = new Audio(audioSimpson);
  audio.loop = true;

  return (
    <div className={'buttons'}>
        <div className='buttons-align'>
            <button className={'music'} onClick={() => {
                audio.loop = true;
                audio.play();
            }}>Play</button>
            <button className={'music'} onClick={() => {
                audio.loop = false;
                audio.pause();
            }}>Pause</button>

            <button className={'start-quotes'}>Quotes</button>
        </div>
    </div>
  );
}

export default Home;