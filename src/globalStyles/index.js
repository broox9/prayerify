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
    background-color: ${theme.colors.darkBlue};
    min-height: 100vh;
  }

  main {
    height: 100%;
    width: 100%;
  }

  html {
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white}
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default theme;
