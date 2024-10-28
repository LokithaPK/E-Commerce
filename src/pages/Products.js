import React, { useState } from 'react';
import styled from 'styled-components';

const products = {
  men: [
    {
      id: 1,
      name: 'Men Suit',
      image: '/images/men-suit.png',
      price: 1300,
    },
    {
      id: 2,
      name: 'Men Jacket',
      image: 'images/men-jacket.png',
      price: 800,
    },
  ],
  women: [
    {
      id: 1,
      name: 'Women Dress',
      image: 'images/women-dress.png',
      price: 2500,
    },
    {
      id: 2,
      name: 'Women Top',
      image: 'images/women-top.png',
      price: 500,
    },
  ],
};

const Products = ({ addToCart }) => {
  const [category, setCategory] = useState('men');

  return (
    <Container>
      <h1>Select Your Category</h1>
      <ButtonGroup>
        <CategoryButton onClick={() => setCategory('men')}>Men</CategoryButton>
        <CategoryButton onClick={() => setCategory('women')}>Women</CategoryButton>
      </ButtonGroup>

      <ProductGrid>
        {products[category].map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>₹{product.price}</ProductPrice>
            <AddToCartButton onClick={() => addToCart(product)}>
              Add to Cart
            </AddToCartButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default Products;

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button`
  margin: 0 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
`;

const ProductImage = styled.img`
  width: 100%;         
  max-width: 400px;   
  height: 300px;    
  object-fit: cover;  
  border-radius: 8px;  
  margin-bottom: 1rem; 
`;

const ProductName = styled.h2``;

const ProductPrice = styled.p``;

const AddToCartButton = styled.button``;
