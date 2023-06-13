import React from 'react'
// import {FaCoins} from 'react-icons/fa';
import {FaConnectdevelop} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <Link to='/'>
    <div>
    <div className='navbar'>
    {/* <FaCoins className='icon'/> */}
    <FaConnectdevelop className='icon'/> 
    <h1> CRYP<span className='purple'>TOR</span></h1>
 </div>
    </div>
      </Link>
  )
}

export default NavBar