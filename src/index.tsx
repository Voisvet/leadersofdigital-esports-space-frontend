import "core-js/features/map";
import "core-js/features/set";
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from "@vkontakte/vk-bridge";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterContext } from "@happysanta/router";
import { router } from "./router/router";

bridge.send("VKWebAppInit", {});

ReactDOM.render(
  <React.StrictMode>
    <RouterContext.Provider value={router}>
      <App />
    </RouterContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
