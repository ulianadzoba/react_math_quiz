import React from 'react';
import Dashboard from '../src/hoc/Dashboard/Dashboard';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Dashboard>
        <Quiz />
      </Dashboard>
    </div>
  );
}

export default App;
