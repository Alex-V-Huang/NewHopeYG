import React, { Component } from "react";
import "./Banner.css";


class Banner extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {

        return (
            <div className='banner'>
                <h1 className='bannerText'>{this.props.title}</h1>
            </div>
        )
    }
}

export default Banner;