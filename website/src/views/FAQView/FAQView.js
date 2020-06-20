import React, { Component } from "react";
import "./FAQView.css";

import FAQCard from "../../components/FAQCard/FAQCard.js";
import Banner from '../../components/Banner/Banner.js';


class FAQView extends Component {

    render() {

        return (
            <div>
                <Banner title='FAQ' />
                <div className='wrapper'>
                    <FAQCard question='why is joboy so cool?' answer='TBD'/>
                    <FAQCard question='what is the point of this?' answer='a resource for NHY'/>
                </div>

            </div>
        )
    }
}

export default FAQView;