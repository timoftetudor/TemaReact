import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/contact/phone" render={() => {
          return (<div>Phone page component from render!</div>)
        }} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/about" render={() => {
          return (<div>About page component from render!</div>)
        }} />

      </Switch>
    </Router>
  );
}

export default App;
