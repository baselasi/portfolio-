import React from "react";
import background1 from "../imgs/img.jpg"
import Navbar from "./nabar";

export default function AboutMe(){
    return(
        <div style={{backgroundImage : `url(${background1})`}}>
            <div style={{color: "white"}}>FRONT-END DEVOLEOPER / PROCESS AND MATERIAL ENGINEER</div>
        </div>
    )
}