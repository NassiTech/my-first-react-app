import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import TierCard from "./TierCard";
import Titel from "./Titel";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <Titel />

    <TierCard name="Bob" art="Hund" krankheit="Laüse" />
    <TierCard name="Lilo" art="Papagai" krankheit="Schnupfen" />
    <TierCard name="Bibi" art="Hamster" krankheit="Hamstern" />
    <TierCard name="Mimi" art="Katze" krankheit="Gastritis" />
    <TierCard name="Simba" art="Löwe" krankheit="Zahnentzündung" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
