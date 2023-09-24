import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

import './navbar.css'
import { Button } from "bootstrap";

export default function Navbar(props){
    const [isShowing,setShow] = useState(false)
    const ref=useRef()
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=>{
                    props.setButtonOpacity(!entrie.isIntersecting)
                    setShow(entrie.isIntersecting)
            })
        })
        observer.observe(ref.current)
    },[])
    //const navigate = useNavigate()
    return(
       <nav  className="navbar navbar-expand sticky nav-bar " style={{opacity:isShowing?"0.9":"1",zIndex:"2"}}>
            <div ref={ref} className="container w-100" >
                <ul className="navbar-nav w-100" >
                    <li className="nav-item"><button className="nav-link" style={{color:"rgb(102, 255, 0)"}}>ABOUT ME</button></li>
                    <li className="nav-item"><button className="nav-link" style={{color:"rgb(102, 255, 0)"}}>RESUME</button></li>
                    <li className="nav-item"><button className="nav-link" style={{color:"rgb(102, 255, 0)"}}>PROJECTS</button></li>
                </ul>
            </div>
       </nav>
    )
}