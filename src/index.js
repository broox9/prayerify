import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";

import App from "./App";
import appStore from "./stores/mobxStore";
import setupStore from "./stores/reduxStore";

const appStore2 = setupStore(/* pass initial state */);

render(<App store={appStore2} />, document.querySelector("main"));
