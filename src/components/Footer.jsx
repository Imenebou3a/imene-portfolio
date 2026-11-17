import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ padding: '60px 24px 40px', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 5 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Logo size={36} />
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '15px', color: 'var(--rose-gold)', letterSpacing: '2px' }}>IMENE BOUABDALLAH</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '2px' }}>Cybersecurity & Cloud Engineering · ESPRIT · Tunisia</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={{ color: 'var(--rose-gold)' }}
                style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                {item}
              </motion.a>
            ))}
          </div>
        </div>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--border-bright), transparent)', marginBottom: '28px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
            © 2026 Imene Bouabdallah · Built with ◆ · Tunisia
          </p>
          <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
            React + Framer Motion + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
