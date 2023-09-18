import React from "react";
import data from "../data";


export default function About(){
    return(
        <section   style={{backgroundColor:"rgb(255, 255, 255)",color:"rgb(20, 33, 61)",height:"50vh"}}>
            <h2>ABOUT</h2>
            <p>
                {data.profile}
            </p>
        </section>
    )
}