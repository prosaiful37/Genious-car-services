import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='bg-dark py-2'>
      <p className='text-center text-white'>
        <small>Copywrite © {year} saiful</small>
      </p>
    </footer>
  );
};

export default Footer;