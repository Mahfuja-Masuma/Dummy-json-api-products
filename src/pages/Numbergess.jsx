import  { useState, useEffect } from 'react';

const NumberGuessGame = () => {
  const [numberToGuess, setNumberToGuess] = useState(localStorage.getItem('numberToGuess') || '');
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [guessingStarted, setGuessingStarted] = useState(false);
  const [chanceAttempts, setChanceAttempts] = useState(5);
  const [correctNumber, setCorrectNumber] = useState('');

  const handleNumberChange = (event) => {
    setNumberToGuess(event.target.value);
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guessingStarted) {
      if (guess === '') {
        setMessage('Please enter your guess!');
        return;
      }

      const userGuess = parseInt(guess);

      if (isNaN(userGuess)) {
        setMessage('Please enter a valid number for your guess!');
        return;
      }

      setAttempts(attempts + 1);
      setChanceAttempts(chanceAttempts - 1);

      if (userGuess === parseInt(numberToGuess)) {
        setMessage(`Congratulations! You guessed the number ${numberToGuess} in ${attempts + 1} attempts!`);
        setNumberToGuess('');
        setGuess('');
        setAttempts(0);
        setGuessingStarted(false);
        setChanceAttempts(5);
      } else if (userGuess < parseInt(numberToGuess)) {
        setMessage('Try a higher number.');
      } else {
        setMessage('Try a lower number.');
      }

      if (chanceAttempts <= 1) {
        setMessage(`Game Over. The correct number was ${correctNumber}.`);
        setNumberToGuess('');
        setGuess('');
        setAttempts(0);
        setGuessingStarted(false);
        setChanceAttempts(5);
      }

      setGuess('');
    } else {
      if (numberToGuess === '') {
        setMessage('Please set a number to guess!');
        return;
      }

      setGuessingStarted(true);
      setCorrectNumber(numberToGuess);
    }
  };

  // Save numberToGuess to local storage when it changes
  useEffect(() => {
    localStorage.setItem('numberToGuess', numberToGuess);
  }, [numberToGuess]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Number Guessing Game</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {guessingStarted ? (
          <input
            type="number"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Your guess"
            className="mb-2 p-2 border border-orange-500 rounded-lg outline-none"
          />
        ) : (
          <input
            type="number"
            value={numberToGuess}
            onChange={handleNumberChange}
            placeholder="Set a number to guess"
            className="mb-2 p-2 border border-orange-500 rounded-lg outline-none"
          />
        )}
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {guessingStarted ? 'Guess' : 'Set Number'}
        </button>
      </form>
      <p className="mt-4 text-lg text-red-600">{message}</p>
      {guessingStarted && <p>Attempts: {attempts}</p>}
    </div>
  );
};

export default NumberGuessGame;
