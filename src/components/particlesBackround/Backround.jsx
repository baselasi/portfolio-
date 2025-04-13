import { useEffect, useRef } from "react";

// Colors
const DOT_COLOR1 = "#FFFFFF"; // White
const DOT_COLOR2 = "#00FF00"; // Lime
const LINE_COLORS = [DOT_COLOR1, DOT_COLOR2];
const BACKGROUND_COLOR = "#000000";

// Radii
const MOUSE_RADIUS = 200;
const SPOTLIGHT_RADIUS = 600;

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const dotColors = [DOT_COLOR1, DOT_COLOR2];
        const lineColors = LINE_COLORS;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.display = "block";
        };

        setCanvasSize();

        const mousePosition = {
            x: canvas.width / 2,
            y: canvas.height / 2,
        };

        const dots = {
            nb: Math.floor((canvas.width * canvas.height) / 6000), 
            distance: Math.sqrt(canvas.width * canvas.height) / 9,
            array: [],
        };

        class Dot {
            constructor(x = null, y = null, isMouseDot = false) {
                this.x = x ?? Math.random() * canvas.width;
                this.y = y ?? Math.random() * canvas.height;
                this.vx = isMouseDot ? 0 : -1 + Math.random();
                this.vy = isMouseDot ? 0 : -1 + Math.random();
                this.radius = isMouseDot ? 3 : Math.random() * 2 + 0.8;
                this.color = isMouseDot ? DOT_COLOR2 : dotColors[Math.floor(Math.random() * dotColors.length)];
                this.lineColor = isMouseDot
                    ? DOT_COLOR2
                    : Math.random() < 0.75 ? DOT_COLOR1 : DOT_COLOR2;
                this.isMouseDot = isMouseDot;
            }

            isInMouseRadius() {
                const dx = this.x - mousePosition.x;
                const dy = this.y - mousePosition.y;
                return Math.sqrt(dx * dx + dy * dy) < MOUSE_RADIUS;
            }

            isInSpotlightRadius() {
                const dx = this.x - mousePosition.x;
                const dy = this.y - mousePosition.y;
                return Math.sqrt(dx * dx + dy * dy) < SPOTLIGHT_RADIUS;
            }

            create() {
                const dx = this.x - mousePosition.x;
                const dy = this.y - mousePosition.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist > SPOTLIGHT_RADIUS && !this.isMouseDot) return;

                let opacity = 1;

                if (dist > MOUSE_RADIUS && !this.isMouseDot) {
                    const fadeRange = SPOTLIGHT_RADIUS - MOUSE_RADIUS;
                    opacity = 1 - (dist - MOUSE_RADIUS) / fadeRange;
                }

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = this.hexToRgba(this.color, opacity);
                ctx.fill();
            }

            animate() {
                if (this.isMouseDot) {
                    this.x = mousePosition.x;
                    this.y = mousePosition.y;
                    return;
                }

                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;

                this.x += this.vx;
                this.y += this.vy;
            }

            line() {
                if (!this.isInMouseRadius() && !this.isMouseDot) return;

                for (let j = 0; j < dots.array.length; j++) {
                    const j_dot = dots.array[j];

                    if (
                        j_dot === this ||
                        (!j_dot.isInMouseRadius() && !j_dot.isMouseDot)
                    ) continue;

                    const dx = this.x - j_dot.x;
                    const dy = this.y - j_dot.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < dots.distance * dots.distance) {
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(j_dot.x, j_dot.y);
                        ctx.strokeStyle = this.lineColor;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            hexToRgba(hex, opacity) {
                const bigint = parseInt(hex.slice(1), 16);
                const r = (bigint >> 16) & 255;
                const g = (bigint >> 8) & 255;
                const b = bigint & 255;
                return `rgba(${r},${g},${b},${opacity})`;
            }
        }

        function initializeDots() {
            dots.array = [];

            for (let i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
            }

            // Add the mouse-following dot
            dots.array.push(new Dot(mousePosition.x, mousePosition.y, true));
        }

        function drawDots() {
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < dots.array.length; i++) {
                const dot = dots.array[i];
                dot.animate();
                dot.create();
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

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default Background;
