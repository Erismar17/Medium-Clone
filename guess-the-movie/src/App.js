import { useState } from 'react';
import './App.css';

const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
  { name: "The Matrix", emoji: "🕶️💊👽" },
  { name: "Titanic", emoji: "🚢❄️💔" },
  { name: "Jurassic Park", emoji: "🦖🌴🚙" },
  { name: "The Lion King", emoji: "🦁👑🌅" },
  { name: "Star Wars", emoji: "⚔️🚀🌌" },
  { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
  { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
  { name: "The Terminator", emoji: "🤖🔫🕶️" },
  { name: "Indiana Jones", emoji: "🤠🔍💎" },
  { name: "Back to the Future", emoji: "⏰🚗💥" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  { name: "The Godfather", emoji: "🍕🤵🔫" },
  { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
  { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
  { name: "Schindler's List", emoji: "📜🚂🔴" },
  { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
  { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
  { name: "Fight Club", emoji: "👊💼🚽" },
  { name: "Inception", emoji: "🌀👩‍🚀🎩" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  ];

const Movie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length)
    const [movie, setMovie] = useState(movies[randomIndex]);
    const [title, setTitle] = useState('');
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [maxScore, setMaxScore] = useState(0);
    const lastMovie = [...movies].pop(); // Obtener el último elemento de las peliculas}
    const [inputGuess, setInputGuess] = useState('');
    const [result, setResult] = useState('');
    

    const send = () => {
      console.log(title);
      const actualMovie = movie;
      const actualScore = score ;
      if (title.toLowerCase() === movie.name.toLowerCase()) {
        setScore(actualScore + 1);
        setInputGuess('');
        console.log("Score "+score+". Max Score: "+maxScore);
        if (score >= maxScore) {
          setMaxScore(score + 1);
        }
        setResult('Great!')
      } else {        
        setLives(lives-1);
        setInputGuess();
        setResult('Wrong!')
        if (lives <= 1) {
          setLives(3);
          setScore(0);
          setResult('You loose the game!')
          const indexRandom = Math.floor(Math.random() * movies.length);
          setMovie(movies[indexRandom]);
          return;
        }
      } 

      if(actualMovie === lastMovie){
        setMovie(movies[0]);
      } else {
        const indexRandom = Math.floor(Math.random() * movies.length);
        const newMovie = movies[indexRandom];
        setMovie(newMovie);
      }
    };
    const onChange = (element) => {
      setTitle(element.target.value);
      setInputGuess(element.target.value);
    };
  return (
    <div className={'all'}>
        <div className={'records'}>
          <p>Lives: {lives} </p>
          <p>Score: {score}</p>
          <p>Max Score: {maxScore}</p>
        </div>
      <div>
        <h1>Guess The Movie</h1>
        <div className={'container-emojis'}>
          <p className={'emojis'}>{movie.emoji}</p>
        </div>

      </div>
      <div className={'submit-area'}>
        <input onChange={onChange} value={inputGuess} placeholder='¿What`s the movie?'/>
        <button onClick={send}>Send</button>
      </div>
      <div className={'result'}>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default Movie;