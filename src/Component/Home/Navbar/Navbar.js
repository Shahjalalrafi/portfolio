import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo"><Link to='/'>SHAHJALAL RAFI</Link></h1>
        <nav>
          <ul>
            <Link to='/home'><li>home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/work'><li>Work</li></Link>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <a href="https://docs.google.com/document/d/1_gPW7vIzUMGcGkLoTkRW_o534uWfcHkhEHjcfO3zpU8/edit?usp=sharing" rel="noreferrer" target="_blank"><li>Resume</li></a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;