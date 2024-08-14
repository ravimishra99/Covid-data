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
height:50px;
background-color: #1e1e30;
display: flex;
flex-direction: row;
justify-content:space-around;
align-items: center;
padding:0 20px;
margin: 0 ;
box-sizing: border-box;
overflow-x: hidden;
/* position: relative; */
`;

const Title = styled.div`
font-size:24px;
color: white;
line-height: 50px;

`;

const ButtonContainer = styled.div`
display: flex;
gap: 10px;
`;

const StyledButton=styled.button`
border: none;
background: none;
color: white;
font-size: 20px;
cursor: pointer;
transition:color 0.3s ease;
height: 50px;
display: flex;
align-items: center;
`;

const StyledLink=styled(Link)`
text-decoration: none;
color:inherit;

&:hover{
    text-decoration: underline;
}
`;


