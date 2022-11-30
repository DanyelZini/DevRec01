import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" class="menu">Pag 1 </Link>{" "}
          </li>
          <li>
            <Link to="/usuarios" class="menu">Clientes</Link>
          </li>
          <li>
            <Link to="/sobre" class="menu"> Pag 3 </Link>
          </li>
          <li>
            <Link to="/pessoas" class="menu"> Pessoas </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
