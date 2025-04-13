import { useEffect, useRef } from "react";

// Constants for colors
const DOT_COLOR1 = "#FFFFFF";  // White
const DOT_COLOR2 = "#00FF00";  // Lime
const COLOR = "#FFFFFF";      // Line color

// Define the radii
const MOUSE_RADIUS = 150;      // Radius around the mouse where dots are visible and connected
const SPOTLIGHT_RADIUS = 400;  // Radius where dots can exist but not be connected by lines

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 🎨 Define colors
    const dotColors = [DOT_COLOR1, DOT_COLOR2];   // white, lime green
    const lineColors = [DOT_COLOR1, DOT_COLOR2];  // same for lines

    // 🖤 Black background
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = "block";
    };

    setCanvasSize();

    const mousePosition = {
      x: canvas.width * 0.5,
      y: canvas.height * 0.5,
    };

    const dots = {
      nb: 400,         // number of dots
      distance: 100,   // maximum distance between dots to connect
      d_radius: SPOTLIGHT_RADIUS, // area around mouse that activates connections
      array: [],
    };

    // 🎯 Dot class
    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 2 + 2; // Dot radius between 1 and 3px

        // Random dot and line colors
        this.color = dotColors[Math.floor(Math.random() * dotColors.length)];
        this.lineColor = lineColors[Math.floor(Math.random() * lineColors.length)];
      }

      // Check if dot is inside mouse radius
      isInMouseRadius() {
        const dx = this.x - mousePosition.x;
        const dy = this.y - mousePosition.y;
        return Math.sqrt(dx * dx + dy * dy) < MOUSE_RADIUS;
      }

      // Check if dot is inside spotlight radius
      isInSpotlightRadius() {
        const dx = this.x - mousePosition.x;
        const dy = this.y - mousePosition.y;
        return Math.sqrt(dx * dx + dy * dy) < SPOTLIGHT_RADIUS;
      }

      create() {
        if (this.isInMouseRadius() || this.isInSpotlightRadius()) { 
          // Only create dot if inside mouse or spotlight radius
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }

      animate() {
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;

        this.x += this.vx;
        this.y += this.vy;
      }

      line() {
        // Only draw lines if this dot is inside the mouse radius
        if (!this.isInMouseRadius()) return;

        for (let j = 0; j < dots.nb; j++) {
          const j_dot = dots.array[j];

          // The other dot must also be within the mouse radius
          if (!j_dot.isInMouseRadius()) continue;

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
            ctx.lineWidth = 1;
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
      // Set black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
