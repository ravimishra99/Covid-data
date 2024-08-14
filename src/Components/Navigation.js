import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavContainer>
            <Title>COVID19 INDIA</Title>
            <ButtonContainer>
                <StyledButton> <StyledLink to="/">Home</StyledLink> </StyledButton>
                <StyledButton> <StyledLink to="about">About</StyledLink> </StyledButton>
                <StyledButton> <StyledLink to="vaccination">Vaccination</StyledLink></StyledButton>
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
  position: fixed; /* Make the navbar fixed */
  top: 0; /* Align it to the top */
  left: 0;
  z-index: 1000; /* Ensure it is on top of other elements */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    height: auto; /* Adjust height to fit content */
    padding: 10px 20px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  line-height: 50px;

  @media (max-width: 768px) {
    margin-bottom: 10px; /* Add space below the title on smaller screens */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%; /* Ensure buttons take full width */
    justify-content: space-around; /* Space buttons evenly */
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

  @media (max-width: 768px) {
    font-size: 18px; /* Slightly reduce font size on smaller screens */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
