import { useEffect, useRef } from "react";

const DOT_COLOR1 = "#FFFFFF"; // White
const DOT_COLOR2 = "#00FF00"; // Lime
const SPOTLIGHT_RADIUS = 500; // Spotlight radius

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Dot and line colors
    const dotColors = [DOT_COLOR1, DOT_COLOR2];
    const lineColors = [DOT_COLOR1, DOT_COLOR2];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = "block";
    };

    setCanvasSize();

    // Initial mouse position
    const mousePosition = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    // Dot properties
    const dots = {
      nb: 1000,
      distance: 20, // Max distance between dots to connect
      array: [],
    };

    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 1.5 + 1; // Random radius between 1 and 2.5px
        this.color = dotColors[Math.floor(Math.random() * dotColors.length)];
        this.lineColor = lineColors[Math.floor(Math.random() * lineColors.length)];
      }

      // Check if the dot is inside the spotlight radius
      isInSpotlight() {
        const dx = this.x - mousePosition.x;
        const dy = this.y - mousePosition.y;
        return Math.sqrt(dx * dx + dy * dy) < SPOTLIGHT_RADIUS;
      }

      create() {
        if (!this.isInSpotlight()) return; // Don't draw if not in spotlight

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
        // Only draw lines if this dot is in the spotlight
        if (!this.isInSpotlight()) return;

        for (let j = 0; j < dots.nb; j++) {
          const j_dot = dots.array[j];

          // The other dot must also be in the spotlight
          if (!j_dot.isInSpotlight()) continue;

          // Calculate distance between the two dots
          const dx = this.x - j_dot.x;
          const dy = this.y - j_dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only draw line if the dots are close enough
          if (dist < dots.distance) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            ctx.strokeStyle = this.lineColor;
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    // Initialize all dots
    function initializeDots() {
      dots.array = [];
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
      }
    }

    // Draw the dots and lines
    function drawDots() {
      // Clear the canvas and fill with a black background
      ctx.fillStyle = "#000"; // Black background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all dots and lines
      for (let i = 0; i < dots.nb; i++) {
        const dot = dots.array[i];
        dot.create();
        dot.animate();
        dot.line();
      }
    }

    // Animation loop
    function animate() {
      drawDots();
      requestAnimationFrame(animate);
    }

    // Initialize dots and start animation
    initializeDots();
    animate();

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    };

    // Handle window resize
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
