import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './navbar.css'
export default function Navbar(props) {
    const [isAtTop, setIsAtTop] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let navaBarRef = useRef(null)

    const handleScroll = () => {
        if (navaBarRef.current) {
            const rect = navaBarRef.current.getBoundingClientRect();
            if (rect.top <= 1) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        }
    };

    function navigate(destination) {
        props.navioageteTo(destination)
    }

    return (
        <nav className={`navbar navbar-expand sticky nav-bar ${isAtTop ? " bg-black " : ""}`} style={{ zIndex: "2",transition:"all ease-in 0.5s" }} ref={navaBarRef}>
            <div id="navList" className="container " >
                <ul className="navbar-nav " >
                    <li className="nav-item"  onClick={() => navigate("aboutME")}><button className="nav-link" style={{ color: "rgb(102, 255, 0)",zIndex:"999" }}>ABOUT ME</button></li>
                    <li className="nav-item"><button className="nav-link" style={{ color: "rgb(102, 255, 0)" }} onClick={() => navigate("skills")}>SKILLS</button></li>
                    <li className="nav-item"><button className="nav-link" style={{ color: "rgb(102, 255, 0)" }} onClick={() => navigate("contact")}>CONTACTS</button></li>
                </ul>
            </div>
        </nav>
    )
}