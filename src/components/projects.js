import React, { useEffect, useRef, useState } from "react";
import data from "../projectsData"
import "./projects.css"
export default function Projects(props){
    const [divs,setDivs]=useState([])
    const [currentPosition,setPosition] = useState(0)
    const [showModal,setShow] = useState(props.modalState)
    const  [showObject,setObject] = useState(data[0])
    useEffect(()=>{
        setDivs(projects)
        setShow(props.modalState)
    },[props.modalState])
    function showDiscription(obj){
        setShow(true)
        setObject(obj)
        props.setModal(true)
    }
    function renderProjects(obj){
        return(
            <div ref={(el)=>projects[data.indexOf(obj)]=el} className="cover" onClick={()=>{renderDescription(obj,1);showDiscription(obj)}} style={{backgroundImage:`url(${obj.imgs[0]})`}}>
                {obj.discription}
            </div>
        )
    }
    function renderDescription(index){
       return(
            <>
                <div style={{backgroundImage:`url(${showObject.imgs[index]})`}}></div>
                <div >{showObject.imgs.map((img)=>{
                    if(showObject.imgs.indexOf(img)===0){
                        return null
                    }
                    else{
                        return(
                            <div style={{backgroundImage:`url(${img})`,zIndex:"1"}}  >s</div>

                        )
                    }
                })}
                </div>
            </>

        )
    }
    let projects= useRef(new Array())
    if( divs[currentPosition]){
        divs[currentPosition].scrollIntoView({ behavior: "smooth" ,block: 'nearest', inline: 'center'})
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

            <button style={{position:"absolute"}} className="round-btn" onClick={scrollleft}>&#8249;</button>
            <div className=" projects">
            { 
               data.map((obj)=>{
                return(
                    <div className="  flex " >
                    {
                        renderProjects(obj)
                    }
                    </div>
               
                )
               })
            }
            
            </div>
           
            <button style={{position:"absolute",right:"0%"}} className="round-btn"   onClick={scrollRight}>&#8250;</button>
            <div className="discription" style={{display: showModal ? "flex" : "none"}}>{renderDescription()}</div>
        </section>            
    )
}