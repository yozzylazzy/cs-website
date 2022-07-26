import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Yosef Adrian - 2020130002</h2>
          </div>
          <div class='footer-link-items'>
            <h2>Jonathan Krisna - 2020130017</h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nicholas Suardiman - 2020130001</h2>
          </div>
          <div class='footer-link-items'>
            <h2>R Nur Asyifa Agustina M - 2020130001</h2>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CLOUD-WEB
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Developed By Yosef @YozzyLazzy</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;
