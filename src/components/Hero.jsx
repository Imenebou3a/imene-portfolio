import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TITLES = ['Cybersecurity & Cloud Engineer', 'CCNA Certified', 'Network & Security Enthusiast', 'DevSecOps Explorer'];

/* ── Glitch text ─────────────────────────────────────────── */
function GlitchText({ text }) {
  const [glitching, setGlitching] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 280);
    }, 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {text}
      {glitching && (
        <>
          <span style={{ position: 'absolute', inset: 0, color: 'var(--cyan-neon)', clipPath: 'polygon(0 25%, 100% 25%, 100% 45%, 0 45%)', transform: 'translateX(-4px)', opacity: 0.85 }}>{text}</span>
          <span style={{ position: 'absolute', inset: 0, color: 'var(--pink-neon)', clipPath: 'polygon(0 58%, 100% 58%, 100% 78%, 0 78%)', transform: 'translateX(4px)', opacity: 0.85 }}>{text}</span>
        </>
      )}
    </span>
  );
}

/* ── Typing animation ────────────────────────────────────── */
function TypingText({ texts }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    let t;
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    else { setDeleting(false); setIdx((idx + 1) % texts.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, idx, texts]);
  return (
    <span style={{ color: 'var(--rose-gold)', fontFamily: 'Space Mono, monospace', fontSize: '13px', letterSpacing: '1px' }}>
      {displayed}
      <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}
        style={{ borderRight: '2px solid var(--rose-gold)', marginLeft: '2px' }} />
    </span>
  );
}

/* ── Reveal-on-hover photo ───────────────────────────────── */
function ArchPhoto() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });
  const revealRadius = useRef(0);
  const isHovered = useRef(false);
  const animFrameRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload both images
  useEffect(() => {
    let loaded = 0;
    const tryDone = () => { loaded++; if (loaded >= 2) setImagesLoaded(true); };

    const i1 = new window.Image();
    i1.src = '/hero.png';
    i1.onload = tryDone;
    i1.onerror = tryDone;
    img1Ref.current = i1;

    const i2 = new window.Image();
    i2.src = '/hero2.png';
    i2.onload = tryDone;
    i2.onerror = tryDone;
    img2Ref.current = i2;
  }, []);

  // Canvas animation loop
  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Retina / high-DPI fix
    const dpr = window.devicePixelRatio || 1;
    const cssW = 320;
    const cssH = 480;
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';
    ctx.scale(dpr, dpr);

    const W = cssW;
    const H = cssH;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Animate transition progress 0→1
      const target = isHovered.current ? 1 : 0;
      revealRadius.current += (target - revealRadius.current) * 0.07;
      const t = revealRadius.current; // 0 = hero1 fully, 1 = hero2 fully

      // Layer 1: hero1 (fades out as t increases)
      if (img1Ref.current?.naturalWidth > 0) {
        ctx.globalAlpha = 1 - t;
        ctx.drawImage(img1Ref.current, 0, 0, W, H);
        ctx.globalAlpha = 1;
      }

      // Layer 2: hero2 (fades in as t increases)
      if (img2Ref.current?.naturalWidth > 0 && t > 0.01) {
        ctx.globalAlpha = t;
        ctx.drawImage(img2Ref.current, 0, 0, W, H);
        ctx.globalAlpha = 1;
      }

      // Cursor effects — only when hovered and transition progressing
      if (isHovered.current && t > 0.05) {
        const mx = mouse.current.x;
        const my = mouse.current.y;

        // Crosshair
        const ch = 12;
        const alpha = Math.min(t * 2, 0.9);
        ctx.strokeStyle = `rgba(0,245,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(mx - ch, my); ctx.lineTo(mx + ch, my); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(mx, my - ch); ctx.lineTo(mx, my + ch); ctx.stroke();

        // Outer ring
        ctx.beginPath();
        ctx.arc(mx, my, 18, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,245,255,${alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Center dot
        ctx.beginPath();
        ctx.arc(mx, my, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,255,${alpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [imagesLoaded]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Use CSS coordinates (already scaled by ctx.scale(dpr))
    mouse.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ position: 'relative', flexShrink: 0, width: '320px' }}
    >
      {/* Photo container */}
      <div
        style={{
          position: 'relative', width: '320px', height: '480px',
          overflow: 'hidden',
          borderRadius: '160px 160px 20px 20px',
          border: '1.5px solid rgba(201,149,106,0.55)',
          boxShadow: '0 0 60px rgba(201,149,106,0.12)',
          background: '#0a0608',
          cursor: 'none',
        }}
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => { isHovered.current = false; mouse.current = { x: -999, y: -999 }; }}
        onMouseMove={handleMouseMove}
      >
        {/* Fallback until canvas ready */}
        {!imagesLoaded && (
          <img src="/hero.png" alt="Imen Bouabdallah"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
        )}

        <canvas ref={canvasRef}
          style={{ width: '100%', height: '100%', display: imagesLoaded ? 'block' : 'none' }} />

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', background: 'linear-gradient(to top, #0a0608 0%, transparent 100%)', pointerEvents: 'none' }} />

        {/* Hover hint */}
        <motion.div
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '22px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'Space Mono, monospace', fontSize: '9px', letterSpacing: '3px', color: 'rgba(0,245,255,0.65)', textTransform: 'uppercase', whiteSpace: 'nowrap', pointerEvents: 'none' }}>
          ◈ Hover to reveal
        </motion.div>
      </div>

      {/* Arch SVG overlay */}
      <svg viewBox="0 0 320 480"
        style={{ position: 'absolute', top: 0, left: 0, width: '320px', height: '480px', pointerEvents: 'none', zIndex: 5, overflow: 'visible' }}>
        <defs>
          <linearGradient id="archGradH" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8b49a" stopOpacity="1" />
            <stop offset="50%" stopColor="#c9956a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9a6840" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M160,8 C238,8 298,76 298,180 L298,472 L22,472 L22,180 C22,76 82,8 160,8 Z" fill="none" stroke="url(#archGradH)" strokeWidth="1.5" />
        <path d="M160,28 C228,28 278,90 278,188 L278,455 L42,455 L42,188 C42,90 92,28 160,28 Z" fill="none" stroke="rgba(201,149,106,0.18)" strokeWidth="1" />
        <line x1="22" y1="472" x2="55" y2="472" stroke="#c9956a" strokeWidth="2.5" />
        <line x1="265" y1="472" x2="298" y2="472" stroke="#c9956a" strokeWidth="2.5" />
        <line x1="22" y1="442" x2="22" y2="472" stroke="#c9956a" strokeWidth="2.5" />
        <line x1="298" y1="442" x2="298" y2="472" stroke="#c9956a" strokeWidth="2.5" />
        <circle cx="160" cy="5" r="5" fill="#c9956a" />
        <circle cx="160" cy="5" r="10" fill="none" stroke="#c9956a" strokeWidth="0.8" opacity="0.5" />
        <polygon points="14,240 22,232 30,240 22,248" fill="#c9956a" opacity="0.7" />
        <polygon points="290,240 298,232 306,240 298,248" fill="#c9956a" opacity="0.7" />
      </svg>

      {/* Floating badges */}
      <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '10%', right: '-125px', padding: '10px 14px', background: 'rgba(10,6,8,0.92)', border: '1px solid rgba(0,245,255,0.4)', borderRadius: '8px', fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--cyan-neon)', zIndex: 10, whiteSpace: 'nowrap', backdropFilter: 'blur(10px)' }}>
        <div style={{ marginBottom: '3px', opacity: 0.5, fontSize: '8px', letterSpacing: '2px' }}>STATUS</div>
        🟢 Available
      </motion.div>

      <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{ position: 'absolute', bottom: '26%', left: '-116px', padding: '10px 14px', background: 'rgba(10,6,8,0.92)', border: '1px solid rgba(201,149,106,0.4)', borderRadius: '8px', fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--rose-gold)', zIndex: 10, whiteSpace: 'nowrap', backdropFilter: 'blur(10px)' }}>
        <div style={{ marginBottom: '3px', opacity: 0.5, fontSize: '8px', letterSpacing: '2px' }}>LOCATION</div>
        📍 Tunisia
      </motion.div>

      <motion.div animate={{ y: [-4, 6, -4] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{ position: 'absolute', top: '44%', right: '-118px', padding: '10px 14px', background: 'rgba(10,6,8,0.92)', border: '1px solid rgba(180,79,255,0.4)', borderRadius: '8px', fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--purple-neon)', zIndex: 10, whiteSpace: 'nowrap', backdropFilter: 'blur(10px)' }}>
        <div style={{ marginBottom: '3px', opacity: 0.5, fontSize: '8px', letterSpacing: '2px' }}>CCNA</div>
        🛡️ Certified
      </motion.div>
    </motion.div>
  );
}

/* ── Main Hero ───────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" ref={ref} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '100px', paddingBottom: '60px' }}>
      {/* Bg glow */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: '40%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(92,26,46,0.35) 0%, transparent 65%)', borderRadius: '50%', transform: 'translate(-50%,-50%)' }} />
        <motion.div animate={{ y: ['0vh', '100vh'] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 5 }}
          style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,149,106,0.2), transparent)' }} />
      </div>

      <motion.div style={{ opacity, position: 'relative', zIndex: 5, width: '100%' }}>
        <div className="hero-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 60px', display: 'flex', alignItems: 'center', gap: '80px', justifyContent: 'space-between' }}>

          {/* LEFT text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px', padding: '7px 18px', border: '1px solid var(--border-bright)', borderRadius: '100px', background: 'rgba(26,18,21,0.7)', backdropFilter: 'blur(12px)' }}>
              <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan-neon)', boxShadow: '0 0 8px var(--cyan-neon)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '3px', color: 'var(--white-dim)', textTransform: 'uppercase' }}>ESPRIT Engineering Student</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
              style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '5px', color: 'var(--rose-gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Hi, I&apos;m
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(48px, 6vw, 96px)', fontWeight: 300, lineHeight: 0.92, color: 'var(--white)', marginBottom: '20px', letterSpacing: '-2px' }}>
              <GlitchText text="IMEN" />
              <br />
              <span style={{ background: 'linear-gradient(135deg, #ffe9a8 0%, #f5c45a 50%, #d4a017 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 34px rgba(245, 196, 90, 0.45))' }}>
                BOUABDALLAH
              </span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} style={{ marginBottom: '20px', minHeight: '22px' }}>
              <TypingText texts={TITLES} />
            </motion.div>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
              style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, var(--rose-gold), transparent)', marginBottom: '24px', transformOrigin: 'left' }} />

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
              style={{ color: 'var(--white-dim)', fontSize: '15px', lineHeight: 1.85, maxWidth: '460px', marginBottom: '32px', fontWeight: 300 }}>
              Computer Engineering student at ESPRIT, specializing in Cybersecurity & Cloud Engineering.
              CCNA certified. Building secure systems, resilient networks, and cloud-native infrastructure.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
              style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '36px' }}>
              {['Cybersecurity', 'Cloud Engineering', 'Networking', 'DevSecOps'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', borderBottom: '1px solid rgba(201,149,106,0.3)', paddingBottom: '3px' }}>{tag}</span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <motion.a href="#projects" whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(201,149,106,0.4)' }} whileTap={{ scale: 0.97 }}
                style={{ textDecoration: 'none', padding: '14px 32px', background: 'linear-gradient(135deg, #9a6840, #c9956a, #e8b49a)', color: 'var(--bg-primary)', fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', borderRadius: '2px', fontWeight: 700, display: 'inline-block' }}>
                View My Work ✦
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{ textDecoration: 'none', padding: '14px 32px', border: '1px solid var(--rose-gold)', color: 'var(--rose-gold)', fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', borderRadius: '2px', display: 'inline-block', transition: 'all 0.3s ease' }}>
                Let&apos;s Connect
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
                style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--rose-gold), transparent)' }} />
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', letterSpacing: '3px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll to explore</span>
            </motion.div>
          </div>

          {/* RIGHT photo */}
          <ArchPhoto />
        </div>
      </motion.div>

      {/* Side label */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} transition={{ delay: 1.4 }}
        style={{ position: 'absolute', top: '18%', right: '16px', fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--rose-gold)', letterSpacing: '3px', writingMode: 'vertical-rl', zIndex: 4 }}>
        CYBERSECURITY & CLOUD
      </motion.div>
      <div style={{ position: 'absolute', bottom: '8%', left: '2%', fontFamily: 'Cormorant Garamond, serif', fontSize: '110px', color: 'var(--burgundy)', opacity: 0.07, lineHeight: 1, zIndex: 3, fontWeight: 300, userSelect: 'none', pointerEvents: 'none' }}>✦</div>

      <style>{`
        @media (max-width: 960px) {
          .hero-inner { flex-direction: column !important; padding: 0 24px !important; gap: 60px !important; text-align: center; }
          .hero-inner > div:first-child { display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  );
}
