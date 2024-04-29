/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react';

const StyledBurgerContainer = styled.div`
  position: fixed;
  top: 2%;
  right: 2rem;
  z-index: 35;
  @media (max-width: 768px) {
    position: absolute;
    top: 2%;
    right: 2rem;
  }
`;

function BurgerContainer({ open, setOpen }) {
  const color = open ? "white" : "white";
  return (
    <StyledBurgerContainer>
      {}
      <Hamburger toggled={open} toggle={setOpen} color={color} />
    </StyledBurgerContainer>
  );
}

export default BurgerContainer;
