import React from "react";
import data from "../data";
import "./skill.css"

export default function Skills(){
    return(
        <section className="h-100">
            <div className=" container">
                <h2 className="border-bottom">PROGRAMING SKILLS</h2>
                <div className=" row">
                    {data.programnigSkills.map((skill)=>{
                        return(
                            <div className="  col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="logo " src={skill.logo}></img>
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
                <h2 className="border-bottom">ENGINERING SKILLS</h2>
                <div className=" row">
                    {data.engineeringSkills.map((skill)=>{
                        return(
                            <div className="  col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="logo " src={skill.logo}></img>
                                <h4>
                                {skill.skill}
                                </h4>
                                <div className="continer-skill"><div  style={{width:`${skill.competence}%`}} className="skill-level"></div>{skill.competence}%</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="container">
                <h2 className="border-bottom">SOFT SKILLS</h2>
                <div className=" row">
                    {data.softSkills.map((skill)=>{
                        return(
                            <div className="  col-md-4 d-flex flex-column justify-content-center align-items-center">
                                 <img className="logo " src={skill.logo}></img>
                                <h4>
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
        
    )
}