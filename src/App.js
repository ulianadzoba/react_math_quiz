import React from 'react';
import Dashboard from '../src/hoc/Dashboard/Dashboard';
import Quiz from './components/Quiz/Quiz';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Dashboard>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/quiz" exact component={Quiz} />
        </Switch>
      </Dashboard>
    </div>
  );
}

export default App;
