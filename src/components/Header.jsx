import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='' />
        <p>Profile</p>
      </div>
      <ul>
        <li><a href='/'>Account</a></li>
        <li><a href='/'>Logout</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
