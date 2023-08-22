import React, { useState } from "react";
import data from "../data";
import "./skill.css"
import ScrollTrigger from "react-scroll-trigger";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

export default function Skills(){
    const [firstWidth,setWidth] = useState([])
    const [secondWidth,setSecondwidth]=useState([])
    function changeWidth(skill,skillSet){
        switch(skillSet)
        {
            case "programing":
                setWidth((prev)=>[...prev,skill.competence])
                break;
            case "enginering":
                setSecondwidth((prev)=>[...prev,skill.competence])
                break;
            default:
                console.log("as")
        }
       
    }
    return(
        <ScrollContainer>
        <section className="h-100">
            <div className=" container">
                
                    <Animator animation={batch( Move(500,0))}>
                        <h2 className="border-bottom w-25 text-center">PROGRAMING SKILLS</h2>
                    </Animator>
                    
                    <div className=" row">
                        {data.programnigSkills.map((skill)=>{
                        return(
                            <div className="  col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="logo " src={skill.logo}></img>
                                <h4>
                                {skill.skill}
                                </h4>
                                <ScrollTrigger onEnter={()=>changeWidth(skill,"programing")} style={{width:"100%"}}><div className="continer-skill"><div  style={{width:`${firstWidth[data.programnigSkills.indexOf(skill)]}%`}} className="skill-level"></div>{skill.competence}%</div></ScrollTrigger>
                            </div>
                        )
                    })}
                    </div>
                
             
            </div>
            <div className="container">
            <Animator animation={batch( Move(500,0))}>
                <h2 className="border-bottom w-25 text-center">ENGINERING SKILLS</h2>
                </Animator>
                <div className=" row">
                    {data.engineeringSkills.map((skill)=>{
                        return(
                            <div className="  col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="logo " src={skill.logo}></img>
                                <h4>
                                {skill.skill}
                                </h4>
                                <ScrollTrigger onEnter={()=>changeWidth(skill,"enginering")} style={{width:"100%"}}><div className="continer-skill"><div  style={{width:`${secondWidth[data.engineeringSkills.indexOf(skill)]}%`}} className="skill-level"></div>{skill.competence}%</div></ScrollTrigger>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="container">
                <h2 className="border-bottom w-25 text-center">SOFT SKILLS</h2>
                <div className=" row">
                    {data.softSkills.map((skill)=>{
                        return(
                            <div className="  col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="logo " src={skill.logo}></img>
                                <h4 >
                                {skill.skill}
                                </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>

            </div>
            

        </section>
        </ScrollContainer>
    )
}