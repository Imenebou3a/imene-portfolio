import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

import ParticleField from './components/ParticleField';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Sparkles() {
  const positions = [
    { top: '15%', left: '3%',  size: 12, delay: 0   },
    { top: '35%', right: '4%', size: 8,  delay: 1.2 },
    { top: '60%', left: '6%',  size: 10, delay: 0.7 },
    { top: '75%', right: '5%', size: 14, delay: 2   },
    { top: '50%', left: '1%',  size: 6,  delay: 1.5 },
  ];
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
      {positions.map((p, i) => (
        <motion.div key={i}
          animate={{ opacity: [0.15, 0.7, 0.15], scale: [0.8, 1.2, 0.8], rotate: [0, 180, 360] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: p.top, left: p.left, right: p.right, color: 'var(--rose-gold)', fontSize: p.size + 'px', lineHeight: 1 }}>
          ✦
        </motion.div>
      ))}
    </div>
  );
}

function LoadingScreen({ onDone }) {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
      style={{ position: 'fixed', inset: 0, background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10000, gap: '24px' }}>

      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: 'backOut' }}
        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '80px', fontWeight: 300, background: 'linear-gradient(135deg, #e8b49a, #c9956a, #9a6840)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-3px' }}>
        IB
      </motion.div>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, ease: 'easeInOut' }}
        onAnimationComplete={onDone}
        style={{ width: '200px', height: '1px', background: 'linear-gradient(90deg, transparent, #c9956a, #e8b49a, transparent)', transformOrigin: 'left' }} />

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.4 }}
        style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '5px', textTransform: 'uppercase' }}>
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="animated-bg" style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <ParticleField />
          <Sparkles />
          <CustomCursor />
          <Navbar />
          <main style={{ position: 'relative', zIndex: 5 }}>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
