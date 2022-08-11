
import React, { Component } from 'react';
import images from './images/images.js';



class Home extends Component {
    
    render() {
        return (
            <div>
                <h1>Welcome to...</h1>
                <img src={images.homepic}   alt="phoenix logo"/>
            </div>
        );
    }
}

export default Home;