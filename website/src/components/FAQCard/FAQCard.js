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
      <div className="background-div">
        <div className="question">Question: {this.props.question}</div>
        <div className="answer">Answer: {this.props.answer}</div>
      </div>
    );
  }
}

export default FAQCard;
