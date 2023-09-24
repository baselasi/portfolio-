import React, { useEffect, useRef, useState } from "react";
import data from "../../data";
export default function About(){
    const [sectionIntersction,setSectionIntersction] = useState(false)
    useEffect(()=>{
        const observSection = new IntersectionObserver((entrie)=>{setTimeout (()=>{
            setSectionIntersction(entrie[0].isIntersecting)
        },500)})
        observSection.observe(section.current)
    },[])
    const binaryText="11001010 01101010 10110010 10001011 00101110"
    const binaryLetter="01100101"
    let section = useRef()
    return(
        <section ref={section} className=" marging-padding border-bottom border-5 border-primary" style={{marginTop:"0"}}>
            <div className="row col-12 " style={{color:"rgb(20, 33, 61)"}}>
            <h2 className="col-sm-4" style={{fontSize:"45px",color:sectionIntersction ?"green":"black"}}>
                { "WHO AM I ?" }
            </h2>
            <div className="col-sm-8" >
                <p style={{fontSize:"30px",color:  "black"}}>
                    {data.profile }
                </p>
                <button className="col-3 btn ">
                    <a href="CVBassel-Assi.pdf" download="ASSI-BASSEL RESUME" style={{width:"100%"}}>DOWNLOAD RESUME</a>
                </button>
            </div>
           </div>
        </section>
    )
}