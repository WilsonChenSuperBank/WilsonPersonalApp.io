import React, { Component } from 'react';
import './App.scss';
import Index from './Home.js';
import KeyboardEnter from './containers/keyboardEnter.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var scrollTopsId = document.getElementById("scrollToTop");
    document.getElementById("scrollToTop").click(function () {
      window.scrollTo(0, 0);
    })
    scrollTopsId.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, false);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
              <li>影片牆</li>
            </ul>
          </header>
          <div className="section section1">
            <div className="myNameTitleAll">
              <h1 className="myNameTitle" id="theHostName" endvalue="Wilson Chen">Wilson Chen</h1>
              <div className="communityIcon">
                <i className="fab fa-facebook" openurl="www.fb.com/aaa"></i>
                <i className="fab fa-instagram" openurl="www.fb.com/aaa"></i>
                <i className="fab fa-youtube" openurl="www.fb.com/aaa"></i>
              </div>
            </div>
          </div>
          <div className="section section2">
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
          <div className="section section3">
            <KeyboardEnter />
          </div>
          <div className="top" id="scrollToTop">Scroll To Top</div>
        </div>
      </Router>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

