import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for fade-in and slide-out animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

// Define keyframes for sliding content animation
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Apply animations to the FooterContainer
const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: linear-gradient(to right, #FF6F00, #003366); /* Gradient background from orange to blue */
  border-top: 1px solid #ccc;
  position: relative;
  bottom: 0;
  width: 100%;
  font-weight: bold;
  font-family: 'Coneria', sans-serif;
  color: white; /* White text for contrast */
  font-size: 20px;
  animation: ${fadeIn} 6.5s ease-in-out; /* Apply fadeIn and slideOut animations */
  animation-delay: 0s, 5s; /* Fade-in starts immediately, slide-out starts after 5 seconds */
`;

// Apply the sliding animation to the additionalContent
const AdditionalContent = styled.div`
  margin-top: 20px;
  font-weight: normal;
  font-family: 'Coneria', sans-serif;
  animation: ${slideIn} 10s ease-in-out; /* Slide-in animation with a duration of 10 seconds */
  overflow: hidden; /* Hide overflow to ensure smooth sliding effect */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img src="/logo-removebg-preview (1).png" alt="connectPES Logo" style={styles.logo} />
      <p>&copy; {new Date().getFullYear()} connect. All rights reserved</p>
      <AdditionalContent>
        <div style={styles.links}>
          <a href="https://contributorsconnectpes.netlify.app/" style={styles.link}>Contributors</a>
          <a href="https://termsconnectpes.netlify.app/" style={styles.link}>Terms of use</a>
          <a href="https://contactuspes.netlify.app/" style={styles.link}>Contact Us</a>
        </div>
        <p>connectPES: Your go-to platform to connect with alumni of PES University. Stay connected with your queries and concerns and stay in touch!</p>
      </AdditionalContent>
    </FooterContainer>
  );
};

const styles = {
  links: {
    marginTop: '10px',
    fontFamily: 'Coneria',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: 'normal',
    color: 'lightblue', // Light blue for visibility
    fontFamily: 'Coneria',
    padding: '20px',
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
};

export default Footer;
