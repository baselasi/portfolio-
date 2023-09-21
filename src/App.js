import './App.css';
import AboutMe from './components/aboutMe';
import About from './components/about';
import Navbar from './components/nabar';
import Skills from './components/skills';
import ContactMe from './components/contactMe';
import backround from './imgs/white-backround.jpg'
import { useState } from 'react';
import   Projects from './components/projects';
function App() {
  const [showButton,setButton] = useState(true)
  return (
    
    <>
      <AboutMe 
        showButton={showButton}
      />
      <Navbar 
        setButtonOpacity={setButton}
      />
      <div className='main' style={{backgroundImage:`${backround}`}}>
        <About/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      </div>
      
    </>
    
      
    
  );
}

export default App;
