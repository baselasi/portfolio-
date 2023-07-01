import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data";

import './resume.css'

export default function Resume(){

    const navigate = useNavigate()
    function changeRoute(){
        navigate('/createReume')
    }
    return(
        <div className="h-100">
            <div className="row h-25 bg-secondary text-light fst-italic">
                <img src="/imgs/foto.jpg" className="h-100 col-2 img-fluid rounded imge"></img>
                <div className="col-10 row">
                    <h1 className="col-12 ">{data.personaleInfo.name} {data.personaleInfo.surename}</h1>
                    <div className="row align-content-center">
                        <div className="col-4"><span>{data.personaleInfo.email}</span></div>
                        <div className="col-4"><span>{data.personaleInfo.cellphone}</span></div>
                        <div className="col-4"><span>{data.personaleInfo.address}</span></div>
                    </div>
                </div>
            </div>
            <div className="container row">
                <div className="container row col-md-8">
                    <div className="mb-3 mt-3 container col-12">
                        <h2>PROFILE</h2>
                        <p>{data.profile}</p>
                    </div>
                    <div className="mb-3 mt-3 container col-12 row">
                        <h2 className="col-12">STUDIES</h2>
                        {data.studies.map((el)=>
                            <div className="col-12 row">
                                <div className="col-md-8">
                                    <h4>{el.degree}</h4><h6>{el.schoole}</h6>
                                </div>
                                <div className="col-md-4">
                                    <span>{el.start}</span>-<span>{el.end}</span>
                                </div>
                            </div>
                        )}
                    </div>       
                    <div className="mb-3 mt-3 container col-12 row">
                            <h2 className="col-12">EXPERIENCE</h2>
                            {data.exprience.map((el)=>
                                <div className="col-12 row">
                                    <div className="col-md-8">
                                        <h4>{el.postion}</h4><h6>{el.company}</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <span>{el.start}</span>-<span>{el.end}</span>
                                    </div>
                                </div>
                            )}
                    </div>
                </div> 
                <div className="container mt-3 row col-md-4 mb-3">
                   <div className="col-12 row">
                        <h2>SKILLS</h2>
                        {data.skills.map((skill)=>
                        
                        <div>
                            <div>{skill.skill}</div>
                            <div className="continer-skill"><div style={{width:`${skill.competense}%`}} className="skill-level"></div></div>
                        </div>
                        )}
                    </div>
                    <div  className="col-12 row">
                        <h2>LANGUAGES</h2>
                        {data.languages.map((language)=>
                       <div>
                            <div>{language.language}</div>
                            <div className="continer-skill"><div style={{width:`${language.level}%`}} className="skill-level"></div></div>
                        </div>
                        )}
                    </div>
                </div>       
            </div>
            <button className="btn-btn-primary" onClick={changeRoute}>Create Your Resume</button>
        </div>
    )
}