import React, { Component } from "react";
import "./Footer.css";

import instagram from "../../images/instagram_logo.png";
import youtube from "../../images/youtube_logo.png";

class Footer extends Component {

  render() {
    return (
      <div className="footer-wrapper">
        <div id="NewHopeYouthFooterText"> &#169; 2020 New Hope Youth</div>
        {/* <div id="SocialsImagesWrapper">
          <a href='https://www.instagram.com/new.hope.yg/' target='_blank'>
            <img
              id="InstagramLogo"
              src={instagram}
              alt="Link to Instagram"
              width="50"
              height="50"
            ></img>
          </a>
          <a href='https://www.youtube.com/user/NewHopeIC' target='_blank'>
            <img src={youtube} alt="Link to YouTube" width="50" height="50"></img>
          </a>
        </div> */}
      </div>
    );
  }
}

export default Footer;
