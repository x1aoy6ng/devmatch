import React, { useState, useEffect } from 'react';
import { IoMdRocket } from 'react-icons/io';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{ ...buttonStyle, opacity: visible ? 1 : 0 }}
      aria-label="Back to top"
    >
      <IoMdRocket />
    </button>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  backgroundColor: '#6A5ACD',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  fontSize: '30px',
  transition: 'opacity 0.5s ease-in-out',
};

export default BackToTopButton;