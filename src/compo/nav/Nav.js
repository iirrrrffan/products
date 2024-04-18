import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to={"/"}>
        <p>home</p>
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to={"1"}>
                
          <p>category1</p>
            </Link>
        </li>
        <li className="nav-item">
        <Link to={"2"}>

          <p >category2</p>
        </Link>
        </li> 
        <li className="nav-item">
        <Link to={"all"}>

          <p>all</p>
        </Link>
        </li>
        <li className="nav-item">
        <Link to={"edit"}>

          <p>edit</p>
        </Link>
        </li>
        <li className="nav-item">
        <Link to={"create"}>

          <p>create</p>
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
