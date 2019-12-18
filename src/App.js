import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';
import Growth from './pages/Growth';
import Clock from './pages/Clock';
import MyGit from './pages/MyGit';
import NameTag from './pages/NameTag';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li>
              <Link to="/nametag">NameTag</Link>
            </li>
            <li>
              <Link to="/mygit">MyGit</Link>
            </li>
            <li>
              <Link to="/growth">Growth</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/clock" component={Clock} />
          <Route exact path="/nametag" component={NameTag} />
          <Route exact path="/mygit" component={MyGit} />
          <Route exact path="/growth" component={Growth} />
        </header>
      </div>
    </Router>
  );
}
export default App;
