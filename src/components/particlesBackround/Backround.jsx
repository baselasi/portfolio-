import { useEffect, useRef } from "react";

// Colors
const DOT_COLOR1 = "#FFFFFF"; // White
const DOT_COLOR2 = "#00FF00"; // Lime
const LINE_COLORS = [DOT_COLOR1, DOT_COLOR2];
const BACKGROUND_COLOR = "#000000";

// Config
const DOT_SPEED = 0.4;
const MOUSE_RADIUS = 400;
const SPOTLIGHT_RADIUS = 600;

const Background = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const dotsRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const dotCountRef = useRef(0);
    const distanceRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const dotColors = [DOT_COLOR1, DOT_COLOR2];

        const setCanvasSize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;

            dotCountRef.current = Math.floor((w * h) / 7000);
            distanceRef.current = Math.sqrt(w * h) / 10;
        };

        setCanvasSize();
        mouseRef.current = {
            x: canvas.width / 2,
            y: canvas.height / 2,
        };

        class Dot {
            constructor(x = null, y = null, isMouseDot = false) {
                this.x = x ?? Math.random() * canvas.width;
                this.y = y ?? Math.random() * canvas.height;
                this.vx = isMouseDot ? 0 : (Math.random() - 0.5) * DOT_SPEED;
                this.vy = isMouseDot ? 0 : (Math.random() - 0.5) * DOT_SPEED;
                this.radius = isMouseDot ? 3 : Math.random() * 2 + 0.5;
                this.color = isMouseDot ? DOT_COLOR2 : dotColors[Math.floor(Math.random() * dotColors.length)];
                this.lineColor = isMouseDot ? DOT_COLOR2 : Math.random() < 0.75 ? DOT_COLOR1 : DOT_COLOR2;
                this.isMouseDot = isMouseDot;
            }

            draw() {
                const dx = this.x - mouseRef.current.x;
                const dy = this.y - mouseRef.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Check if the dot is within the spotlight radius
                if (dist > SPOTLIGHT_RADIUS && !this.isMouseDot) return;

                // Adjust opacity based on the distance to the spotlight center
                let opacity = 1;

                // If the dot is outside the mouse radius but inside the spotlight radius
                if (dist > MOUSE_RADIUS && dist <= SPOTLIGHT_RADIUS && !this.isMouseDot) {
                    const fadeRange = SPOTLIGHT_RADIUS - MOUSE_RADIUS;
                    opacity = 1 - (dist - MOUSE_RADIUS) / fadeRange;
                } else if (dist > SPOTLIGHT_RADIUS) {
                    opacity = 0; // Fully transparent when outside the spotlight radius
                }

                // Ensure a minimum opacity value for visual appeal
                opacity = Math.max(opacity, 0);

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

                // Add glow effect
                ctx.shadowBlur = 25;
                ctx.shadowColor = this.color;

                ctx.fillStyle = this.hexToRgba(this.color, opacity);
                ctx.fill();

                // Reset the glow effect after fill
                ctx.shadowBlur = 0;

            }

            updatePosition() {
                if (this.isMouseDot) {
                    this.x = mouseRef.current.x;
                    this.y = mouseRef.current.y;
                    return;
                }

                this.x += this.vx;
                this.y += this.vy;

                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            }

            connectLines(dots) {
                if (!this.isInRadius(MOUSE_RADIUS) && !this.isMouseDot) return;

                for (let i = 0; i < dots.length; i++) {
                    const dot = dots[i];
                    if (dot === this || (!dot.isInRadius(MOUSE_RADIUS) && !dot.isMouseDot)) continue;

                    const dx = this.x - dot.x;
                    const dy = this.y - dot.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < distanceRef.current * distanceRef.current) {
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(dot.x, dot.y);
                        ctx.strokeStyle = this.lineColor;
                        ctx.lineWidth = 0.4;

                        // Glow effect for lines
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = this.lineColor;

                        ctx.stroke();

                        ctx.shadowBlur = 0; // reset
                    }
                }
            }

            isInRadius(radius) {
                const dx = this.x - mouseRef.current.x;
                const dy = this.y - mouseRef.current.y;
                return dx * dx + dy * dy < radius * radius;
            }

            hexToRgba(hex, opacity) {
                const bigint = parseInt(hex.slice(1), 16);
                const r = (bigint >> 16) & 255;
                const g = (bigint >> 8) & 255;
                const b = bigint & 255;
                return `rgba(${r},${g},${b},${opacity})`;
            }
        }

        const initDots = () => {
            const newDots = [];
            for (let i = 0; i < dotCountRef.current; i++) {
                newDots.push(new Dot());
            }
            newDots.push(new Dot(mouseRef.current.x, mouseRef.current.y, true)); // mouse dot
            dotsRef.current = newDots;
        };

        const draw = () => {
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const dots = dotsRef.current;

            for (const dot of dots) {
                dot.updatePosition();
                dot.draw();
                dot.connectLines(dots);
            }
        };

        const animate = () => {
            draw();
            animationRef.current = requestAnimationFrame(animate);
        };

        initDots();
        animate();

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setCanvasSize();
                initDots();
            }, 100); // debounce for 100ms
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default Background;
