import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 40px' : '20px 40px',
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(10, 6, 8, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,149,106,0.15)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Logo size={40} />
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', color: 'var(--rose-gold)', letterSpacing: '2px', lineHeight: 1 }}>IMENE</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '3px' }}>BOUABDALLAH</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <motion.li key={link.label} whileHover={{ y: -2 }}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: active === link.label ? 'var(--rose-gold)' : 'var(--white-dim)',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {active === link.label && (
                    <motion.div
                      layoutId="navUnderline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'var(--rose-gold)',
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--bg-primary)',
                  background: 'linear-gradient(135deg, #c9956a, #e8b49a)',
                  padding: '8px 20px',
                  borderRadius: '2px',
                  display: 'block',
                }}
              >
                Hire Me
              </a>
            </motion.li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
            className="mobile-menu-btn"
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                style={{ width: '24px', height: '1px', background: 'var(--rose-gold)' }}
                animate={menuOpen ? {
                  rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                  y: i === 0 ? 6 : i === 2 ? -6 : 0,
                  opacity: i === 1 ? 0 : 1,
                } : {}}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(10,6,8,0.97)',
              borderBottom: '1px solid var(--border)',
              padding: '24px 40px',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '16px 0',
                  borderBottom: '1px solid var(--border)',
                  textDecoration: 'none',
                  color: 'var(--white)',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '24px',
                  letterSpacing: '2px',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          nav ul { display: none !important; }
        }
        a.nav-link:hover { color: var(--rose-gold) !important; }
      `}</style>
    </>
  );
}
