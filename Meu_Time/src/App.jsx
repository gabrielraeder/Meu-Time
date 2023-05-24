// import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';


function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/main" component={ Main } />
      </Switch>
    </main>
  );
}

export default App;
