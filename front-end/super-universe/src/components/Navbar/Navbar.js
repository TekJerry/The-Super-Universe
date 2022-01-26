import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className='link-container'>
      <div className='home-link'><Link to="/">Home</Link></div>
      <div className='hero-link'><Link to="/heroes">Heroes</Link></div>
      <div className='villain-link'><Link to="/villains">Villains</Link></div>
      <div className='create-link'><Link to="/create">Create</Link></div>
        <div className='sign-link'><Link to="/signin">Sign In</Link></div>
      </div>
    </div>
  )
}
