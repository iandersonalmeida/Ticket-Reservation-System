
import React, { Component } from 'react';
import images from './images/images.js';
import './css/home.css';




class Home extends Component {
    constructor(props){
        super(props)
        this.handleHome = this.handleHome.bind(this);
    }

    handleHome(){      
        window.location.href="movieform";
    }

    
    render() {
        return (
            <div className='homediv'>
                <h1>Welcome to...</h1>
                <img src={images.homepic}   alt="phoenix logo" className='homeimage'/>
                <a href='movieform'> <button className='homeBtn' onClick={() => this.handleHome.bind(this)}>Start!</button></a>
            </div>
        );
    }
}

export default Home;