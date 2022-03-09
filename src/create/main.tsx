import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const msgHandler: WindowEventHandlers["onmessage"] = (event) => {
  console.log("received message: ");

  console.log(event);
};
window.addEventListener("message", msgHandler);
console.log("app started");
