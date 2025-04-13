import React, { useEffect, useRef, useState } from "react";
import data from "../../data";
import "../aboutMe/about.css"
export default function About() {
    const [sectionIntersction, setSectionIntersction] = useState(false)
    useEffect(() => {
        const observSection = new IntersectionObserver((entrie) => {
            setTimeout(() => {
                setSectionIntersction(entrie[0].isIntersecting)
            }, 500)
        })
        observSection.observe(section.current)
    }, [])
    let section = useRef()
    return (
        <div ref={section} className=" marging-padding  row " >
            <div className="row col-12 " >
                <h2 className="col-sm-4 text-highlight" style={{ fontSize: "45px" }}>
                    WHO AM I ?
                </h2>
                <div className="col-sm-8" >
                    <p className="h2 text-color" style={{ whiteSpace: "pre-line" }}>
                        {data.profile}
                    </p>
                    <a href="CVBassel-Assi.pdf" download="ASSI-BASSEL RESUME" className="col-12">
                        <button className="my-btn col-12 col-md-6 mt-3 ">DOWNLOAD RESUME</button>
                    </a>
                </div>
            </div>

        </div>
    )
}