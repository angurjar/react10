import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.headerText};
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
  }
`;

const HeaderLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  li {
    a {
      color: ${({ theme }) => theme.headerText};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src="logo.jpg" alt="We and  us" />
      </HeaderLogo>
      <HeaderLinks>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/Leaves">Leaves</Link></li>
        <li><Link to="/Attendance">Attendance</Link></li>
        <li><Link to="/Employee">Employee</Link></li>
      </HeaderLinks>
    </HeaderContainer>
  );
}

export default Header;
