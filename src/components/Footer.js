import React from 'react';
import claruswaylogo from "../assets/images/logo.png"

const Footer = () => {
    const openClaruswayWebsite = () => {
      window.open('https://clarusway.com/', '_blank');
    };
  
    return (
      <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '1rem', position: 'fixed', bottom: '0', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          Clarusway Web Design
        </div>
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <img src={claruswaylogo} alt="Clarusway Logo" style={{ width: '100px', height: 'auto', cursor: 'pointer' }} onClick={openClaruswayWebsite} />
        </div>
      </div>
    );
  }

export default Footer;