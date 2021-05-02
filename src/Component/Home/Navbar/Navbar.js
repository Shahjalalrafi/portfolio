import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo"><Link style={{textDecoration: "none", color: "white"}} to='/'>SHAHJALAL RAFI</Link></h1>
        <nav>
          <ul>
            <Link style={{textDecoration: "none"}} to='/home'><li>home</li></Link>
            <Link style={{textDecoration: "none"}} to='/about'><li>About</li></Link>
            <Link style={{textDecoration: "none"}} to='/work'><li>Work</li></Link>
            <Link style={{textDecoration: "none"}} to='/blog'><li>Blog</li></Link>
            <Link style={{textDecoration: "none"}} to='/contact'><li>Contact</li></Link>
            <a style={{textDecoration: "none"}} href="../../../Images/resume.pdf" download><li>Resume</li></a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;