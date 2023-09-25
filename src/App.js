import './App.css';
import AboutMe from './components/background/background';
import About from './components/aboutMe/about';
import Navbar from './components/navbar/nabar';
import Skills from './components/skills/skills';
import ContactMe from './components/contact/contactMe';
import { useEffect, useMemo, useRef, useState } from 'react';
import Footer from './components/footer/footer';
import "../src/components/background/background.css"
function App() {
  const [showButton,setButton] = useState(true)
  const [scrollIntoContact,setContact] = useState(false)
  const [navigateTo,setNavigate] = useState("")
  const [destination,setDestination] = useState()
  const aboutMe = useRef(null)
  const skills =  useRef(null)
  const contact =  useRef(null)
  useEffect(()=>{
    switch (navigateTo){
      case "aboutME":
        setDestination (aboutMe);
        console.log(destination)
        break
      case "skills":
        setDestination(skills);
        console.log(destination)
        break
      case "contact":
        setDestination(contact)
        console.log(destination)
      break
      default:
      console.log("err")
    }
  },[navigateTo])
   if(destination !==undefined){
      window.scrollTo({
        top: destination.current.offsetTop
      })
      setDestination(undefined)
    }
  return (
    <>
      <AboutMe 
        showButton={showButton}
        scroll={setContact}
      />
      <Navbar 
        setButtonOpacity={setButton}
        navioageteTo = {setNavigate}
      />
      <div className='main' >
        <div className='empty-div' style={{top:"99%",width:"10%",position:"absolute",left:"90%"}}></div>
        <div className='empty-div' style={{top:"99%",width:"10%",position:"absolute"}}></div>
        <section ref={aboutMe}><About /></section>
        <section ref={skills}> <Skills/></section>
        <section ref={contact}><ContactMe
        scrollintoView={scrollIntoContact}
        scroll={setContact}
        /></section>
       <Footer/>      
      </div>
    </>
  );
}
export default App;
