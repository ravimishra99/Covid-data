import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavContainer>
            <Title>COVID19 INDIA</Title>
            <ButtonContainer>
                <StyledButton> <StyledNavLink  to="/">Home</StyledNavLink> </StyledButton>
                <StyledButton> <StyledNavLink to="about">About</StyledNavLink> </StyledButton>
                <StyledButton> <StyledNavLink to="vaccination">Vaccination</StyledNavLink></StyledButton>
            </ButtonContainer>
        </NavContainer>
    )
}

export default Navigation;

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1e1e30;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  position: fixed; 
  top: 0; 
  left: 0;
  z-index: 1000; 

  @media (min-width: 300px) and (max-width: 850px) {
    flex-direction: column; 
    height: auto; 
    padding: 10px 20px;
    margin-bottom: 10px; 
  }
`;


const Title = styled.div`
  font-size: 24px;
  color: white;
  line-height: 50px;

  @media (min-width: 300px) and (max-width: 850px) {
    margin-bottom: 10px; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 300px) and (max-width: 850px) {
    width: 100%; 
    justify-content: space-around; 
  }
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease;
  height: 50px;
  display: flex;
  align-items: center;

  @media (min-width: 300px) and (max-width: 850px) {
    font-size: 18px; 
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
