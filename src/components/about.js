import React from "react";
import data from "../data";


export default function About(){
    return(
        <section className="row"  style={{backgroundColor:"rgb(255, 255, 255)",color:"rgb(20, 33, 61)"}}>
            <h2 className="col-sm-4">WHO <br></br>AM I?</h2>
            <div className="col-sm-8" >
                <p style={{fontSize:"30px"}}>
                    {data.profile}
                </p>
                <button><a href="CV Bassel-Assi.pdf" download="cv">download</a></button>
            </div>
            
        </section>
    )
}