import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <span className='navbar-brand'>
        Bienvenido
      </span>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarCollapse'
        aria-controls='navbarCollapse'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to="/" className="nav-link">Inicio<span className='sr-only'>(current)</span></Link>
          </li>
          <li className='nav-item'>
          <Link to="/about" className="nav-link">Sobre mí</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;