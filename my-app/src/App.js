import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    create_random_string(document.getElementById("theHostName"));
    
    function hashbarran(fornum) {
      var random_chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
   
      //console.log(random_chars.slice(random_nums,random_nums+1));
      var random_string = '';
      for (var i = 0; i < fornum; i++) {
         var random_nums = Math.floor((Math.random() * random_chars.length) + 1);
         random_string += random_chars.slice(random_nums, random_nums + 1);
      }
   
      return random_string;
   }
   
   function create_random_string(random_dom) {
   
      var hashbar_a = random_dom;
   
      for (var i = 0; i < hashbar_a.length; i++) {
         (function (i) {
            setTimeout(function () {
               var endValue = hashbar_a.eq(i).attr("endvalue");
               // console.log(endValue);//最後的值;
               var changeValue = '';
   
               for (var j = 0; j <= endValue.length + 1; j++) {
   
                  (function (j) {
                     setTimeout(function () {
   
                        changeValue = endValue.substring(0, j) + hashbarran(endValue.length - j);
   
                        if (j === endValue.length + 1) {
                           hashbar_a.eq(i).text(endValue);
                        }
                        else {
                           hashbar_a.eq(i).text(changeValue);
                        }
   
                     }, (j) * 100);
   
                  })(j);
   
               }
   
            }, (i) * 450);
   
         })(i);
      }
   }
   
  }
  render() {
    return (
      <div className="App">
        <header>
          <ul>
            <li className="active">主頁</li>
            <li>關於</li>
            <li>卡片</li>
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


        </div>

        <div className="top">Scroll To Top</div>
      </div>
    );
  }
}
export default App;

