import React from 'react';
import logo from '../../Images/logo.png';
import {Link} from "react-router-dom";
import {ImSearch} from 'react-icons/im'

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="netflix-logo" />
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recently_added">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>

        <ImSearch />
    </nav>
  )
}

export default Header