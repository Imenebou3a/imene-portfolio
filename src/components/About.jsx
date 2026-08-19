import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years of Study' },
  { value: '8+', label: 'Real Projects' },
  { value: 'CCNA', label: 'Certified' },
  { value: '∞', label: 'Curiosity' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} style={{ padding: '120px 24px', position: 'relative', zIndex: 5 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="deco-line" style={{ marginBottom: '20px' }}>
            <span>01</span><span>About Me</span><span>✦</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 300, color: 'var(--white)', letterSpacing: '-1px' }}>
            The Mind Behind the{' '}
            <span style={{ background: 'linear-gradient(135deg, #e8b49a, #c9956a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Code</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          {/* Left: terminal visual */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.2 }}
            style={{ position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              <svg viewBox="0 0 380 480" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
                <defs>
                  <linearGradient id="archGrad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e8b49a" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#9a6840" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path d="M190,30 C280,30 340,100 340,200 L340,460 L40,460 L40,200 C40,100 100,30 190,30 Z" fill="rgba(26,18,21,0.7)" stroke="url(#archGrad2)" strokeWidth="1.5" />
                <path d="M190,60 C265,60 315,118 315,210 L315,450 L65,450 L65,210 C65,118 115,60 190,60 Z" fill="none" stroke="rgba(201,149,106,0.2)" strokeWidth="1" />

                <text x="80" y="150" fontFamily="Space Mono" fontSize="10" fill="rgba(0,245,255,0.6)" letterSpacing="1">$ whoami</text>
                <text x="80" y="172" fontFamily="Space Mono" fontSize="10" fill="rgba(201,149,106,0.8)">imen_bouabdallah</text>
                <text x="80" y="200" fontFamily="Space Mono" fontSize="10" fill="rgba(0,245,255,0.6)" letterSpacing="1">$ cat profile.txt</text>
                <text x="80" y="222" fontFamily="Space Mono" fontSize="9" fill="rgba(201,149,106,0.7)">ESPRIT — Génie Informatique</text>
                <text x="80" y="240" fontFamily="Space Mono" fontSize="9" fill="rgba(201,149,106,0.7)">Cybersecurity &amp; Cloud Eng.</text>
                <text x="80" y="268" fontFamily="Space Mono" fontSize="10" fill="rgba(0,245,255,0.6)" letterSpacing="1">$ certifications</text>
                <text x="80" y="290" fontFamily="Space Mono" fontSize="9" fill="rgba(255,110,180,0.9)">✓ Cisco CCNA</text>
                <text x="80" y="318" fontFamily="Space Mono" fontSize="10" fill="rgba(0,245,255,0.6)" letterSpacing="1">$ location</text>
                <text x="80" y="340" fontFamily="Space Mono" fontSize="9" fill="rgba(201,149,106,0.8)">📍 Tunisia 🇹🇳</text>
                <motion.rect x="80" y="358" width="6" height="12" fill="rgba(201,149,106,0.8)"
                  animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />

                <line x1="40" y1="460" x2="60" y2="460" stroke="#c9956a" strokeWidth="2" />
                <line x1="320" y1="460" x2="340" y2="460" stroke="#c9956a" strokeWidth="2" />
                <circle cx="190" cy="24" r="4" fill="#c9956a" opacity="0.8" />
              </svg>

              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity }}
                style={{ position: 'absolute', top: '10%', right: '-12%', padding: '8px 14px', background: 'rgba(10,6,8,0.9)', border: '1px solid rgba(0,245,255,0.3)', borderRadius: '4px', fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--cyan-neon)', zIndex: 10 }}>
                🔒 Security First
              </motion.div>
              <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                style={{ position: 'absolute', bottom: '15%', left: '-10%', padding: '8px 14px', background: 'rgba(10,6,8,0.9)', border: '1px solid rgba(201,149,106,0.3)', borderRadius: '4px', fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--rose-gold)', zIndex: 10 }}>
                ☁️ Cloud Native
              </motion.div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.3 }}>
            <p style={{ color: 'var(--white-dim)', fontSize: '16px', lineHeight: 2, marginBottom: '24px', fontWeight: 300 }}>
              I&apos;m a Computer Engineering student at <span style={{ color: 'var(--rose-gold)' }}>ESPRIT (École Supérieure Privée d&apos;Ingénierie et de Technologies)</span>, specializing in <strong style={{ color: 'var(--white)' }}>Cybersecurity & Cloud Engineering</strong> — my first-choice specialty.
            </p>
            <p style={{ color: 'var(--white-dim)', fontSize: '16px', lineHeight: 2, marginBottom: '24px', fontWeight: 300 }}>
              CCNA certified, I have hands-on experience with network infrastructure, Linux system administration, virtualization using VMware, Kali Linux and Ubuntu Server, and a growing skillset in cloud technologies (AWS, Azure, Docker, Kubernetes).
            </p>
            <p style={{ color: 'var(--white-dim)', fontSize: '16px', lineHeight: 2, marginBottom: '40px', fontWeight: 300 }}>
              I&apos;ve built real projects spanning full-stack development, networking simulations, mobile apps, and a personal cybersecurity home lab. I&apos;m passionate about the intersection of security, infrastructure and AI.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '4px', background: 'rgba(26,18,21,0.5)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px', fontWeight: 300, background: 'linear-gradient(135deg, #e8b49a, #c9956a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '6px' }}>{stat.value}</div>
                  <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>{stat.label}</div>
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderTop: '1px solid var(--rose-gold)', borderLeft: '1px solid var(--rose-gold)', opacity: 0.4 }} />
                </motion.div>
              ))}
            </div>

            {/* Education block */}
            <div style={{ padding: '20px 24px', border: '1px solid var(--border)', borderLeft: '3px solid var(--rose-gold)', borderRadius: '4px', background: 'rgba(26,18,21,0.4)', marginBottom: '28px' }}>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', letterSpacing: '3px', color: 'var(--rose-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>🎓 Education</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', color: 'var(--white)', marginBottom: '4px' }}>ESPRIT — Génie Informatique</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--white-dim)' }}>Cybersecurity & Cloud Engineering Specialty</div>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>5-year engineering cycle • Tunisia 🇹🇳</div>
            </div>

            <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 28px', border: '1px solid var(--rose-gold)', color: 'var(--rose-gold)', fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
              Download CV ↓
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
