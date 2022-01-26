import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import './Layout.css'


export default function Layout(props) {
  return (
    <div className="layout">
      <div className='nav'>
        <Navbar />
    </div>
    <div className = "body">
        {props.children}
    </div>
    <div className="foot">
        <Footer />
    </div>
</div>
  )
}
