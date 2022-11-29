import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div className="nav-bar">
            <Link 
                className="nav-bar-link" 
                to='about' 
                spy={true}
                smooth={true} 
                offset={-50}>
                    About
            </Link>
            <Link 
                className="nav-bar-link" 
                to='experience' 
                spy={true}
                smooth={true} 
                offset={-50}>
                    Experience
            </Link>
            <Link 
                className="nav-bar-link" 
                to='projects' 
                spy={true}
                smooth={true} 
                offset={-50}>
                    Playground
            </Link>
            <Link 
                className="nav-bar-link" 
                to='contact' 
                spy={true}
                smooth={true} 
                offset={-50}>
                    Contact
            </Link>
        </div>
    )
}

export default Navbar;