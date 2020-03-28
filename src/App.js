import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import MoneyTransfer from "./components/MoneyTransfer";
//

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <hr className="divider" />
      <Partners />
      <MoneyTransfer />
    </div>
  );
}

export default App;
