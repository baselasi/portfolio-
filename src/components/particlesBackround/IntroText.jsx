import { useState, useCallback } from "react";
import TypewriterText from "../../comon/TypewriterText ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const IntroText = ({ scrollToContactForm }) => {
    const [showName, setShowName] = useState(false);
    const [showText, setShowText] = useState(false);
    const [isTypingComplete, setIsTypingComplete] = useState(false); // Track if typing is complete

    const handelShowName = useCallback(() => {
        setShowName(true); // Show the second typewriter text after the first is done
    }, []);

    const handelShowText = useCallback(() => {
        setShowText(true); // Show the second typewriter text after the first is done
    }, []);

    const handleTypingComplite = useCallback(() => {
        setIsTypingComplete(true)
    }, [])


    return (
        <div style={{ height: "100vh" }} className="text-white d-flex justify-content-center align-items-center text-center">
            <div>
                <h1 style={{ fontSize: "2.5rem", margin: 0 }}>
                    {/* First TypewriterText: "Hello, I'm" */}
                    <TypewriterText
                        text="Hello, I'm "
                        speed={50}
                        delay={10}
                        onDone={handelShowName} // Call handleTypingDone when typing is complete
                    />

                    {/* Conditionally render the second TypewriterText */}
                    {showName ?
                        <TypewriterText
                            style={{ color: "rgb(102, 255, 0)" }}
                            text="Bassel"
                            speed={50}
                            onDone={handelShowText} // Set typing complete when done
                        />
                        : <></>}

                    <br />
                    {showText ?
                        <TypewriterText
                            text="Software developer and industrial engineer."
                            speed={50}
                            delay={40} // Add delay after the first typewriter effect
                            onDone={handleTypingComplite} // Set typing complete when done
                        />
                        : <></>}
                </h1>

                {/* Button that appears when typing is complete */}
                <div className={`slide-up-button ${isTypingComplete ? "visible" : ""} `}>
                    <button
                        onClick={scrollToContactForm}
                        className="fancy-button "> <span> Get In Touch</span> <FontAwesomeIcon icon={faArrowDown} /></button>
                </div>
            </div>
        </div>
    );
};

export default IntroText;
