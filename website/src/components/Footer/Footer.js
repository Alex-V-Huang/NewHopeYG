import React, { Component } from "react";
import "./Footer.css";

import instagram from "../../images/instagram_logo.png";
import youtube from '../../images/youtube_logo.png';

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
      <div style={{ backgroundColor: "#f6e173", padding: "30px", }}>
        <div style={{verticalAlign:'middle', display: 'inline-block', margin: '0rem 3rem'}}> &#169; 2020 New Hope Youth</div>
        <div style={{ verticalAlign:'middle', display: 'inline-block', marginLeft: '60rem', marginRight: '0'}}>
          {/* <a> */}
            <img src={instagram} alt='Link to Instagram' width='50' height='50' style={{marginRight: '1.5rem'}}></img>
          {/* </a> */}
          {/* <a> */}
            <img src={youtube} alt='Link to YouTube' width='50' height='50'></img>
          {/* </a> */}
        </div>

      </div>
    );
  }
}

export default Footer;
