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
function App() {
  const [showButton, setButton] = useState(true)
  const [scrollIntoContact, setContact] = useState(false)
  const [navigateTo, setNavigate] = useState("")
  const [destination, setDestination] = useState()
  const [detailsIsOn, setDetailsIsOn] = useState(false)
  const aboutMe = useRef(null)
  const skills = useRef(null)
  const contact = useRef(null)
  const contactForm = useRef();

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




  }, [navigateTo])

  const scrollToContact = () => {
   
     contactForm.current.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' }) // Accessing the input inside MyInput
  };


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
        <IntroText scrollToContactForm={scrollToContact} />
        <Navbar
          setButtonOpacity={setButton}
          navioageteTo={setNavigate}
        />
        <main className='main' >
          {/* <div className='empty-div' style={{ top: "99%", width: "10%", position: "absolute", left: "90%" }}></div>
          <div className='empty-div' style={{ top: "99%", width: "10%", position: "absolute" }}></div> */}
          <section ref={aboutMe}><About /></section>
          {/* <section ref={skills}> <Skills /></section> */}
          <section ref={contact}><ContactSection
            ref={contactForm}
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
