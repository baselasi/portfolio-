import React, { useEffect, useRef, useState } from "react";
import data from "../../data";
import "../aboutMe/about.css"
export default function About(){
    const [sectionIntersction,setSectionIntersction] = useState(false)
    useEffect(()=>{
        const observSection = new IntersectionObserver((entrie)=>{setTimeout (()=>{
            setSectionIntersction(entrie[0].isIntersecting)
        },500)})
        observSection.observe(section.current)
    },[])
    let section = useRef()
    return(
        <div ref={section} className=" marging-padding border-bottom border-5 border-primary" style={{marginTop:"0"}}>
            <div className="row col-12 " style={{color:"rgb(20, 33, 61)"}}>
            <h2 className="col-sm-4" style={{fontSize:"45px",color:sectionIntersction ?"green":"black"}}>
                { "WHO AM I ?" }
            </h2>
            <div className="col-sm-8" >
                <p className="h2" style={{color:  "black"}}>
                    {data.profile }
                </p>
                
                    <a href="CVBassel-Assi.pdf" download="ASSI-BASSEL RESUME"><button className="col-3 btn download">DOWNLOAD RESUME</button></a>
                
            </div>
           </div>
           <div className='empty-div' style={{top:"99%",width:"10%",position:"absolute",left:"90%"}}></div>
        <div className='empty-div' style={{top:"99%",width:"10%",position:"absolute"}}></div>
        </div>
    )
}