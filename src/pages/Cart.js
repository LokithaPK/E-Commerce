import React from 'react';
import styled from 'styled-components';

const Cart = ({ cartItems = [], removeFromCart }) => {
  return (
    <CartWrapper>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <CartImage src={item.image} alt={item.name} />
            <CartDetails>
              <CartName>{item.name}</CartName>
              <CartPrice>₹{item.price}</CartPrice>
            </CartDetails>
            <RemoveButton onClick={() => removeFromCart(item.id)}>
              Remove
            </RemoveButton>
          </CartItem>
        ))
      )}
    </CartWrapper>
  );
};

export default Cart;

// Styled components
const CartWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f1f1f1;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CartImage = styled.img`
  width: 80px;
  height: auto;
`;

const CartDetails = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const CartName = styled.h3`
  margin: 0;
`;

const CartPrice = styled.p`
  margin: 0;
`;

const RemoveButton = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d62828;
  }
`;
