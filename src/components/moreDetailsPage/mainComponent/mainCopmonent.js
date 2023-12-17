import React from "react";
import LeftSidbar from "../sideWaySideBar/sideWayNavBar";
import Eduction from "../eduction/eduction";
export default function MoreDetailsMain(){
    return(
       <main style={{backgroundColor:"black",color:"green",fontFamily:"'SF Pixelate', sans-serif"}}  className="row">
        {/* <div>COMING SOON</div> */}
        <LeftSidbar/>
        <Eduction/>
       </main>
        
    )
}