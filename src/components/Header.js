import React from 'react'
import topScribble from '../images/top_scribble.svg'
import mailScribble from '../images/mail_scribble.svg'
import linkedinScribble from '../images/linkedin_scribble.svg'
import arrows from '../images/icon_arrows.svg'

function Header() {
    return (
        <header className="app-header">
            <div className="app-logo">
                Kristen Dergousoff
                <img src={topScribble} className="app-logo-scribble" alt="That's Me!"/>
            </div>
            <nav className="app-nav">
                <a href="mailto:kristen.dergousoff@gmail.com" >
                    <img src={mailScribble} className="app-mail-scribble" alt="E-mail" />
                </a>
                <a href="https://www.linkedin.com/in/kristendergousoff/" target="_blank" rel="noreferrer">
                    <img src={linkedinScribble} className="app-linkedin-scribble" alt="LinkedIn" />
                </a>

                <img src={arrows } className="app-icon-arrows" alt="" />
                <a href={process.env.PUBLIC_URL + '/Kristen_Dergousoff_Resume_2022.pdf'} target="_blank" rel="noreferrer" >Resumè</a>
            </nav>
        </header>
    );
}

export default Header;