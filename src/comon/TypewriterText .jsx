import React, { useEffect, useState } from "react";

const TypewriterText = React.memo(({
    text,
    speed = 50,
    delay = 0,
    style = {},
    onDone = () => { }
}) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!text) return;  // Avoid unnecessary runs when `show` is false

        setDisplayedText(""); // Reset displayed text when text changes

        let currentIndex = 0;
        let intervalId = null;

        const timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                if (currentIndex >= text.length) {
                    clearInterval(intervalId);
                    onDone();
                    return;
                }

                const nextChar = text.charAt(currentIndex);
                setDisplayedText((prev) => prev + nextChar);
                currentIndex++;
            }, speed);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            if (intervalId) {
                clearInterval(intervalId); // Ensure it's cleared when the component unmounts
            }
        };
    }, [text, speed, delay, onDone,]);


    return <span style={style}>{displayedText}</span>;
});

export default TypewriterText;
