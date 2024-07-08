// globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    transition: all 0.50s linear;
  }

  .header {
    background: ${({ theme }) => theme.headerBackground};
    color: ${({ theme }) => theme.headerText};
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .footer {
    background: ${({ theme }) => theme.footerBackground};
    color: ${({ theme }) => theme.footerText};
    padding: 20px;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
  }

  .container, .page {
    padding: 20px;
    background: ${({ theme }) => theme.containerBackground};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    transform: perspective(1000px) translateZ(0);
  }

  button {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.3s, transform 0.3s;
    &:hover {
      background: ${({ theme }) => theme.accentHover};
      transform: translateY(-2px);
    }
  }

  input, label {
    display: block;
    margin: 10px 0;
    color: ${({ theme }) => theme.text};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: rgba(31, 31, 31, 0.8);
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
  }
`;
