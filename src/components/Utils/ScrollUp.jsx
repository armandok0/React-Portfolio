/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  z-index: 1000;
  cursor: pointer;
  background-color: #364156;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 16px;
  animation: ${({ visible }) => (visible === 'true' ? fadeIn : fadeOut)} 0.5s ease;
  transition: opacity 0.5s ease;
`;

const Container = styled.div`
  max-width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <ScrollButton $visible={isVisible} onClick={scrollToTop}>
        &uarr;
      </ScrollButton>
    </Container>
  );
};

export default ScrollUp;
