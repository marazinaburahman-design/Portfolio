import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let raf = null;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const PARTICLE_SIZE = 5;
    const LINK_DIST = 200;
    const CLEAR_RADIUS = 150;
    const PUSH_STRENGTH = 5;

    function resize() {
      width = canvas.width = wrap.offsetWidth;
      height = canvas.height = wrap.offsetHeight;
      init();
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 15;
        this.vy = (Math.random() - 0.5) * 15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
        }
        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
        }

        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));

        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CLEAR_RADIUS && dist > 0) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - dist / CLEAR_RADIUS) * PUSH_STRENGTH;
            this.vx += Math.cos(angle) * force;
            this.vy += Math.sin(angle) * force;
          }
        }

        this.vx *= 0.98;
        this.vy *= 0.98;

        if (Math.random() < 0.09) {
          this.vx += (Math.random() - 0.5) * 2.5;
          this.vy += (Math.random() - 0.5) * 2.5;
        }

        const maxSpeed = 20;
        this.vx = Math.max(-maxSpeed, Math.min(maxSpeed, this.vx));
        this.vy = Math.max(-maxSpeed, Math.min(maxSpeed, this.vy));
      }

      draw() {
        ctx.fillStyle = "rgba(50, 50, 50, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, PARTICLE_SIZE, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      const particleCount = Math.floor((width * height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.6;
            ctx.strokeStyle = `rgba(160, 160, 160, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
      ctx.fillRect(0, 0, width, height);

      for (const particle of particles) {
        particle.update();

        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CLEAR_RADIUS) {
            continue;
          }
        }

        particle.draw();
      }

      drawLines();
      raf = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    animate();

    wrap.addEventListener("mousemove", handleMouseMove);
    wrap.addEventListener("mouseenter", handleMouseEnter);
    wrap.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    return () => {
      wrap.removeEventListener("mousemove", handleMouseMove);
      wrap.removeEventListener("mouseenter", handleMouseEnter);
      wrap.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}