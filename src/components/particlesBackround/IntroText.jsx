import { useState, useEffect, useCallback } from "react";
import TypewriterText from "../../comon/TypewriterText ";

const IntroText = () => {
    const [showName, setShowName] = useState(false);
    const [showText, setShowText] = useState(false);
    const [isTypingComplete, setIsTypingComplete] = useState(false); // Track if typing is complete

    const handleTypingDone = useCallback(() => {
        setShowName(true); // Show the second typewriter text after the first is done
    }, []);

    const handelShowText = useCallback(() => {
        setShowText(true); // Show the second typewriter text after the first is done
    }, []);


    return (
        <div style={{ height: "100vh" }} className="text-white d-flex justify-content-center align-items-center text-center">
            <div>
                <h1 style={{ fontSize: "2.5rem", margin: 0 }}>
                    {/* First TypewriterText: "Hello, I'm" */}
                    <TypewriterText
                        text="Hello, I'm "
                        speed={50}
                        delay={10}
                        onDone={handleTypingDone} // Call handleTypingDone when typing is complete
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
                            onDone={handelShowText} // Set typing complete when done
                        />
                        : <></>}
                </h1>

                {/* Button that appears when typing is complete */}
                {/* <div className={`slide-up-button ${isTypingComplete ? "visible" : ""}`}>
                    <button>Click Me</button>
                </div> */}
            </div>
        </div>
    );
};

export default IntroText;
