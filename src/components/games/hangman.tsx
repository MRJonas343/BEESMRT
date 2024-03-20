import React, { useState } from 'react';

const Hangman: React.FC = () => {
    const [word, setWord] = useState('');
    const [guesses, setGuesses] = useState<string[]>([]);
    const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
    const [gameOver, setGameOver] = useState(false);

    const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    const handleGuess = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const guess = event.currentTarget.value.toLowerCase();
            if (guess.length === 1) {
                setGuesses([...guesses, guess]);
                if (!word.includes(guess)) {
                    setIncorrectGuesses([...incorrectGuesses, guess]);
                }
            }
            event.currentTarget.value = '';
        }
    };

    const getMaskedWord = () => {
        return word
            .split('')
            .map((letter) => (guesses.includes(letter) ? letter : '_'))
            .join(' ');
    };

    const isGameWon = () => {
        return word.split('').every((letter) => guesses.includes(letter));
    };

    const handleRestart = () => {
        setWord('');
        setGuesses([]);
        setIncorrectGuesses([]);
        setGameOver(false);
    };

    if (gameOver) {
        return (
            <div>
                <h1>{isGameWon() ? 'You Win!' : 'You Lose!'}</h1>
                <button onClick={handleRestart}>Restart</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Hangman Game</h1>
            <input type="text" placeholder="Enter a word" value={word} onChange={handleWordChange} />
            <input type="text" placeholder="Enter a letter" onKeyDown={handleGuess} />
            <p>{getMaskedWord()}</p>
            <p>Incorrect Guesses: {incorrectGuesses.join(', ')}</p>
        </div>
    );
};

export default Hangman;