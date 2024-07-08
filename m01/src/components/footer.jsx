import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerText};
  padding: 20px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0 0;
  text-align: center;
  transform: perspective(1000px) translateZ(0);
  transition: transform 0.3s;

  &:hover {
    transform: perspective(1000px) translateZ(10px);
  }

  h1 {
    margin: 0;
    font-size: 1.5em;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h1>Welcome here</h1>
    </FooterContainer>
  );
};

export default Footer;
