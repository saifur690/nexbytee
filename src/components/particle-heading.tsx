import { ReactNode, useEffect, useRef } from 'react';
import '../assets/css/particle-heading.css';

type Particle = { x: number; y: number; originX: number; originY: number; vx: number; vy: number; color: string };

function ParticleHeading({ children }: { children: ReactNode }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    const padding = 28;
    let frame = 0;
    let particles: Particle[] = [];
    let pointer = { x: -1000, y: -1000 };

    const stop = () => {
      cancelAnimationFrame(frame);
      delete host.dataset.particles;
      particles = [];
    };

    const updatePointer = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left + padding, y: event.clientY - bounds.top + padding };
    };

    const start = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
      stop();
      // Pause the existing flip animation before sampling the actual text layout.
      host.dataset.particles = 'preparing';
      const heading = host.querySelector('h1');
      if (!heading) { stop(); return; }
      const bounds = host.getBoundingClientRect();
      const width = Math.ceil(bounds.width + padding * 2);
      const height = Math.ceil(bounds.height + padding * 2);
      const stencil = document.createElement('canvas');
      stencil.width = width;
      stencil.height = height;
      const ink = stencil.getContext('2d', { willReadFrequently: true });
      const context = canvas.getContext('2d');
      if (!ink || !context) { stop(); return; }

      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const text = node.textContent || '';
        const style = getComputedStyle(node.parentElement || heading);
        ink.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        ink.fillStyle = style.color;
        ink.textBaseline = 'alphabetic';
        for (let i = 0; i < text.length; i++) {
          if (!text[i].trim()) continue;
          const range = document.createRange();
          range.setStart(node, i);
          range.setEnd(node, i + 1);
          const rect = range.getBoundingClientRect();
          if (!rect.width || !rect.height) continue;
          // DOM ranges include the font's ascender/descender space.
          const baseline = rect.bottom - bounds.top + padding - parseFloat(style.fontSize) * 0.21;
          ink.fillText(text[i], rect.left - bounds.left + padding, baseline);
        }
      }

      const pixels = ink.getImageData(0, 0, width, height).data;
      const originalColors = [
        getComputedStyle(heading).color,
        getComputedStyle(heading.querySelector('.hero-flip-text') || heading).color,
      ].map((color) => ({ color, rgb: (color.match(/[\d.]+/g) || []).slice(0, 3).map(Number) }));
      const step = window.innerWidth < 600 ? 4 : 3;
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          if (pixels[index + 3] < 120) continue;
          // Use the exact source colours rather than antialiased edge shades.
          const originalColor = originalColors.reduce((closest, candidate) => {
            const distance = (rgb: number[]) => rgb.reduce((total, channel, offset) => total + (channel - pixels[index + offset]) ** 2, 0);
            return distance(candidate.rgb) < distance(closest.rgb) ? candidate : closest;
          });
          particles.push({ x, y, originX: x, originY: y, vx: 0, vy: 0,
            color: originalColor.color });
        }
      }
      if (!particles.length) { stop(); return; }
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      updatePointer(event);
      host.dataset.particles = 'active';
      let previous = performance.now();

      const draw = (time: number) => {
        const delta = Math.min((time - previous) / 16.67, 2);
        previous = time;
        context.clearRect(0, 0, width, height);
        for (const particle of particles) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.max(Math.hypot(dx, dy), 1);
          if (distance < 105) {
            const force = (1 - distance / 105) * 4.5 * delta;
            particle.vx += dx / distance * force;
            particle.vy += dy / distance * force;
          }
          particle.vx += (particle.originX - particle.x) * 0.045 * delta;
          particle.vy += (particle.originY - particle.y) * 0.045 * delta;
          const drag = Math.pow(0.84, delta);
          particle.vx *= drag;
          particle.vy *= drag;
          particle.x += particle.vx * delta;
          particle.y += particle.vy * delta;
          context.fillStyle = particle.color;
          context.fillRect(particle.x, particle.y, step * 0.95, step * 0.95);
        }
        frame = requestAnimationFrame(draw);
      };
      frame = requestAnimationFrame(draw);
    };

    host.addEventListener('pointerenter', start);
    host.addEventListener('pointermove', updatePointer);
    host.addEventListener('pointerleave', stop);
    host.addEventListener('pointercancel', stop);
    window.addEventListener('resize', stop);
    window.addEventListener('blur', stop);
    document.addEventListener('visibilitychange', stop);
    return () => {
      stop();
      host.removeEventListener('pointerenter', start);
      host.removeEventListener('pointermove', updatePointer);
      host.removeEventListener('pointerleave', stop);
      host.removeEventListener('pointercancel', stop);
      window.removeEventListener('resize', stop);
      window.removeEventListener('blur', stop);
      document.removeEventListener('visibilitychange', stop);
    };
  }, []);

  return <div className="particle-heading" ref={hostRef}>
    <div className="particle-heading-source">{children}</div>
    <canvas ref={canvasRef} className="particle-heading-canvas" aria-hidden="true" />
  </div>;
}

export default ParticleHeading;
