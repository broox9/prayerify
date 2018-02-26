/* SACRILIGE!! */
import { injectGlobal } from 'styled-components';
import sanitize from './sanitize';
import theme from './theme';

console.log('THEME', theme)

injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: ${theme.primaryText};
    font-family: San Francisco, Roboto, sans-serif;
  }

  body {
    background-color: ${theme.bgColor};
    min-height: 100vh;
  }

  main {
    height: 100%;
    width: 100%;
  }

  html {
    background-color: ${theme.colors.lightRed};
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${theme.accent};
  }
`;

export default theme;
