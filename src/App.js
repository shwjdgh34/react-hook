import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.scss';
import Growth from './pages/Growth';
import Clock from './pages/Clock';
import MyGit from './pages/MyGit';
import NameTag from './pages/NameTag';
import Home from './pages/Home';
import Bank from './pages/Bank';
import { useSelector } from 'react-redux';
function App() {
  const balance = useSelector(state => state.balance);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>Balance: {balance}</div>
          <ul className="ul-style">
            <li className="li-style">
              <NavLink
                exact
                className="App-link"
                to="/"
                activeClassName="active-link"
              >
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                exact
                className="App-link"
                to="/bank"
                activeClassName="active-link"
              >
                Bank
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                exact
                className="App-link"
                to="/clock"
                activeClassName="active-link"
              >
                Clock
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                exact
                className="App-link"
                to="/nametag"
                activeClassName="active-link"
              >
                NameTag
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                exact
                className="App-link"
                to="/mygit"
                activeClassName="active-link"
              >
                MyGit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                exact
                className="App-link"
                to="/growth"
                activeClassName="active-link"
              >
                Growth
              </NavLink>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/clock" component={Clock} />
          <Route exact path="/nametag" component={NameTag} />
          <Route exact path="/mygit" component={MyGit} />
          <Route exact path="/growth" component={Growth} />
          <Route exact path="/bank" component={Bank} />
        </header>
      </div>
    </Router>
  );
}
export default App;
