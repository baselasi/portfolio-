
import data from "../../data";

import "./skill.css"
import "../style.css"
import { useEffect, useRef, useState } from "react";

const Skills = () => {

    const [isInView, setIsInView] = useState(false)

    const skillRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsInView(entry.isIntersecting);
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
        });
        if (skillRef) {
            observer.observe(skillRef.current)
        }

        return () => {
            observer.unobserve(skillRef.current)
        }
    }, [])


    return (
        <>
            <div className=" marging-padding  row "  >
                <div className="row col-12 " ref={skillRef}>
                    <h2 className="col-sm-4 text-highlight" style={{ fontSize: "45px" }}>
                        Skills
                    </h2>
                    <div className="col-sm-8" >
                        {data.programnigSkills.map((skill, i) => {
                            return (
                                <SkillCard skill={skill} isInView={isInView} key={i} />
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

const SkillCard = ({ skill, isInView }) => {



    return (

        <>
            <div className="mb-5">
                {/* <div className="p-2  d-inline-block glow-border"  >
                    <img className="logo " style={{ width: `${skill.skill == "EXPRESSJS" ? "10px" : "20px"}` }} src={skill.logo}></img>
                </div> */}
                <div className="text-color mb-1">
                    <span>{skill.skill.toUpperCase()}</span>
                    <span className="ms-2">{`${skill.competence}%`}</span>
                </div>
                <div className="continer-skill border" >
                    <div style={{ width: `${isInView ? `${skill.competence}%` : ""} ` }} className="skill-level  glow-border" ></div>
                </div>
            </div>
        </>
    )
}


export default Skills















