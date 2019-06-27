import React, { Component } from 'react';
import './App.scss';
import Index from './Home.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("sss");
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
          <div className="section sectin2">
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
          <div className="top">Scroll To Top</div>

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

