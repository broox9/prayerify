import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';

import App from './App';
import appStore from './stores/appStore';

const AppWithStore = (
  <Provider appStore={appStore}>
    <App />
  </Provider>
);

render(AppWithStore, document.querySelector('main'));
