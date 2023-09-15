import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sum.css"
import data from "../data";
export default function AboutMe(){
    return(
    
    <section  className=" section  row align-content-center sticky" style={{zIndex:"-1",backgroundColor:"black"}}>
            
            <div className="first-continer col-sm-12 ">
                <div className="h2 ">HI, I'M <span className=" danger">BASSEl ASSI</span>, FRONT-END DEVOLEOPER / PROCESS AND MATERIAL ENGINEER</div>
                <div className="h4 container">{data.aboutMe.profile}</div>
            </div>
        </section>
    )
}