import React from "react";
import data from "../data";
import "./skill.css"

export default function Skills(){
    return(
        <section className="h-100">
            <div className=" container">
                <h2>PROGRAMING SKILLS</h2>
                <div className=" row">
                    {data.programnigSkills.map((skill)=>{
                        return(
                            <div className="  col-md-3">
                                <div className="logo  " style={{backgroundImage: `url(${skill.logo})` }}></div>
                                <h4>
                                {skill.skill}
                                </h4>
                                <div className="continer-skill"><div  style={{width:`${skill.competense}%`}} className="skill-level"></div>{skill.competense}%</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="container">
                <h2>ENGINERING SKILLS</h2>
                <div className=" row">
                    {data.engineeringSkills.map((skill)=>{
                        return(
                            <div className="  col-md-3">
                                <div className="logo  " style={{backgroundImage: `url(${skill.logo})` }}></div>
                                <h4>
                                {skill.skill}
                                </h4>
                                <div className="continer-skill"><div  style={{width:`${skill.competence}%`}} className="skill-level"></div>{skill.competence}%</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        
    )
}