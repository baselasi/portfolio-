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
        let position = findTheELementPostion(aboutMe.current)
        window.scrollTo({
          top: position,
          behavior: "smooth"
        });
        break
      case "skills":
        // skills.current.scrollIntoView()
        let position1 = findTheELementPostion(skills.current)
        window.scrollTo({
          top: position1,
          behavior: "smooth"
        });
        break
      case "contact":
        // contact.current.scrollIntoView()
        let position2 = findTheELementPostion(contact.current)
        window.scrollTo({
          top: position2,
          behavior: "smooth"
        });
        break
      default:
    }
  }, [navigateTo])

  const scrollToContact = () => {
    contact.current.scrollIntoView()
  };

  function findTheELementPostion(element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const position = elementPosition - 20;
    return position
  }



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
