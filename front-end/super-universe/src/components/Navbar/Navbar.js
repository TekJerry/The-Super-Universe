import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className='link-container'>
      <div className='home-link'><Link to="/"><button className="link-btn1">Home</button></Link></div>
      <div className='hero-link'><Link to="/heroes"><button className="link-btn2">Heroes</button></Link></div>
      <div className='villain-link'><Link to="/villains"><button className="link-btn3">Villains</button></Link></div>
      <div className='create-link'><Link to="/create"><button className="link-btn4">Create</button></Link></div>
        <div className='sign-link'><Link to="/signin"><button className="link-btn5">Sign In</button></Link></div>
      </div>
    </div>
  )
}
