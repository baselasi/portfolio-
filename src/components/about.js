import React from "react";
import data from "../data";


export default function About(){
    return(
        <section className="flex justify-content-center marging-padding border-bottom border-5 border-primary"   style={{backgroundColor:"rgb(248, 246, 244)",color:"rgb(20, 33, 61)",marginTop:"0"}}>
           <div className="row col-12">
           <h2 className="col-sm-3" style={{fontSize:"45px",color:"green"}}>WHO AM I?</h2>
            <div className="col-sm-9" >
                <p style={{fontSize:"30px",color:"rgb(102, 255, 0)"}}>
                    {data.profile}
                </p>
                <button className="col-3 btn "><a href="CVBassel-Assi.pdf" download="ASSI-BASSEL RESUME" style={{width:"100%"}}>DOWNLOAD RESUME </a></button>
            </div>
            
           </div>
            
        </section>
    )
}