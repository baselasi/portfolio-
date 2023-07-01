import { upload } from "@testing-library/user-event/dist/upload";
import axios, { Axios } from "axios";
import React, { useState } from "react";


export default  function CreateResume(){
    const [userData,setUserData]=useState({})
    const [personaleInfo,setpersonaleInfo] = useState ({})
    const [profile,setProfile] = useState('')
    const [studies , setSduies] = useState([])
    const [exprience , setExprience] = useState({})
    const [skilLs,setSkiles] = useState([])
    const [imgUrl,setImgUrl] = useState('')
    const [experinecesNumber,setExprienceNumber]=useState(1)
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
    function renderExpriencesInput(){
        const input=[]
        for(let i=0;i<=experinecesNumber;i++){
            return(
                input.push(
                    <div>
                        <input type="text" name=" postion" onChange={ (event)=>inputExprince(event.target,i)}/>
                        <input type="text" name="company" onChange={ (event)=>inputExprince(event.target,i)}/>
                        <input type="text" name="start" onChange={ (event)=>inputExprince(event.target,i)}/>
                        <input type="text" name="end" onChange={ (event)=>inputExprince(event.target,i)}/>
                    </div>
                
                )
            )
        }
    }
    function inputExprince(e,i){
        setExprience(
            ...exprience,
           [e.name], e.value
            )
    }
    function renderExpriences(){
        const expriences=[]
        for(let i=0 ; i<=experinecesNumber; i++){
            return(
                expriences.push(
                    <div className="col-12 row">
                        <div className="col-md-8">
                            <h4>{exprience.degree}</h4><h6>{exprience.schoole}</h6>
                        </div>
                        <div className="col-md-4">
                            <span>{exprience.start}</span>-<span>{exprience.end}</span>
                        </div>
                    </div>
                )
            )
        }
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
                {
               
                }
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
                    {renderExpriences}
               </div>
            </div>
        </div>
        
    )

}