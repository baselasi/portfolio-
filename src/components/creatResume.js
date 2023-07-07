import { upload } from "@testing-library/user-event/dist/upload";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
export default  function CreateResume(){
    const [personaleInfo,setpersonaleInfo] = useState ({})
    const [profile,setProfile] = useState('')
    const [studies , setSduies] = useState([{}])
    const [expriences , setExpriences] = useState([{}])
    const [skills,setSkiles] = useState([{}])
    const [skill,setskill] = useState({})
    const [skillsNumber,setSkillsNumber] = useState(1) 
    const [imgUrl,setImgUrl] = useState('')
    const [experinecesNumber,setExpriencesNumber]=useState(1)
    const [studiesNumber,setstudiesNumber] = useState(1)
    const [exprience,setExprience] =useState({})
    const [studie,setStudie]  =useState({})
    const [languages,setLanguages] = useState([{}])
    const [language,setLanguage] = useState({})
    const [languagesNumber,setLangugaesNumber] = useState(1) 
    function upload(files){
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
    function inputProfile(e){
        setProfile(e.value)
    }
    function renderExpriencesInput(){
        const input=[]
        for(let i=0;i<experinecesNumber;i++){
               input.push(
                    <div>
                        <input type="text" name="postion" onChange={ (event)=>inputdata(event.target,i,setExprience)}/>
                        <input type="text" name="company" onChange={ (event)=>inputdata(event.target,i,setExprience)}/>
                        <input type="text" name="start" onChange={ (event)=>inputdata(event.target,i,setExprience)}/>
                        <input type="text" name="end" onChange={ (event)=>inputdata(event.target,i,setExprience)}/>
                        <button onClick={()=>submite(i,setExpriences,expriences,exprience)}>DONE</button>
                    </div>
               )
           }
        return input
    }
    function renderStudiesInput(){
        const input=[]
        for(let i=0;i<studiesNumber;i++){
               input.push(
                    <div className="form-group">
                        <label for='degree' className="form-label col-6" >Degree</label>
                        <input type="text" name="degree" className="form-control"  onChange={ (event)=>inputdata(event.target,i,setStudie)}/>
                        <label for='schoole' className="form-label col-6">Schoole</label>
                        <input type="text" name="schoole" className="form-control" onChange={ (event)=>inputdata(event.target,i,setStudie)}/>
                        <label for='start' className="form-label col-6">Start Date</label>
                        <input type="text" name="start" className="form-control" onChange={ (event)=>inputdata(event.target,i,setStudie)}/>
                        <label for='end' className="form-label col-6">End Date</label>
                        <input type="text" name="end" className="form-control" onChange={ (event)=>inputdata(event.target,i,setStudie)}/>
                        <button className="btn-primary" onClick={()=>{submite(i,setSduies,studies,studie);input.splice(i,1,0);console.log(input[i])}}>DONE</button>
                        
                    </div>
               )
           }
           console.log(input)
        return input
    }
    function renderSkillsInput(){
        const input=[]
        for(let i=0;i<skillsNumber;i++){
               input.push(
                    <div>
                        <input type="text" name="skill" onChange={ (event)=>inputdata(event.target,i,setskill)}/>
                        <input type="text" name="level" onChange={ (event)=>inputdata(event.target,i,setskill)}/>
                        <button onClick={()=>submite(i,setSkiles,skills,skill)}>DONE</button>
                    </div>
               )
           }
        return input
    }
    function renderlanguagesInput(){
        const input=[]
        for(let i=0;i<languagesNumber;i++){
               input.push(
                    <div>
                        <input type="text" name="language" onChange={ (event)=>inputdata(event.target,i,setLanguage)}/>
                        <input type="text" name="level" onChange={ (event)=>inputdata(event.target,i,setLanguage)}/>
                        <button onClick={()=>submite(i,setLanguages,languages,language)}>DONE</button>
                    </div>
               )
           }
        return input
    }
    function submite(i,setstate,FirstState,SecondState){
        let array = FirstState.slice()
        array.splice(i,1,SecondState)
        setstate(array)
    }
    function inputdata(e,i,setState){
        setState((obj)=>{
            return {...obj,[e.name]:e.value}
        })
    }
    function AddMore(setFirstState,SetSecondState,SetThirdState){
        setFirstState((prev)=>prev+1)
        SetSecondState((prev)=>[...prev,{}])
        SetThirdState({})
    }
    function renderStudies(){
        const array=[]
            for(let i=0 ; i<studiesNumber; i++){
                let obj = studies[i]
                array.push(
                <div className="col-12 row">
                    <div className="col-md-8">
                        <h4>{obj.degree}</h4><h6>{obj.schoole}</h6>
                    </div>
                    <div className="col-md-4">
                        <span>{obj.start}</span>-<span>{obj.end}</span>
                    </div>
                </div>
                )
        }
        return array
    }
    function renderExpriences(){
            const array=[]
            for(let i=0 ; i<experinecesNumber; i++){
                let exprienc = expriences[i]
                array.push(
                    <div className="col-12 row">
                        <div className="col-md-8">
                            <h4>{exprienc.postion  }</h4><h6>{expriences[i].company }</h6>
                        </div>
                        <div className="col-md-4">
                            <span>{expriences[i].start}</span>-<span>{expriences[i].end }</span>
                        </div>
                    </div>
                )
        }
        return array
    }
    function renderSkills(){
        const array = []
        for( let i=0 ; i<skillsNumber; i++){
            array.push(
                <div>
                    <div>{skills[i].skill}</div>
                    <div className="continer-skill"><div style={{width:`${skills[i].level}%`}} className="skill-level"></div></div>
                </div>
            )
        }
        return array
    }
    function renderlanguages(){
        const array = []
        for( let i=0 ; i<languagesNumber; i++){
            array.push(
                <div>
                    <div>{languages[i].language}</div>
                    <div className="continer-skill"><div style={{width:`${languages[i].level}%`}} className="skill-level"></div></div>
                </div>
            )
        }
        return array
    }
    return(
        <div >
            <div className="container row ">
                <div className="col-md-12 row">
                    <div className="col-md-4">
                        <label for='photo' className="form-label">Foto</label>
                        <input type="file" name='photo'  onChange={()=>upload(event.target.files)}/>
                    </div>
                    <div className="col-md-8">
                        <label for='name' className="form-label">Name</label>
                        <input name="name" className="form-control" type="text" onChange={ (event)=>inputPersonaleInfo(event.target)}/>
                    </div>
                </div>
                <div className="row col-md-12 ">
                    <label for='email' className="form-label col-6">Email</label>
                    <input name="email" className="form-control col-6" type="email" onChange={ (event)=>inputPersonaleInfo(event.target)}/>
                    <label for='cellphone' className="form-label">Phone Number</label>
                    <input name="cellphone" className="form-control" type="text" onChange={ (event)=>inputPersonaleInfo(event.target)}/>
                    <label for='address' className="form-label">Address</label>
                    <input name="address" className="form-control" type="text" onChange={ (event)=>inputPersonaleInfo(event.target)}/>
                </div>
                
            </div>

            <div className="container row">
                <label for='profile' className="form-label col-md-6">Profile</label>
                <textarea className="form-control-lg  col-md-12" name="profile" onChange={()=>inputProfile(event.target)}></textarea>
            </div>
            <div>
                {renderStudiesInput()}
                <button className="btn-bg-primary" onClick={()=>AddMore( setstudiesNumber,setSduies, setStudie)} >ADD MORE</button>
            </div>
            <div>
                {renderExpriencesInput()}
                <button className="btn-bg-primary" onClick={()=>AddMore( setExpriencesNumber,setExpriences, setExprience)} >ADD MORE</button>
            </div>
            <div>
                {renderSkillsInput()}
                <button className="btn-bg-primary" onClick={()=>AddMore(setSkillsNumber,setSkiles, setskill)} >ADD MORE</button>
            </div>
            <div>
                {renderlanguagesInput()}
                <button className="btn-bg-primary" onClick={()=>AddMore(setLangugaesNumber,setLanguages, setLanguage)} >ADD MORE</button>
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
                
               <div className="mb-3 mt-3 container col-12 row">
                    <h2 className="col-12">STUDIES</h2>
                    {renderStudies()}
               </div>
               <div className="mb-3 mt-3 container col-12 row">
                    <h2 className="col-12">EXPERIENCE</h2>
                    {renderExpriences()}
               </div>
               </div>

            <div className="container mt-3 row col-md-4 mb-3">
               <div className="col-12 row">
                    <h2>SKILLS</h2>
                    {renderSkills()}
                </div>
                <div className="col-12 row">
                    <h2>LANGUAGES</h2>
                    {renderlanguages()}
                </div>
            </div>
            </div>
            
        </div>
        
    )

}