import React, { Component } from "react";
import "./FAQView.css";

import FAQCard from "../../components/FAQCard/FAQCard.js";
import Banner from '../../components/Banner/Banner.js';


class FAQView extends Component {

    render() {

        return (
            <div>
                <Banner></Banner>
                <div className='wrapper'>
                    <FAQCard />
                    <FAQCard />
                </div>

            </div>
        )
    }
}

export default FAQView;