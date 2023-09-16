import React, { useEffect, useRef } from "react";

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
    let array = [null,null,null,0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
  
    class List{
        static count = -1
        constructor (){
            this.index = List.count++
            this.list=[]
            this.start = Math.floor(Math.random()*51)
            this.opacity=1
            this.createList= ()=>{
                for(let i= 0; i<50;i++){
                  
                    this.list[i]=Math.floor(Math.random()*10)
               
                }
            }
            this.renderList = ()=>{
                let i=-1
              return (
                
                this.list.map((number)=>{
                i++
                  
                    if(i>this.start+5 || i<this.start-5){
                        return(
                            <span style={{opacity:"0"}}>{number}</span>
                        )
                    }
                    else{
                        return(
                            <span style={{opacity:`${this.opacity}`}}>{number}</span>
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
                <div className="numbers" onMouseEnter={()=>list.changeOpacity(event.target)} >
                    {list.renderList()}
                </div>)
                
            })
        )
       
    }
    console.log(numbers)
    return(
        <div   className="lists">
            {renderCntent()}
        </div>
    )
}