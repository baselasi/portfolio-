import React, { useEffect } from "react";

import "./background.css"
export default function  BACKGROUND(){
    useEffect(()=>{
        function change(){
        console.log(window.innerWidth)
        }
        window.addEventListener('resize',change);
    },[])
    let x=true
    let numbers = []
  
    for(let i= 0;i<70;i++){
        let numbersList = []
       f(numbersList)
        numbers.push(numbersList)
    }
    function f(n){
        for (let j=0;j<50;j++){
            n.push(Math.floor(Math.random()*10))
        }
    }
    console.log(numbers)

    return(
        <div  className="lists">
            {numbers.map((list)=>{
                return (
                <div className="numbers">
                    {list.map((item)=>{
                       return(
                        <span>{item}</span>
                       ) 
                })}
                </div>)
                
            })}
        </div>
    )
}