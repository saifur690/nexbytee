import { useEffect, useRef, useState } from 'react';

type Stat = { value: string; label: string };

function formatCount(value: string, progress: number) {
  if (progress >= 1) return value;
  return value.replace(/\d+(?:\.\d+)?/, (number) => {
    const decimals = number.split('.')[1]?.length || 0;
    const count = Number(number) * progress;
    return decimals ? count.toFixed(decimals) : String(Math.floor(count));
  });
}

function CountUpStats({ stats }: { stats: Stat[] }) {
  const container = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let started = false;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (started || !entries.some((entry) => entry.isIntersecting)) return;
      started = true;
      observer.disconnect();
      let start: number | undefined;
      const tick = (time: number) => {
        if (start === undefined) start = time;
        const elapsed = Math.min((time - start) / 1600, 1);
        setProgress(1 - Math.pow(1 - elapsed, 3));
        if (elapsed < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });

    if (container.current) observer.observe(container.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="offering-stats" ref={container}>
      {stats.map((stat) => (
        <div className="offering-stat" key={stat.label}>
          <strong aria-label={stat.value}>
            <span className="stat-count" aria-hidden="true">{formatCount(stat.value, progress)}</span>
          </strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default CountUpStats;
