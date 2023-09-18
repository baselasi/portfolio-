import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sum.css"
import data from "../data";
import "./background.css"

export default function AboutMe(){
    const [changee,setChange] = useState(true)
   const [changeOpacity,setOpacity] = useState(1)
    const  change = useCallback(()=>{
        setChange((prev)=>!prev)
    },[])
    function bringback(){
        setChange(true)
    }
    let numbers = []
    class List{
        static count = -1
        constructor (){
            this.index = List.count++
            this.list=[]
            this.start = Math.floor(Math.random()*51)
            this.opacity=1
            this.createList= ()=>{
                for(let i= 0; i<window.innerHeight/16;i++){
                    this.list[i]=Math.floor(Math.random()*2)
                }
            }
            this.renderList = ()=>{
                let i=-1
                    return (
                        
                        this.list.map((number)=>{
                            i++
                            if(i>this.start){
                                return(
                                    <span style={{opacity: changeOpacity %2==0 ? "0" : "1"}} >{number}</span>
                                )
                            }
                            else if(0<i<this.start){
                                return(
                                    <span style={{opacity: changeOpacity %2==0? "1" : "0"}} >{number}</span>
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
    for(let i=0;i<window.innerWidth/16;i++){
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
    <>
        <div className="empty-div" style={{height:"100%",width:"25%",left:"0%"}} onMouseMove={change}></div>
        <div className="empty-div" style={{height:"100%",width:"41.66%",left:"25%"}}onMouseEnter={bringback}></div>
        <div className="empty-div" style={{height:"100%",width:"29.16%",left:"66.66%"}} onMouseMove={change}></div>

        <section  className=" section  row align-content-center sticky" style={{zIndex:"-1",color:"rgb(15, 98, 146)"}} >
            <div   className="lists" style={{backgroundColor:"black"}}>
                    {renderCntent()}
            </div>
            <div className="first-continer col-sm-5 intro " >
                <h1 className="h2 h-25 flex-box-column" style={{color:changee ? "rgba(239, 255, 251,0.70)":"white",fontSize:changee ? "34px": "25px"}}><span className=" ">{changee ? "Hello I'm ": "01101000  01101100 01101111"}<br></br><span>{changee ? "Bassel Assi ": "01101000  01101100 01101111"}</span></span><br></br> {changee ? "Frontend Devoloper / Process And Material Engineer ": "01101000  01101100 01101111 01101000 01101111"}</h1>
                <button className="btn " >HIT ME UP</button>
            </div>
                
        </section>
    </>
    
    )
}