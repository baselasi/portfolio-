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
                    break;
                case 100:
                    widths.firstTtitle = 25
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
                <div className=" row  " >
                    {data.map((skill)=>{
                    return(
                        <div className="  col-md-4 skill_continer ">
                            <img className="logo " style={{animationDelay:`${data.indexOf(skill) +5}s`}} src={skill.logo}></img>
                            <h4>
                            {skill.skill}
                            </h4>
                            {skill.competence !==undefined?
                            <ScrollTrigger onEnter={()=>changeWidth(skill,"programing")} style={{width:"100%"}}>
                                <div className="continer-skill">
                                    <div  style={{width:`${firstWidth[data.indexOf(skill)]}%`}} className="skill-level"></div>
                                    {skill.competence}%
                                </div>
                            </ScrollTrigger>
                            : null}
                        </div>
                    )
                })}
                </div>
                </div>
            )
        }
    }
    const programnigSkills = new Skill ("PROGRAMING SKILLS",widths.firstTtitle)
    const engineeringSkills = new Skill ("ENGINERING SKILLS",widths.secondTitle)
    const softSkills = new Skill ("SOFT SKILLS",1)
    return(
        <section className=" flex justify-content-between align-content-between">
            {programnigSkills.renderContent(data.programnigSkills)}
            {engineeringSkills.renderContent(data.engineeringSkills)}
            {softSkills.renderContent(data.softSkills)}
        </section>
    )
}