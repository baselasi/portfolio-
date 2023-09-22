import React, { useEffect, useRef, useState } from "react";
import data from "../projectsData"
import "./projects.css"
export default function Projects(){
    const [divs,setDivs]=useState([])
    const [currentPosition,setPosition] = useState(0)
    useEffect(()=>{
        setDivs(projects)

    },[])
    function renderProjects(obj){
        return(
            <div ref={(el)=>projects[data.indexOf(obj)]=el} className="cover" style={{backgroundImage:`url(${obj.imgs[0]})`}}></div>
        )
    }
    let projects= useRef(new Array())
    if( divs[currentPosition]){
        divs[currentPosition].scrollIntoView({ behavior: "smooth" })
    }
    function scrollRight(){
        if(currentPosition<3){
            setPosition((prev)=>prev+1)
        }
        else{

        }
    }
    function scrollleft(){
        if(currentPosition>0){
            setPosition((prev)=>prev-1)
        }
    }
    return(
        <section style={{backgroundColor:"rgb(248, 246, 244)"}} className=" marging-padding border-bottom border-5 border-primary">

            <button style={{position:"absolute"}} onClick={scrollRight}>+</button>
            <div className=" projects">
            { 
               data.map((obj)=>{
                return(
                    <div className=" marging-padding flex " >
                    {
                        renderProjects(obj)
                    }
                    </div>
               
                )
               })
            }
            </div>
            
            <button style={{position:"absolute",right:"50%"}} onClick={scrollleft}>-</button>
        </section>            
    )
}