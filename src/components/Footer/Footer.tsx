import React from 'react';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer--container bg-primary text-primary">
      <span>Jose Banega </span> {year} - React course
    </footer>
  );
};

export default Footer;
