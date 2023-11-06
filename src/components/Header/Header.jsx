// Header.jsx
import { NavLink } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          {/* Assuming you have a logo image or text here */}
          <h1>Mowlesar</h1>
        </div>
        <ul className="navigation">
          <li>
            <NavLink exact to="/" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
