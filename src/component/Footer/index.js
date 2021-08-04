import React from 'react';

const Footer = () => {

    return (
      <footer className="fixed-bottom bg-dark d-flex justify-content-between flex-md-row">
        <p className="text-secondary">
        React Portfolio for Daniel Dunne | 216-681-6711      
        </p>
  
        <div className="d-flex footer">
  
          <a className=" mx-2" href='mailto:ayylam0coding@protonmail.com'>
            <h1><i className="bi bi-envelope-fill"></i></h1> 
          </a>
          <a className="nav-item nav-link p-0 mx-2" href="https://github.com/AYYLAM0"
            rel="noopener noreferrer" target="blank">
            <h1><i className="bi bi-github"></i></h1> 
          </a>
          <a className="nav-item nav-link p-0 mx-2" href="www.linkedin.com/in/ayylam0"
            rel="noopener noreferrer" target="blank">
            <h1><i className="bi bi-linkedin"></i></h1> 
          </a>
  
  
        </div>
  
      </footer>
    )
  }
  
  export default Footer;



