/* SACRILIGE!! */
import {injectGlobal} from 'styled-components';
import reset from './reset';
import colors from './colors';

injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-family: San Francisco, Roboto, sans-serif;
  }

  body {
    background-color: ${colors.white};
    min-height: 100vh;
  }

  html {
    background-color: ${colors.lightGrey};
  }
`;