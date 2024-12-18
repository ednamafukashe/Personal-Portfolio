import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../images/logo.png';
import logoSVG from '../images/logo.svg';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logoSVG} alt="deena" />
      <h5>dEENA</h5>
    </Link>
  );
};

export default Logo;
