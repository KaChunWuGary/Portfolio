import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/navigation.css'

function Navigation() {
  const [activeLink, setActiveLink] = useState("about");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav>
        <div className='container'>
          <div className = "row a">
            <div className = "col-3 name ">
              <h1 className= "name">Ka Chun Wu</h1>
            </div>
            <ul className = "col-9 d-flex justify-content-between">
              <li><Link to="/" className={activeLink === "about" ? "active-link" : "inactive-link"} onClick={() => handleLinkClick("about")}>About Me</Link></li>
              <li><Link to="/portfolio" className={activeLink === "portfolio" ? "active-link" : "inactive-link"} onClick={() => handleLinkClick("portfolio")}>Portfolio</Link></li>
              <li><Link to="/contact" className={activeLink === "contact" ? "active-link" : "inactive-link"} onClick={() => handleLinkClick("contact")}>Contact Me</Link></li>
              <li><Link to="/resume" className={activeLink === "resume" ? "active-link" : "inactive-link"} onClick={() => handleLinkClick("resume")}>Resume</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;