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
  console.log("received message: ", event);
  if ((window as any).updateTabInfo) {
    console.log("update msg to app");
    (window as any).updateTabInfo(JSON.parse(event.data));
  }
};
window.addEventListener("message", msgHandler);
console.log("app started");
