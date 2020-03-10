import React from 'react';
import './App.css';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App() {
  return (
    <div className="container" data-test="app-component">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
