import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './navbar.css'
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
    function navigate(destination){
        props. navioageteTo (destination)
    }
    //const navigate = useNavigate()
    return(
       <nav  className="navbar navbar-expand sticky nav-bar " style={{background:"black",zIndex:"2"}}>
            <div id="navList" ref={ref} className="container " >
                <ul className="navbar-nav " >
                    <li className="nav-item"><button className="nav-link" style={{color:"rgb(102, 255, 0)"}} onClick={()=>navigate("aboutME")}>ABOUT ME</button></li>
                    <li className="nav-item"><button className="nav-link" style={{color:"rgb(102, 255, 0)"}} onClick={()=>navigate("skills")}>SKILLS</button></li>
                    <li className="nav-item"><button className="nav-link" style={{color:"rgb(102, 255, 0)"}} onClick={()=>navigate("contact")}>CONTACTS</button></li>
                </ul>
            </div>
       </nav>
    )
}