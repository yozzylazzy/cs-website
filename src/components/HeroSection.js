import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-4.mp4' autoPlay loop muted />
            <h1>SELAMAT DATANG</h1>
            <p>Di Website Cloud Kelompok Satu</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    TENTANG KAMI
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
