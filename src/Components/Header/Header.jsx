import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import Logo from '../../logo.png';
import './Header.scss';


const Header = () => {
  return (
    <nav className='header'>
      <img src={Logo} alt='NETFLIX' />
      <div>
        <Link to='/movies'>Movies</Link>
        <Link to='/tvShows'>TV shows</Link>
        <Link to='/recentlyAdded'>Recently Added</Link> 
        <Link to='/myList'>My List</Link>
      </div>

      <BsSearch />
    </nav>
  )
}

export default Header