import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const modules = [
  { name: 'Infrastructure des réseaux IP', grade: '15.40', color: 'var(--cyan-neon)', icon: '🌐' },
  { name: 'Projet Intégré Système et Réseau', grade: '13.10', color: 'var(--rose-gold)', icon: '🔧' },
  { name: 'Management de l\'entreprise', grade: '11.28', color: 'var(--purple-neon)', icon: '📊' },
  { name: 'Réseau IP et routage', grade: '10.41', color: 'var(--pink-neon)', icon: '📡' },
  { name: 'Administration des SE', grade: '8.75', color: 'var(--white-dim)', icon: '🖥️' },
];

const domains = [
  { label: 'Programming', items: ['C / C++', 'Java', 'Python', 'PHP', 'JavaScript', 'Pascal'] },
  { label: 'Web & Desktop', items: ['HTML5', 'CSS3', 'Symfony', 'JavaFX', 'Qt', 'SDL'] },
  { label: 'Databases', items: ['MySQL', 'Firebase', 'phpMyAdmin'] },
  { label: 'Networks', items: ['Cisco', 'GNS3', 'OSPF', 'NAT', 'VPN', 'VLSM'] },
  { label: 'Systems', items: ['Linux', 'Ubuntu Server', 'Kali Linux', 'VMware', 'Windows'] },
  { label: 'Cloud / DevOps', items: ['Docker', 'AWS', 'Azure', 'Kubernetes', 'DevSecOps'] },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref} style={{ padding: '120px 24px', position: 'relative', zIndex: 5 }}>
      {/* Subtle bg grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(201,149,106,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px', zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="deco-line" style={{ marginBottom: '20px' }}>
            <span>02.5</span><span>Education</span><span>✦</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: 'var(--white)' }}>
            Academic{' '}
            <span style={{ background: 'linear-gradient(135deg, #e8b49a, #c9956a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Background</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', marginBottom: '60px' }}>

          {/* ESPRIT card */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ padding: '32px', background: 'rgba(26,18,21,0.6)', border: '1px solid var(--border)', borderRadius: '4px', backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden' }}>

            {/* Top accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--rose-gold), transparent)' }} />

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(201,149,106,0.1)', border: '1px solid rgba(201,149,106,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                🎓
              </div>
              <div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: 'var(--white)', marginBottom: '4px' }}>ESPRIT</h3>
                <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--rose-gold)', letterSpacing: '1px' }}>
                  École Supérieure Privée d&apos;Ingénierie et de Technologies
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {[
                { label: 'Degree', value: 'Engineering Diploma (Génie Informatique)' },
                { label: 'Specialty', value: 'Cybersecurity & Cloud Engineering' },
                { label: 'Duration', value: '5-year integrated cycle' },
                { label: 'Location', value: 'Tunisia 🇹🇳' },
                { label: 'Average', value: '~11.87 / 20' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', minWidth: '80px', flexShrink: 0 }}>{item.label}</span>
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', color: 'var(--white-dim)' }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* CCNA badge */}
            <div style={{ padding: '12px 16px', background: 'rgba(27,160,215,0.08)', border: '1px solid rgba(27,160,215,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '18px' }}>🏆</span>
              <div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#1ba0d7', letterSpacing: '1px' }}>Cisco CCNA Certified</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>Routing, Switching & Network Fundamentals</div>
              </div>
            </div>
          </motion.div>

          {/* Grades card */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ padding: '32px', background: 'rgba(26,18,21,0.6)', border: '1px solid var(--border)', borderRadius: '4px', backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--cyan-neon), transparent)' }} />

            <h3 style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--cyan-neon)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '28px' }}>
              📋 Key Module Grades
            </h3>

            {modules.map((mod, i) => {
              const pct = (parseFloat(mod.grade) / 20) * 100;
              return (
                <motion.div key={mod.name} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ marginBottom: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px' }}>{mod.icon}</span>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--white-dim)', letterSpacing: '0.5px' }}>{mod.name}</span>
                    </div>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 300, color: mod.color }}>{mod.grade}</span>
                  </div>
                  <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={inView ? { width: `${pct}%` } : {}} transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ height: '100%', background: `linear-gradient(90deg, ${mod.color}88, ${mod.color})`, borderRadius: '2px' }} />
                  </div>
                </motion.div>
              );
            })}

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '2px' }}>OVERALL AVERAGE</span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: 300, background: 'linear-gradient(135deg, #e8b49a, #c9956a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>11.87</span>
            </div>
          </motion.div>
        </div>

        {/* Technical domains grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '4px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '24px', textAlign: 'center' }}>
            Technical Domains Covered
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {domains.map((domain, i) => (
              <motion.div key={domain.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + i * 0.07 }}
                style={{ padding: '20px', background: 'rgba(26,18,21,0.4)', border: '1px solid var(--border)', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--rose-gold)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>{domain.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {domain.items.map(item => (
                    <span key={item} style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px', fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--white-dim)', letterSpacing: '0.5px' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
