import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sum.css"
import data from "../data";
import "./background.css"

export default function AboutMe(){
    const [changee,setChange] = useState(true)
    const  change = useCallback(()=>{
        setChange(prev=>!prev)
    },[])
    useEffect(()=>{
    change()
    window.addEventListener('resize',change);
    },[change])
    
    let numbers = []
    class List{
        static count = -1
        constructor (){
            this.index = List.count++
            this.list=[]
            this.start = Math.floor(Math.random()*51)
            this.opacity=1
            this.createList= ()=>{
                for(let i= 0; i<50;i++){
                    this.list[i]=Math.floor(Math.random()*2)
                }
            }
            this.renderList = ()=>{
                let i=-1
              return (
                this.list.map((number)=>{
                    i++
                    if(i>this.start+5 || i<this.start-5){
                        return(
                            <span style={{opacity:"0"}} >{number}</span>
                        )
                    }
                    else{
                        return(
                            <span style={{opacity:`${1}`}} >{number}</span>
                        )
                    }
                   })
              )
            }
            this.changeOpacity = (n)=>{
                console.log(n)
                if(this.start<50){
                    this.start++
                   }
                   else if(this.start===49){
                    this.start=0
                   }
                   this.renderList()
               }
        }
    }
    for(let i=0;i<70;i++){
        let x
        x=new List
        x.createList()
        numbers.push(x)
    }
    function renderCntent(){
        return(
            numbers.map((list)=>{
                return (
                <div className="numbers" onMouseEnter={change} >
                    {list.renderList()}
                </div>)
                
            })
        )
    }
    /*<div   className="lists" style={{zIndex:"-1",backgroundColor:"black"}}>
                {renderCntent()}
            </div>*/
    return(
    
    <section  className=" section  row align-content-center sticky" style={{zIndex:"-1"}}>
            
            <div className="first-continer col-sm-12 " style={{backgroundColor:"black"}}>
                <div className="h2 ">HI, I'M <span className=" danger">BASSEl ASSI</span>, FRONT-END DEVOLEOPER / PROCESS AND MATERIAL ENGINEER</div>
                <div className="h4 container">{data.aboutMe.profile}</div>
            </div>
            
        </section>
    )
}