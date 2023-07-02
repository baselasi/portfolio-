import { upload } from "@testing-library/user-event/dist/upload";
import axios, { Axios } from "axios";
import React, { useState } from "react";


export default  function CreateResume(){
    const [userData,setUserData]=useState({})
    const [personaleInfo,setpersonaleInfo] = useState ({})
    const [profile,setProfile] = useState('')
    const [studies , setSduies] = useState([{}])
    const [expriences , setExpriences] = useState([{}])
    const [skilLs,setSkiles] = useState([])
    const [imgUrl,setImgUrl] = useState('')
    const [experinecesNumber,setExprienceNumber]=useState(1)
    const [studiesNumber,setstudiesNumber] = useState(1)
    const [exprience,setExprience] =useState({
        postion : '',
        company : '',
        start : '',
        end : ''
    })
    function upload(files){
        console.log(files)
        const formData = new FormData()
        formData.append("file",files[0])
        formData.append("upload_preset","a75fuphf")
        axios.post("https://api.cloudinary.com/v1_1/dbmxhuql7/image/upload",formData)
            .then((response)=>setImgUrl(response.data.url))
    }
    function inputPersonaleInfo(e){
        setpersonaleInfo({
            ...personaleInfo,
            [e.name]: e.value
        })
    }
    function AddMoreExpeiences(){
        setExprienceNumber((prev)=>prev+1)
    }
    function renderExpriencesInput(){
        const input=[]
        for(let i=0;i<experinecesNumber;i++){
               input.push(
                    <div>
                        <input type="text" name="postion" onChange={ (event)=>inputExprince(event.target,i)}/>
                        <input type="text" name="company" onChange={ (event)=>inputExprince(event.target,i)}/>
                        <input type="text" name="start" onChange={ (event)=>inputExprince(event.target,i)}/>
                        <input type="text" name="end" onChange={ (event)=>inputExprince(event.target,i)}/>
                    </div>
               )
           }
        return input
    }
    function renderStudiesInput(){
        const input=[]
        for(let i=0;i<studiesNumber;i++){
               input.push(
                    <div>
                        <input type="text" name="degree" onChange={ (event)=>inputStudies(event.target,i)}/>
                        <input type="text" name="schoole" onChange={ (event)=>inputStudies(event.target,i)}/>
                        <input type="text" name="start" onChange={ (event)=>inputStudies(event.target,i)}/>
                        <input type="text" name="end" onChange={ (event)=>inputStudies(event.target,i)}/>
                    </div>
               )
           }
        return input
    }
    function inputStudies(e,i){
        const newstate =  studies.map((obj)=>{
            if(studies.indexOf(obj)==i){
               return {...obj,[e.name]:e.value}
            }
        }
        )
       setSduies(newstate)
    }
    
       
    function inputExprince(e,i){
        if(i<=expriences.length){
            setExprience((obj)=>{
                return {...obj,[e.name]:e.value}
            })
            console.log(exprience)
           let array = expriences.slice()
           array.splice(i,1)
           let newarray= [...array.slice(0,i),exprience,...array.slice(i)]
           console.log(newarray)
           setExpriences(newarray)
           console.log(expriences)
        }
    }
    function renderStudies(){
        const studie=[]
            for(let i=0 ; i<studiesNumber; i++){
                let obj = studies[i]
               studie.push(
                    <div className="col-12 row">
                        <div className="col-md-8">
                            <h4>{obj.degree ? obj.degree : ''}</h4><h6>{obj.schoole}</h6>
                        </div>
                        <div className="col-md-4">
                            <span>{obj.start}</span>-<span>{obj.end}</span>
                        </div>
                    </div>
                )
            
        }
        return studie
        
    }
    function renderExpriences(){
            const array=[]
            for(let i=0 ; i<2; i++){
            let exprienc = expriences[i]

                if(exprience[i]!== undefined){
                    array.push(
                        <div className="col-12 row">
                            <div className="col-md-8">
                                <h4>{exprienc.postion !==undefined?  exprienc.postion: '' }</h4><h6>{exprienc.company ? exprienc.company : ''}</h6>
                            </div>
                            <div className="col-md-4">
                                <span>{exprienc.start ? exprienc.start :''}</span>-<span>{exprienc.end ? exprienc.end : ''}</span>
                            </div>
                        </div>
                    )
                }
              
            
        }
        return expriences
        
    }
    
    function inputProfile(e){
        setProfile(e.value)
    }
    return(
        <div>
            <div>
                <input type="file"
                    onChange={()=>upload(event.target.files)}
                />
                <input name="name" type="text" onChange={ (event)=>inputPersonaleInfo(event.target)}/>
                <input name="email" type="email" onChange={ (event)=>inputPersonaleInfo(event.target)}/>
                <input name="cellphone" type="text" onChange={ (event)=>inputPersonaleInfo(event.target)}/>
                <input name="address" type="text" onChange={ (event)=>inputPersonaleInfo(event.target)}/>
            </div>
            <div>
                <textarea onChange={()=>inputProfile(event.target)}></textarea>
            </div>
            <div>
                {renderExpriencesInput()}
                <button className="btn-bg-primary" onClick={AddMoreExpeiences} >ADD MORE</button>
            </div>
            <div>
                {renderStudiesInput()}
            </div>
            <div className="row h-25 bg-secondary text-light fst-italic">
                <img src={imgUrl} className="h-100 col-2 img-fluid rounded imge"></img>
                <div className="col-10 row">
                    <h1 className="col-12 ">{personaleInfo.name} {personaleInfo.surename}</h1>
                    <div className="row align-content-center">
                        <div className="col-4"><span>{personaleInfo.email}</span></div>
                        <div className="col-4"><span>{personaleInfo.cellphone}</span></div>
                        <div className="col-4"><span>{personaleInfo.address}</span></div>
                    </div>
                </div>
            </div>
            <div className="container row">
                <div className="container row col-md-8">
                    <div className="mb-3 mt-3 container col-12">
                        <h2>PROFILE</h2>
                        <p>{profile}</p>
                    </div>
                </div>
               <div className="mb-3 mt-3 container col-12 row">
                    <h2 className="col-12">EXPERIENCE</h2>
                    {renderExpriences()}
               </div>
               <div className="mb-3 mt-3 container col-12 row">
                    <h2 className="col-12">STUDIES</h2>
                    {renderStudies()}
               </div>
            </div>
        </div>
        
    )

}