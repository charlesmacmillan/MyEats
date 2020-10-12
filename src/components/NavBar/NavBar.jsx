import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT - {props.user.name}</Link>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      <Link to='/' className="NavBar-img">
        <h1>My Eats</h1>
        <img src="https://i.imgur.com/9ohGIv7.png" alt="avocado" />
      </Link>
      {nav}
    </div>
  );
};

export default NavBar;