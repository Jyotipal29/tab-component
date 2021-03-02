import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import "./styles.css";

export default function Tab() {
  const [component, setComponent] = useState();
  function showComponent(component) {
    setComponent(component);
  }

  return (
    <div className="elements">
      <h2>Tab</h2>
      <button className="btn" onClick={() => showComponent(Home)}>
        Home 
      </button>
      <button className="btn" onClick={() => showComponent(About)}>
        About
      </button>
      <button className="btn" onClick={() => showComponent(Contact)}>
        Contact
      </button>

      {component}
    </div>
  );
}
