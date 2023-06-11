import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import FormPage from './components/FormPage';
import DisplayData from './components/DisplayData';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/form" component={FormPage} />
          <Route path="/data" component={DisplayData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
