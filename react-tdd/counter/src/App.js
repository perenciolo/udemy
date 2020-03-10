import React, { useState } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App" data-test="component-app">
      <h1>
        The counter is: <span data-test="counter-display">{counter}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => setCounter(counter + 1)}
      >
        Increment counter
      </button>
    </div>
  );
}

export default App;
