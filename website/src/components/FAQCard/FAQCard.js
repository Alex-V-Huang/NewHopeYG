import React, { Component } from "react";
import "./FAQCard.css";

class FAQCard extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div style={{ backgroundColor: "gray", padding: "15px", margin: '2rem 0rem' }}>
        <div
          style={{
            backgroundColor: "white",
            paddingLeft: "15px",
            paddingTop: "15px",
            paddingRight: "50px",
            paddingBottom: "10px",
            margin: "10px",
          }}
        >
          Question
        </div>
        <div
          style={{
            backgroundColor: "white",
            paddingLeft: "15px",
            paddingTop: "15px",
            paddingRight: "50px",
            paddingBottom: "50px",
            margin: "10px",
          }}
        >
          Answer
        </div>
      </div>
    );
  }
}

export default FAQCard;
