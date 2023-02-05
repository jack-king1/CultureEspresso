import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="min-w-screen min-h-screen object-fill bg-slate-900">
      <App />
    </div>
  </React.StrictMode>
);
