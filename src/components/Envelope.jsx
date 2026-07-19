import React, { useState } from 'react';
import './Envelope.css';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Wait for flap to open before moving the letter up and fading out envelope
      setTimeout(() => {
        setIsMoved(true);
      }, 600); // 0.6s matches the flap animation

      // Notify parent to transition to main content
      setTimeout(() => {
        if (onOpen) onOpen();
      }, 2000); // Wait for letter to pop up and stay a bit before transition
    }
  };

  return (
    <div className={`envelope-wrapper ${isMoved ? 'fade-out' : ''}`}>
      <div className="envelope-bg-image"></div>
      <div className="envelope" onClick={handleClick}>
        <div className="envelope-back"></div>
        <div className={`envelope-letter ${isOpen ? 'open' : ''}`}>
          <div className="letter-inner-border">
            <div className="letter-stamp"></div>
            <div className="letter-content">
              <div className="floral-top">⚜</div>
              <h3 className="pre-title-letter">NOS CASAMOS</h3>
              <h2 className="script-text initials">I & S</h2>
              <p className="letter-text">Acompáñanos a celebrar<br/>el comienzo de nuestra historia</p>
              <p className="letter-date">15 . 11 . 2026</p>
              <div className="floral-bottom">⚜</div>
            </div>
          </div>
        </div>
        <div className="envelope-front"></div>
        <div className="envelope-left"></div>
        <div className="envelope-right"></div>
        <div className={`envelope-flap ${isOpen ? 'open' : ''}`}>
           <div className={`wax-seal ${isOpen ? 'hidden' : ''}`}>
             <svg width="120" height="150" viewBox="0 0 120 150" className="wax-seal-svg">
                <defs>
                  <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f9d976" />
                    <stop offset="50%" stopColor="#e3b53c" />
                    <stop offset="100%" stopColor="#b38728" />
                  </linearGradient>
                  <radialGradient id="gold-radial" cx="35%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#fff3b0" />
                    <stop offset="30%" stopColor="#f5c242" />
                    <stop offset="80%" stopColor="#d19a1d" />
                    <stop offset="100%" stopColor="#966509" />
                  </radialGradient>
                  <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.4" />
                  </filter>
                  <filter id="inner-rim" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#ffe58f" floodOpacity="0.8"/>
                    <feDropShadow dx="-1" dy="-1" stdDeviation="1" floodColor="#8c5a00" floodOpacity="0.8"/>
                  </filter>
                </defs>

                {/* Top Rope Loop */}
                <path d="M45,40 C35,5 85,5 75,40" fill="none" stroke="#e0c694" strokeWidth="4" strokeDasharray="3,1" />

                {/* Bottom Ropes */}
                <path d="M50,90 C35,120 20,135 25,145" fill="none" stroke="#e0c694" strokeWidth="4" strokeDasharray="3,1" />
                <path d="M70,90 C85,115 95,130 90,140" fill="none" stroke="#e0c694" strokeWidth="4" strokeDasharray="3,1" />

                {/* Outer Organic Blob */}
                <path 
                  d="M 60 30 
                     C 85 28, 100 45, 95 65
                     C 90 85, 75 95, 50 93
                     C 25 91, 15 75, 20 55
                     C 25 35, 35 32, 60 30 Z" 
                  fill="url(#gold-radial)" 
                  stroke="url(#gold-grad)"
                  strokeWidth="3"
                  filter="url(#drop-shadow)" 
                />
                
                {/* Inner Rims */}
                <circle cx="58" cy="62" r="23" fill="none" stroke="url(#gold-grad)" strokeWidth="3" filter="url(#inner-rim)" />
                <circle cx="58" cy="62" r="19" fill="none" stroke="url(#gold-grad)" strokeWidth="1" />
             </svg>
             <span className="seal-text">I & S</span>
           </div>
        </div>
      </div>
      {!isOpen && (
        <div className="tap-hint">Toca para abrir</div>
      )}
    </div>
  );
}
