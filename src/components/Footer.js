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
            <h2>Yosef Adrian</h2>
          </div>
          <div class='footer-link-items'>
            <h2>Jonathan Krisna</h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Muhammad Arby Sofyan</h2>
          </div>
          <div class='footer-link-items'>
            <h2>Andre Yonathan</h2>
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
          <small class='website-rights'>Developed By Garuda Puspa</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;
