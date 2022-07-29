import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SecondSection.css';

function SecondSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>TENTANG KAMI</h1>
            <p>BUILD WITH REACT JS <img src='logo512.png' id="reactlogo" width="45" /></p>
            <div className='hero-btns'>

            </div>
        </div>
    );
}

export default SecondSection;
