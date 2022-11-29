import React from 'react'
import topScribble from '../images/top_scribble.svg'
import Navbar from './Navbar'

function Header() {
    return (
        <header className="app__header">
            <div className="app__logo">
                Kristen Dergousoff
                <img src={topScribble} className="app__logo--text scribble" alt="That's Me!"/>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;