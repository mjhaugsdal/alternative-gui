import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Glimts alternative</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/history">Historie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Nettbutikk</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
