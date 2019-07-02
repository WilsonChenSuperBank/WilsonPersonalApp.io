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

    var scrollTopsId = document.getElementById("scrollToTop");

    document.getElementById("scrollToTop").click(function () {
      window.scrollTo(0, 0);
    })

    // document.getElementById("scrollToTop").onclick = function(){
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    scrollTopsId.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, false);

    function keyFunction(addOrRemove) {
      var ssName = document.getElementsByClassName("englishText");
      //englishText Name 集合
      var keyCoo = window.event.keyCode;
      //敲鍵盤的數值
      for (var i = 0; i < ssName.length; i++) {
        if (ssName[i].getAttribute("englishtext") == keyCoo) {
          (addOrRemove) ? ssName[i].classList.add("bloeen") : ssName[i].classList.remove("bloeen");
        }
      }
    }
    function keyupFunction() {
      var ssName = document.getElementsByClassName("englishText");
      //englishText Name 集合
      var keyCoo = window.event.keyCode;
      //敲鍵盤的數值
      for (var i = 0; i < ssName.length; i++) {
        if (ssName[i].getAttribute("englishtext") == keyCoo) {
          ssName[i].classList.remove("bloeen");
        }
      }
      //element.classList.remove("mystyle");
    }
    document.onkeydown = keyFunction;
    document.onkeyup = keyupFunction;
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
            <h2 align="center">鍵盤事件：基本測試</h2>
          </div>
          <div className="section section2">
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <div className="squaredAll">
              <div className="squared">
                <p className="englishText" englishtext="71">G</p>
              </div>
              <div className="squared">
                <p className="englishText" englishtext="66">B</p>
              </div>
              <div className="squared">
                <p className="englishText" englishtext="65">A</p>
              </div>
            </div>
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

