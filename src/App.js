import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts] = useState(5);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const userGuess = parseInt(guess);
    setGuess('');
    setAttempts(attempts + 1);

    if (userGuess === number) {
      setMessage(`Congratulations! You guessed the number ${number} correctly in ${attempts + 1} attempts.`);
    } else if (userGuess < number) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }

    if (attempts >= maxAttempts) {
      setMessage(`Out of attempts! The number was ${number}.`);
    }
  };

  return (
    <div className="App">
      <h1>Guess the Number</h1>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          min="1"
          max="100"
          required
        />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
