import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
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
      <div style={{ backgroundColor: "#f6e173", padding: "40px" }}>
        <div style={{ float: "left" }}>&#169;2020 New Hope Youth</div>
        <div style={{ float: "right" }}>Instagram | Youtube</div>
      </div>
    );
  }
}

export default Footer;
