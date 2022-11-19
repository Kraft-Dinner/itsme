import React from 'react'
import topScribble from '../images/top_scribble.svg'
import actionScribble from '../images/action_scribble.svg'

function Header() {
    return (
        <header className="app-header">
            <div className="app-logo">
                Kristen Dergousoff
                <img src={topScribble} className="app-logo-scribble" alt="That's Me!"/>
            </div>
            <nav className="app-nav">
                <img src={actionScribble} className="app-action-scribble" alt="Check it out!" />
                <span>Resumè</span>
            </nav>
        </header>
    );
}

export default Header;