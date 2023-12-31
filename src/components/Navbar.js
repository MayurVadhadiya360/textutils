import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  const changeActive = (tag) => {
    let home = document.getElementById('home');
    let about = document.getElementById('about');
    home.classList.remove('active');
    about.classList.remove('active');
    if(tag==='home'){
      home.classList.add('active');
    }else if(tag==='about'){
      about.classList.add('active');
    }
  }
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link active" id='home' onClick={()=>{changeActive("home")}} aria-current="page" to="/textutils">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id='about' onClick={()=>{changeActive("about")}} to="/textutils/about">{props.aboutText}</Link>
            </li>
            
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>  
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Set title Here",
    aboutText : "About"
}