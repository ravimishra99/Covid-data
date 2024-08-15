import React from 'react';
import styled from 'styled-components';
const Footerbar = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>COVID19INDIA</FooterTitle>
      </FooterContent>
      <FooterText>We stand with everyone fighting on the front lines</FooterText>
    </FooterContainer>
  );
}

export default Footerbar;

// Styled Components

const FooterContainer = styled.div`
  background-color: #161625;
  text-align: center;
  color: white;
  height: auto;
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;

const FooterContent = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const FooterTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const FooterText = styled.div`
  font-size: 1rem;
  margin-bottom: 30px;
  color: #cccccc;
`;
