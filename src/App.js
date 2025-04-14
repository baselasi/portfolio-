import './App.css';
import About from './components/aboutMe/about';
import Navbar from './components/navbar/nabar';
import { useEffect, useMemo, useRef, useState } from 'react';
import Footer from './components/footer/footer';
import MoreDetailsMain from './components/moreDetailsPage/mainComponent/mainCopmonent';
import "../src/components/background/background.css"
import Backround from './components/particlesBackround/Backround';
import IntroText from './components/particlesBackround/IntroText';
import ContactSection from './components/contact/contactMe';
import Skills from './components/skills/Skills.jsx';
function App() {
  const [navigateTo, setNavigate] = useState("")
  const aboutMe = useRef(null)
  const skills = useRef(null)
  const contact = useRef(null)

  useEffect(() => {
    switch (navigateTo) {
      case "aboutME":
        aboutMe.current.scrollIntoView()
        break
      case "skills":
        skills.current.scrollIntoView()
        break
      case "contact":
        contact.current.scrollIntoView()
        break
      default:
    }
  }, [navigateTo])

  const scrollToContact = () => {
    contact.current.scrollIntoView()
  };



  return (
    <>
      <Backround
      />
      <IntroText scrollToContactForm={scrollToContact} />
      <Navbar
        navioageteTo={setNavigate}
      />
      <main className='main' >
        <section ref={aboutMe}><About /></section>
        <section ref={skills}> <Skills /></section>
        <section ref={contact}><ContactSection />
        </section>
        <Footer />
      </main>
    </>
  );
}


export default App;
