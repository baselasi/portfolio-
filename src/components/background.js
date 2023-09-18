import React, { useCallback, useEffect, useRef, useState } from "react";
import useInterval from '@use-it/interval'

import "./background.css"
export default function  BACKGROUND(){
    const [changee,setChange] = useState(true)
   const [changeOpacity,setOpacity] = useState(1)
    const  change = useCallback(()=>{
        setChange(prev=>!prev)
    },[])
    useEffect(()=>{
       
    },[changee])
   /*useInterval(()=>{
    setOpacity((prev)=>prev++)
},(1000))*/
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
            this.changeOpacity = ()=>{
                useInterval(()=>{
                    console.log("w")
                    if(this.start<50){
                        this.start++
                    }
                    else if(this.start===49){
                        this.start=0
                    }
                },(1000))
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
                <div className="numbers" onMouseEnter={change}  >
                    {list.renderList()}
                </div>)
                
            })
        )
    }
    return(
        <div   className="lists sticky " style={{backgroundColor:"black"}} >
            {renderCntent()}
        </div>
    )
}