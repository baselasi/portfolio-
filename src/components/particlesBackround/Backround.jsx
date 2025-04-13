import { useCallback, useEffect, useRef } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import "../background/background.css"

const DOT_COLOR1 = "#FFFFFF"
const DOT_COLOR2 = "#00FF00"
const COLOR = "#FFFFFF"



const Backround = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // 🎨 Define colors
        const dotColors = [DOT_COLOR1, DOT_COLOR2];   // white, lime green
        const lineColors = [DOT_COLOR1, DOT_COLOR2];  // same for lines

        // 🖤 Black background
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.display = 'block';
        };

        setCanvasSize();

        const mousePosition = {
            x: canvas.width * 0.5,
            y: canvas.height * 0.5,
        };

        const dots = {
            nb: 700,         // number of dots
            distance: 120,   // how far dots can connect
            d_radius: 200,   // area around mouse that activates lines
            array: [],
        };

        // 🎯 Dot class
        class Dot {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = -0.5 + Math.random();
                this.vy = -0.5 + Math.random();
                this.radius = Math.random() * 2 + 1;

                // Random dot and line colors
                this.color = dotColors[Math.floor(Math.random() * dotColors.length)];
                this.lineColor = lineColors[Math.floor(Math.random() * lineColors.length)];
            }

            create() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            animate() {
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;

                this.x += this.vx;
                this.y += this.vy;
            }

            line() {
                for (let j = 0; j < dots.nb; j++) {
                    const j_dot = dots.array[j];

                    if (
                        Math.abs(this.x - j_dot.x) < dots.distance &&
                        Math.abs(this.y - j_dot.y) < dots.distance
                    ) {
                        if (
                            Math.abs(this.x - mousePosition.x) < dots.d_radius &&
                            Math.abs(this.y - mousePosition.y) < dots.d_radius
                        ) {
                            ctx.beginPath();
                            ctx.moveTo(this.x, this.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.strokeStyle = this.lineColor;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }

        function initializeDots() {
            dots.array = [];
            for (let i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
            }
        }

        function drawDots() {
            // Set black background
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < dots.nb; i++) {
                const dot = dots.array[i];
                dot.create();
                dot.animate();
                dot.line();
            }
        }

        function animate() {
            drawDots();
            requestAnimationFrame(animate);
        }

        initializeDots();
        animate();

        const handleMouseMove = (e) => {
            mousePosition.x = e.pageX;
            mousePosition.y = e.pageY;
        };

        const handleResize = () => {
            setCanvasSize();
            initializeDots();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} />;
}

export default Backround