/* SACRILIGE!! */
import {injectGlobal} from 'styled-components';
import reset from './reset';
import theme from './theme';

injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
    font-size: 18px;
    color: ${theme.primaryText};
    font-family: San Francisco, Roboto, sans-serif;
  }

  @media(max-width: 414px) {
    html, body {
      font-size: 16px;
    }
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
    background-color: ${theme.htmlColor};
  }

  .container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  a {
    cursor: pointer;
  }
`;

export default theme;
