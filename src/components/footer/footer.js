import "./footer.css"
import "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {



    return (
        <footer className="footer " style={{ background: "#0a0a0a" }}>
            <div className="icons text-color">
                <a href="mailto:bassel-assi@live.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="text-color" /></a>
                <a href="https://www.linkedin.com/in/basselassi/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="text-color" /></a>
                <a href="https://github.com/baselasi" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="text-color" /></a>
            </div>
            <div className="text-highlight">
                BASSEL ASSI
            </div>
        </footer>
    )
}