import React, { Component } from 'react';
import './KeyboardEnter.scss';

class keyboardEnter extends Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
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
      );
   }
}
export default keyboardEnter;

