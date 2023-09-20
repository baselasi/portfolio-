import './App.css';
import AboutMe from './components/aboutMe';
import About from './components/about';
import Navbar from './components/nabar';
import Skills from './components/skills';
import ContactMe from './components/contactMe';
import { useState } from 'react';
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
      <About/>
      <Skills/>
      <ContactMe/>
    </>
    
      
    
  );
}

export default App;
