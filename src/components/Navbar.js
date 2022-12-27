import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import '../App.css';



export default function Navbar(props) {
  return (
    <nav className={`navbar-${props.mode} bg-${props.mode}`}id="navbar">
      <div>
       <ul id="mybar">
            <a className="logo">Texteditor</a>
            <li>
              <Link className="nav-link"  to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <label  className={` switch toggel switch-${props.mode==='light'?'dark':'light'}`} >  <input className="switch" onClick={props.togglemode} type="checkbox" role="switch" id="switch" /><span className="slider round"></span></label>
        </ul>
      </div>
    </nav>

  )
}

Navbar.propTypes = { title: PropTypes.string }

Navbar.defaultProps = {
  title: 'Set Title here'
};