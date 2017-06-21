import React from 'react';
import {render} from 'react-dom';

import App from './App';

import appStore from './store';

render(<App appStore={appStore}/>, document.querySelector('main'));