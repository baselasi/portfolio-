import React from "react";
import "./footer.css"
import "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){



    return(
        <footer style={{backgroundColor:"rgb(248, 246, 244)"}} className="footer ">
            <div className="icons">
                <a href="mailto:bassel-assi@live.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://www.linkedin.com/in/basselassi/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/bassel-assi" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div>
                BASSEL ASSI
            </div>
        </footer>    
    )
}