import React, { Component } from "react";
import "./Logo.css";

import Media from 'react-bootstrap/Media';

class Logo extends Component {

    render() {

        return (
            <div>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="holder.js/64x64"
                        alt='New Hope Youth logo'
                    />
                    <Media.Body>
                        <h1 className='logoText'>New Hope Youth</h1>
                    </Media.Body>
                </Media>
            </div>
        )
    }
}

export default Logo;