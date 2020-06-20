import React, { Component } from "react";
import "./Footer.css";

import instagram from "../../images/instagram_logo.png";
import youtube from "../../images/youtube_logo.png";

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
      <div className="footer-wrapper">
        <div id="NewHopeYouthFooterText"> &#169; 2020 New Hope Youth</div>
        <div id="SocialsImagesWrapper">
          {/* <a> */}
          <img
            id="InstagramLogo"
            src={instagram}
            alt="Link to Instagram"
            width="50"
            height="50"
          ></img>
          {/* </a> */}
          {/* <a> */}
          <img src={youtube} alt="Link to YouTube" width="50" height="50"></img>
          {/* </a> */}
        </div>
      </div>
    );
  }
}

export default Footer;
