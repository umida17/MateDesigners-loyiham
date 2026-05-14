import React from 'react'
import './Footer.css';

import group from "../../assets/Group.png";

const footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
            <div className="footer-container">
                <img src={group} alt="Logo" />

                <div className="about">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Work</a>
                    <a href="#">Blog</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
