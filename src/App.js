import React from "react";
import "./styles.css"; // styles.css 파일을 불러옴
import "./window.css";

import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="다운로드.jpg" alt="Home" />
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="Apps">
          <h1>Hello, World!</h1>
          <h2> My name </h2>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
