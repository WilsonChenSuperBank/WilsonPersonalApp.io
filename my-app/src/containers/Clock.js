import React, { Component } from 'react';
import "./Clock.scss";

class Clock extends Component {
   constructor(props) {
      super(props);
      this.state = {
         date: '222'
      };
     
   }
   componentDidMount() {
      
      this.setState({
         date:"222222"
       });
   }

   render() {
      const style = {
         transform: "rotate(270deg)"
      };
      return (
         <div className="clockAll">
            <h2>hiii {this.state.date}</h2>
            <div class="clockDom clockHours" style={style}></div>
            <div class="clockDom clockSeconds"></div>
            <div class="clockDom clockMinutes"></div>
         </div>
      );
   }
}
export default Clock;

