import React, { useEffect, useRef, useState } from "react";
import data from "../data";
import "./skill.css"
import"./resume.css"
import "./sum.css"

export default function Skills(){
    const [isInSite, setIsInsite] = useState(["w",false])
    const [widths,setWidths] = useState({
        firstTtitle: 25,
        secondTitle: 0,
        thierdTitle: 0
        })
    useEffect(()=>{
        newarr=isInSite
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=>{
                    let isShowing = !entrie.isIntersecting
                    entrie.target.classList.toggle("show",entrie.isIntersecting)
                    entrie.target.classList.toggle("hide",isShowing)
            })
        })
        const observeCotiner = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=>{
                entrie.target.classList.toggle("continer-skill",entrie.isIntersecting)
                let i = -1
                newarr = newarr.map((el)=>{
                    i++
                    if(entrie.target.accessKey == i ){
                        return entrie.isIntersecting
                    }
                   else{
                    return el
                   }
                })
                setIsInsite(newarr)
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
                    <div className=" container flex-column align-content-around" >
                        <h2 ref={(el)=>{headers[this.index]=el}} className="border-bottom h-25 skills-set hide" style={{}} >{title}</h2>
                        <div  className="row">
                            {data.map((skill)=>{
                            Skill.count++
                            return(
                                <div className="  col-md-4 skill_continer " >
                                    <img className="logo " style={{animationDelay:`${data.indexOf(skill) +5}s`}} src={skill.logo}></img>
                                    <h4 className="sticky">
                                    {skill.skill}
                                    </h4>
                                    {skill.competence !==undefined?
                                        <div accessKey={this.index}  ref={(el)=>skillLevels[this.index]=el} className="continer-skill" style={{opacity: isInSite[this.index] ? `1` : "0"}}>
                                            <div key={data.indexOf(skill)} style={{width: isInSite[this.index] ? `${skill.competence}% ` : "0%"}} className="skill-level" ></div>
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
        <section className=" flex justify-content-between align-content-between marging-padding border-bottom border-5 border-primary" style={{backgroundColor:"rgb(248, 246, 244)",color:"rgb(20, 33, 61)"}} >
            {programnigSkills.renderContent(data.programnigSkills)}
            {engineeringSkills.renderContent(data.engineeringSkills)}
            {softSkills.renderContent(data.softSkills)}
        </section>
    )
}