import './App.css';
import AboutMe from './components/aboutMe';
import About from './components/about';
import Navbar from './components/nabar';
import Skills from './components/skills';
import ContactMe from './components/contactMe';
import { useState } from 'react';
import Projects from './components/projects';
function App() {
  const [showButton,setButton] = useState(true)
  const [showModal,setModal] = useState(false)
  console.log(showModal)
  function hideModal(){
    if(showModal){
    setModal(false)
    }
  }
  return (
    <>
      <AboutMe 
        showButton={showButton}
      />
      <Navbar 
        setButtonOpacity={setButton}
      />
      <div className='main' style={{backgroundColor:"black"}} onClick={()=>hideModal()}>
        <About/>
        <Skills/>
        <Projects
          setModal={setModal}
          modalState={showModal}
        />
        <ContactMe/>
      </div>
      
    </>
    
      
    
  );
}

export default App;
