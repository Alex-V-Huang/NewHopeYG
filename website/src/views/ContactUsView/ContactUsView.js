import React, { Component } from "react";
import "./ContactUsView.css";

import Banner from '../../components/Banner/Banner.js';

class ContactUsView extends Component {

    render() {

        return (
            <div>
                <Banner title='Contact Us'/>
                <div className='wrapper'>
                    <p>Contact us information here...</p>
                </div>
            </div>
        )
    }
}

export default ContactUsView;