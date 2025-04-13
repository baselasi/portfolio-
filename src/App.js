import './App.css';
import AboutMe from './components/background/background';
import About from './components/aboutMe/about';
import Navbar from './components/navbar/nabar';
import Skills from './components/skills/skills';
import ContactMe from './components/contact/contactMe';
import { useEffect, useMemo, useRef, useState } from 'react';
import Footer from './components/footer/footer';
import MoreDetailsMain from './components/moreDetailsPage/mainComponent/mainCopmonent';
import "../src/components/background/background.css"
import Backround from './components/particlesBackround/Backround';
import TypewriterText from './comon/TypewriterText ';
import IntroText from './components/particlesBackround/IntroText';
function App() {
  const [showButton, setButton] = useState(true)
  const [scrollIntoContact, setContact] = useState(false)
  const [navigateTo, setNavigate] = useState("")
  const [destination, setDestination] = useState()
  const [detailsIsOn, setDetailsIsOn] = useState(false)
  const aboutMe = useRef(null)
  const skills = useRef(null)
  const contact = useRef(null)
  useEffect(() => {
    switch (navigateTo) {
      case "aboutME":
        setDestination(aboutMe);
        break
      case "skills":
        setDestination(skills);
        break
      case "contact":
        setDestination(contact)
        break
      default:
    }

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideInLeft {
        from {
          transform: translateY(-100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [navigateTo])
  if (destination !== undefined) {
    window.scrollTo({
      top: destination.current.offsetTop
    })
    setDestination(undefined)
  }
  if (!detailsIsOn) {
    return (
      <>

        <Backround
        />
        <IntroText />
        <Navbar
          setButtonOpacity={setButton}
          navioageteTo={setNavigate}
        />
        <main className='main' >
          {/* <div className='empty-div' style={{ top: "99%", width: "10%", position: "absolute", left: "90%" }}></div>
          <div className='empty-div' style={{ top: "99%", width: "10%", position: "absolute" }}></div> */}
          <section ref={aboutMe}><About /></section>
          {/* <section ref={skills}> <Skills /></section> */}
          <section ref={contact}><ContactMe
            scrollintoView={scrollIntoContact}
            scroll={setContact}
          />
          </section>
          <Footer />
        </main>

      </>
    );
  }
  else {
    return (
      <>
        <MoreDetailsMain />
      </>
    )

  }

}
export default App;
