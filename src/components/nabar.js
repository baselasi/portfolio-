import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

import './navbar.css'
import { Button } from "bootstrap";
export default function Navbar(){

    //const navigate = useNavigate()
    function changeRoute(){
        navigate('/')
    }
    return(
       <nav className="navbar navbar-expand" style={{opacity:1}}>
            <div className="container w-100">
                <ul className="navbar-nav w-100">
                    <li className="nav-item"><button className="nav-link">ABOUT ME</button></li>
                    <li className="nav-item"><button className="nav-link" >RESUME</button></li>
                    <li className="nav-item"><button className="nav-link">PROJECTS</button></li>
                </ul>
            </div>
       </nav>
    )
}