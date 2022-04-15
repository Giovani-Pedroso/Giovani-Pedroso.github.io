//Import modules
import React from 'react';
import {Link} from 'react-router-dom';

//Import of css and componentes files
import './Navbar.css';

//Import Icons
import {FaPython,
        FaMicrochip,
        FaGlobe,
        FaHome} from 'react-icons/fa';
import {IoLanguageSharp} from 'react-icons/io5';

const selectedLink={
    borderBottom: '4px solid #006989',
  
};


export default function NavBar ({page, onPage}){

    return (
        <>
          <nav className="nav">
            <div className="home" style={page ==="home" ? selectedLink : {}}>
              <Link to="/" className="link-container">
                <FaHome className="icons"/>
                <span className="text-nav">
                  Home
                </span>
              </Link>
            </div>
            <div className="sections">
              <div style={page ==="web" ? selectedLink : {}}>
                <Link to="/web/" className="link-container">
                  <FaGlobe
                    style={page ==="web" ? {color:"blue"} : {}}
                    className="icons"/>
                  <span className="text-nav">
                    Web
                  </span>
                </Link>
              </div>
              <div style={page ==="python" ? selectedLink : {}}>
                  <Link to="/python/" className="link-container">
                    <FaPython
                      style={page ==="python" ? {color:"yellow"} : {}}
                      className="icons"/>
                    <span className="text-nav">
                      Python
                    </span>
                  </Link>
              </div>
              <div style={page ==="embedded" ? selectedLink : {}}>
                <Link to="/embedded/" className="link-container">
                  <FaMicrochip
                    style={page ==="embedded" ? {color:"green"} : {}}
                    className="icons"/>
                  <span className="text-nav">
                    Embedded
                  </span>
                </Link>
              </div>
            </div>
        {/*            <div className="language">
              <IoLanguageSharp className="icons"/>
              <span className="text-nav">
                Languages
              </span>

              </div>

         */}
          </nav>
        </>

    );
}
