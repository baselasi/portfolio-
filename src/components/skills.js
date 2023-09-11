import React, { useEffect, useRef, useState } from "react";
import data from "../data";
import "./skill.css"
export default function Skills(){
    
    const [widths,setWidths] = useState({
        firstTtitle: 25,
        secondTitle: 0,
        thierdTitle: 0
        })
    const [isInSite, setIsInsite] = useState([false,false,false])
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=>{
                    entrie.target.classList.toggle("hide",entrie.isIntersecting)
                    console.log(entrie)
                    console.log(isInSite)
            })
            
        })
        const observeCotiner = new IntersectionObserver((entries)=>
            entries.forEach((entrie)=>{
                let newarr = isInSite.map((el)=>{
                    if(isInSite.indexOf(el)=== entries.indexOf(entrie)){
                      return entrie.isIntersecting
                    }
                })
                console.log(newarr)
                setIsInsite(newarr)
            })
        )
        headers.forEach((header)=> observer.observe(header))
        console.log(skillLevels)
        skillLevels.forEach((skill)=>observeCotiner.observe(skill))
       // console.log(headers)
        //console.log(div.current)
       
    },[])
    let headers = []
    let skillLevels = []
    class Skill {
        static count = -1
        constructor (title, width){
            this.index = ++Skill.count
            this.titile = title
            this.titleWidth = width
            this.changeTitleWidth = (x)=>{
                debugger
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
                   
                        <h2 ref={(el)=>{headers[this.index]=el}} onScroll={()=>this.changeTitleWidth(this.titleWidth)} className="border-bottom h-25 skills-set"  >{title}</h2>
                    
                        <div  className=" row  " >
                            {data.map((skill)=>{
                            return(
                                <div className="  col-md-4 skill_continer " ref={(el)=>{skillLevels[this.index]=el}}>
                                    <img className="logo " style={{animationDelay:`${data.indexOf(skill) +5}s`}} src={skill.logo}></img>
                                    <h4 >
                                    {skill.skill}
                                    </h4>
                                    {skill.competence !==undefined?
                                        <div  className="continer-skill">
                                            <div  style={{width:`${skill.competence}%`}} className="skill-level" ></div>
                                            {skill.competence}%
                                        </div>
                                    : null}
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    
                
                )
            }
        }
    }
    const programnigSkills = new Skill ("PROGRAMING SKILLS",widths.firstTtitle,1)
    const engineeringSkills = new Skill ("ENGINERING SKILLS",widths.secondTitle,2)
    const softSkills = new Skill ("SOFT SKILLS",1,3)
    return(
        <section className=" flex justify-content-between align-content-between">
            {programnigSkills.renderContent(data.programnigSkills)}
            {engineeringSkills.renderContent(data.engineeringSkills)}
            {softSkills.renderContent(data.softSkills)}
        </section>
    )
}