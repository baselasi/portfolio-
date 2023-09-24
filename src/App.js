import './App.css';
import AboutMe from './components/background/background';
import About from './components/aboutMe/about';
import Navbar from './components/navbar/nabar';
import Skills from './components/skills/skills';
import ContactMe from './components/contact/contactMe';
import { useState } from 'react';
import Footer from './components/footer/footer';
function App() {
  const [showButton,setButton] = useState(true)
  const [showModal,setModal] = useState(false)
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
        <ContactMe/>
        <Footer/>      

      </div>
    </>
  );
}
export default App;
