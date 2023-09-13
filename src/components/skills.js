import React, { useEffect, useRef, useState } from "react";
import data from "../data";
import "./skill.css"
export default function Skills(){
    const [isInSite, setIsInsite] = useState(["w",false])

    const [widths,setWidths] = useState({
        firstTtitle: 25,
        secondTitle: 0,
        thierdTitle: 0
        })
    const [skillsEntries,setSkillsEntries] = useState([])
    console.log("isinsite",isInSite)
    
    useEffect(()=>{
        newarr=isInSite
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=>{
                    entrie.target.classList.toggle("hide",entrie.isIntersecting)
            })
        })
        const observeCotiner = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=>{
                entrie.target.classList.toggle("continer-skill",entrie.isIntersecting)
                let i = -1
                newarr.map((el)=>{
                    i++
                    if(entrie.target.accessKey == i ){
                        return entrie.isIntersecting
                    }
                   else{
                    return el
                   }
                })
                console.log("newarr",newarr)
            })
        })
        headers.forEach((header)=> observer.observe(header))
        skillLevels.forEach((skill)=>observeCotiner.observe(skill))
    },[])
    let newarr = []

    let headers = []
    let skillLevels = []
    class Skill {
        static index = -1
        static count = -1
        constructor (title, width){
            this.index = ++Skill.index
            this.titile = title
            this.titleWidth = width
            this.renderContent = (data)=>{
                return(
                    <div className=" container flex-column align-content-around">
                   
                        <h2 ref={(el)=>{headers[this.index]=el}} onScroll={()=>this.changeTitleWidth(this.titleWidth)} className="border-bottom h-25 skills-set"  >{title}</h2>
                    
                        <div  className=" row  " >
                            {data.map((skill)=>{
                            Skill.count++
                            return(
                                <div className="  col-md-4 skill_continer " >
                                    <img className="logo " style={{animationDelay:`${data.indexOf(skill) +5}s`}} src={skill.logo}></img>
                                    <h4 >
                                    {skill.skill}
                                    </h4>
                                    {skill.competence !==undefined?
                                        <div accessKey={this.index}  ref={(el)=>skillLevels[this.index]=el} className="show" >
                                            <div key={data.indexOf(skill)} style={{width:`${skill.competence}%`}}  ></div>
                                            {skill.competence}%
                                        </div>
                                    : null}
                                </div>
                            )
                        })}
                        </div>
                        {isInSite[0]}
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