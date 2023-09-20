import React, { useState } from 'react';
import { Button } from '@mui/material';
import './nav.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isLogin = JSON.parse(localStorage.getItem('login'));
  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="logo"><a href="/about">TorioxLead</a></div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              Services <ArrowDropDownIcon />
              <ul className="submenu">
                <li ><a href="/start">LinkedIn Prospector</a></li>
                <li><a href="/start">email</a></li>
                <li><a href="/chat">ChatBot</a></li>
                
              </ul>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
           <Button variant="outlined" href={isLogin?'/logout':'/login'}>{isLogin?'logout':'login'}</Button></li>
              
          </ul>
          
        
        
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
    
      </div>
    </nav>
  );
}

export default Nav;



