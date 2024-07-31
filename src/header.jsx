import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define keyframes for sliding animation
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Apply animations to the HeaderContainer
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #FF6F00, #003366); /* Gradient background from orange to blue */
  border-bottom: 2px solid #3399ff; /* Light blue border */
  font-size: 32px;
  font-family: 'Coneria', sans-serif; /* Font with fallback */
  color: #003366; /* Dark blue text color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: ${fadeIn} 2.5s ease-in-out; /* Apply fadeIn animation */
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding-bottom: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContentRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

const TextContainer = styled.div`
  flex: 1 1 40%;
  margin: 0 20px;
  font-size: 16px;
  text-align: left;
  background-color: #f2f2f2; /* Light gray background for text container */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Coneria', sans-serif;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  color: #003366; /* Dark blue text color */
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  font-family: 'Coneria', sans-serif;
`;

const ImageContainer = styled.div`
  flex: 1 1 40%;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

// Define SlidingHeading component with sliding animation
const SlidingHeading = styled.h1`
  animation: ${slideDown} 5s ease-out; /* Slide-down animation */
  font-family: 'Coneria';
  color: white; /* Set color to white */
  margin-bottom: 20px;
  text-align: center;
  font-size: 3rem; /* Adjust font size as needed */
  font-weight: bold; /* Make heading bold */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add text shadow for better readability */
  color: silver;
`;

const Header = () => {
  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <img src="/logo-removebg-preview (1).png" alt="connectPES Logo" style={styles.logo} />
        </LogoContainer>
        <SlidingHeading>Welcome to connectPES</SlidingHeading>
        <div style={styles.links}>
          <a href="/" style={styles.link}>Home</a>
          <a href="#bottom" onClick={scrollToBottom} style={styles.link}>Contributors</a>
          <a href="#bottom" onClick={scrollToBottom} style={styles.link}>Terms of use</a>
          <a href="#bottom" onClick={scrollToBottom} style={styles.link}>Contact Us</a>
        </div>
      </HeaderContent>
      <ContentRow>
        <TextContainer>
          <List>
            <ListItem>connectPES is a platform designed to bridge the gap between current students of the university who are eligible for placements and want to seek necessary guidance and support from PES alumni who happen to work in the same organization as the one they are wishing to apply for.</ListItem>
            <ListItem>Whether you are a student looking to connect with alumni working in companies you are applying to, or an alumni wishing to provide guidance and support, connectPES is here to help.</ListItem>
            <ListItem>Join us to foster connections and support the next generation of professionals.</ListItem>
            <ListItem>Our platform not only provides students with valuable networking opportunities but also allows alumni to give back to the community by sharing their experiences and insights.</ListItem>
            <ListItem>Together, we can create a supportive environment where everyone thrives and achieves their career goals.</ListItem>
          </List>
        </TextContainer>
        <ImageContainer>
          <Image src="https://www.pessat.com/img/video-cover.jpg" alt="PES Campus" />
        </ImageContainer>
      </ContentRow>
    </HeaderContainer>
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
    fontSize: '20px'
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
};

export default Header;
