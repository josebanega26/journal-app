import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer--container text-primary'>
      <span>Jose Banega </span> &nbsp; {year} - React course
    </footer>
  );
};

export default Footer;
