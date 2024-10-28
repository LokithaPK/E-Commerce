import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <h1>Elegant Dresses for Every Occasion</h1>
        <h3>✨ Shop Our Exclusive Collection of Dresses for Every Occasion! ✨
        From elegant gowns to chic casuals, our collection offers unmatched style, comfort, and trend-forward designs. Elevate your wardrobe with timeless classics and the latest trends — because you deserve to look and feel your best, no matter the moment! 🎀</h3>
        <Link to="/products">
          <ShopButton>Shop Now</ShopButton>
        </Link>
      </HeroSection>
    </Container>
  );
};

export default Home;

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://example.com/your-background-image.jpg');
  background-size: cover;
  background-position: center;
`;

const HeroSection = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ShopButton = styled.button`
  background-color: #e63946;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d62828;
  }
`;
