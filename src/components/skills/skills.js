import React, { useEffect, useRef, useState } from "react";
import data from "../../data";
import "./skill.css"
import "../style.css"
export default function Skills(){
    const [isInSite, setIsInsite] = useState([false,false])
    const [sectionEntrie,setSectionEntrie]  = useState(false)
    useEffect(()=>{
        let newarr = []
        newarr=isInSite
            const observeSection =new IntersectionObserver ((entrie)=>{setTimeout (()=>{
                setSectionEntrie(entrie[0].isIntersecting)
            },2000)})
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=>{
                    let isShowing = !entrie.isIntersecting
                    entrie.target.classList.toggle("show",entrie.isIntersecting)
                    entrie.target.classList.toggle("hide",isShowing)
            })
        })
        const observeCotiner = new IntersectionObserver((entries)=>{
            entries.forEach((entrie)=>{
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
        observeSection.observe(section.current)
    },[])
    let section = useRef()
    let headers = []
    let skillLevels = []
    const binaryLetter="01100101"
    class Skill {
        static index = -1
        static count = -1
        constructor (title, width){
            this.index = ++Skill.index
            this.titile = title
            this.titleWidth = width
            this.renderContent = (data)=>{
                return(
                    <div className="container flex-column align-content-around"  style={{fontFamily:!sectionEntrie ? 'Binary X CHR BRK':"Georgia, 'Times New Roman', Times, serif"}}>
                        <h2 ref={(el)=>{headers[this.index]=el}} className="border-bottom h-25 skill-title hide" style={{color:!sectionEntrie? "black" :"green",height:"30px"}} >
                            {!sectionEntrie? binaryLetter : title}
                        </h2>
                        <div accessKey={this.index} ref={(el)=>skillLevels[this.index]=el} className="row">
                            {data.map((skill)=>{
                            Skill.count++
                            return(
                                <div className="col-md-4 skill_continer"  style={{color: sectionEntrie? "black" :"green"}} >
                                    <img className="logo " style={{width:`${skill.skill=="EXPRESSJS"?"90px":""}`}} src={skill.logo}></img>
                                    <h4 className="sticky">
                                    {!sectionEntrie? binaryLetter : skill.skill}
                                    </h4>
                                    {skill.competence !==undefined?
                                        <div    className="continer-skill" style={{opacity: isInSite[this.index] ? `1` : "0"}}>
                                            <div  style={{width: isInSite[this.index] ? `${skill.competence}% ` : "0%"}} className="skill-level" ></div>
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
    const programnigSkills = new Skill ("PROGRAMING SKILLS")
    const engineeringSkills = new Skill ("ENGINERING SKILLS")
    const softSkills = new Skill ("SOFT SKILLS")
    return(
        <section ref={section} className=" flex justify-content-between align-content-between marging-padding border-bottom border-5 border-primary">
            {programnigSkills.renderContent(data.programnigSkills)}
            {engineeringSkills.renderContent(data.engineeringSkills)}
            {softSkills.renderContent(data.softSkills)}
        </section>
    )
}