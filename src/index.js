import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const theme = {
  media: {
    xl: "@media (min-width: 1440px)",
    l: "@media (min-width: 1200px)",
    md: "@media (min-width: 768px)",
    sm: "@media (min-width: 576px)",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
