/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ currentPage, handlePageChange }) {
  // Create state variable to track menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // Check to see if the currentPage is `Home`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
          <div className="navbar-brand">Jenny Naoroji</div>
        </a>
        <button 
        className="navbar-toggler navbar-toggler-right" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarResponsive" 
        aria-controls="navbarResponsive" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        onClick={handleMenuToggle} 
        ><span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="nav nav-tabs navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a
                 href="#about"
                onClick={() => handlePageChange('About')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                style={{ padding: '10px' }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                style={{ padding: '10px' }}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                style={{ padding: '10px' }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                style={{ padding: '10px' }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}

export default NavBar;
