import React, { useState } from "react";
import data from "../data";
import "./skill.css"
import ScrollTrigger from "react-scroll-trigger";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
export default function Skills(){
    const [firstWidth,setWidth] = useState([])
    const [secondWidth,setSecondwidth]=useState([])
    const [widths,setWidths] = useState({
        firstTtitle: 25,
        secondTitle: 0,
        thierdTitle: 0
        })
    function changeWidth(skill,skillSet,x){
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
    function Skill(title, width){
        this.titile = title
        this.titleWidth = width
        this.changeTitleWidth = (x)=>{
            switch(x)
            {
                case 25:
                    widths.firstTtitle= 100
                    console.log(this.titleWidth)
                    console.log(width)
                    break;
                case 100:
                    widths.firstTtitle = 25
                    console.log("s")
                    break;
                default:
                    console.log("err")
            }
        }
        this.renderContent = (data)=>{
            return(
                <div className=" container flex-column align-content-around">
                <ScrollTrigger onExit={()=>this.changeTitleWidth(this.titleWidth)} onEnter={()=>this.changeTitleWidth(this.titleWidth)}>
                    <h2 className="border-bottom  skills-set"  style={{width:`${widths.firstTtitle}%`}}>{title}</h2>
                </ScrollTrigger>
                <div className=" row " >
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
            )
           
        }
    }
    const programnigSkills = new Skill ("PROGRAMING SKILLS",widths.firstTtitle)
        console.log(programnigSkills)
    console.log(widths)
    return(
        <ScrollContainer>
        <section className="h-100">
            {programnigSkills.renderContent(data)}
            <div onEnter={()=>console.log("sas")} className="container">
                <ScrollTrigger onEnter={()=>console.dir(event.target)}><h2 onClick={()=>console.dir(event.target)} className="border-bottom w-25 text-center" style={{backgroundColor:"white"}}>ENGINERING SKILLS</h2></ScrollTrigger>
                <div className=" row">
                    {data.engineeringSkills.map((skill)=>{
                        return(
                            <div onClick={()=>console.dir(event.target)} className="  col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="logo " src={skill.logo}></img>
                                <h4>
                                {skill.skill}
                                </h4>
                                <ScrollTrigger onEnter={()=>changeWidth(skill,"enginering")} style={{width:"100%"}}>
                                    <div className="continer-skill">
                                        <div  style={{width:`${secondWidth[data.engineeringSkills.indexOf(skill)]}%`}} className="skill-level"></div>
                                        {skill.competence}%
                                    </div>
                                </ScrollTrigger>
                                
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