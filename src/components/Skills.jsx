import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Cybersecurity & Networks',
    icon: '🛡️',
    color: 'var(--pink-neon)',
    skills: [
      { name: 'Kali Linux / Ethical Hacking', level: 75 },
      { name: 'Cisco / CCNA / GNS3', level: 85 },
      { name: 'Network Security (OSPF, NAT, VPN)', level: 82 },
      { name: 'VMware / Virtualization', level: 78 },
      { name: 'Linux System Admin', level: 80 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'var(--cyan-neon)',
    skills: [
      { name: 'AWS', level: 65 },
      { name: 'Azure', level: 40 },
      { name: 'Docker', level: 30 },
      { name: 'Kubernetes', level: 30 },
      { name: 'DevSecOps / IAM', level: 35 },
    ],
  },
  {
    title: 'Development',
    icon: '⌨️',
    color: 'var(--rose-gold)',
    skills: [
      { name: 'Java / JavaFX', level: 82 },
      { name: 'Python', level: 75 },
      { name: 'PHP / Symfony', level: 72 },
      { name: 'JavaScript / HTML / CSS', level: 78 },
      { name: 'C / C++', level: 88 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🔧',
    color: 'var(--purple-neon)',
    skills: [
      { name: 'Git / GitHub', level: 82 },
      { name: 'MySQL / Firebase', level: 78 },
      { name: 'IntelliJ / VS Code', level: 88 },
      { name: 'FlutterFlow', level: 70 },
      { name: 'Arduino / Qt', level: 65 },
    ],
  },
];

const certBadges = [
  {
    name: 'CCNA: Présentation des réseaux',
    full: 'Cisco Networking Academy via ESPRIT — Completed 15 Jul 2026',
    date: '15 Jul 2026',
    issuer: 'Cisco Networking Academy',
    status: 'completed',
    color: '#1ba0d7',
    icon: '🏆',
  },
  {
    name: 'Introduction to Cybersecurity',
    full: 'Cisco Networking Academy — Completed 10 Aug 2026 · ID: 519a2cb6',
    date: '10 Aug 2026',
    issuer: 'Cisco Networking Academy',
    status: 'completed',
    color: '#00c896',
    icon: '🛡️',
  },
  {
    name: 'AWS Cloud Practitioner',
    full: 'In progress — AWS Cloud Foundations',
    date: 'In progress',
    issuer: 'Amazon Web Services',
    status: 'progress',
    color: '#FF9900',
    icon: '☁️',
  },
  {
    name: 'DevSecOps',
    full: 'In progress — DevSecOps & IAM fundamentals',
    date: 'In progress',
    issuer: 'Self-study',
    status: 'progress',
    color: '#b44fff',
    icon: '🔐',
  },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--white-dim)', letterSpacing: '1px' }}>{name}</span>
        <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color }}>{level}%</span>
      </div>
      <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}} transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ height: '100%', background: `linear-gradient(90deg, ${color}88, ${color})`, borderRadius: '2px', boxShadow: `0 0 8px ${color}40`, position: 'relative' }}>
          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: delay + 0.8, repeat: Infinity, repeatDelay: 4 }}
            style={{ position: 'absolute', right: 0, top: '-2px', width: '4px', height: '7px', background: color, borderRadius: '2px', boxShadow: `0 0 6px ${color}` }} />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} style={{ padding: '120px 24px', position: 'relative', zIndex: 5 }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,149,106,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,149,106,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="deco-line" style={{ marginBottom: '20px' }}><span>02</span><span>Skills & Expertise</span><span>✦</span></div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: 'var(--white)' }}>
            My{' '}
            <span style={{ background: 'linear-gradient(135deg, #ff6eb4, #b44fff, #00f5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Arsenal</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {skillCategories.map((cat, catIdx) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: catIdx * 0.1 }}
              whileHover={{ y: -4 }}
              style={{ padding: '28px', background: 'rgba(26,18,21,0.6)', border: '1px solid var(--border)', borderRadius: '4px', backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`, opacity: 0.7 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <span style={{ fontSize: '20px' }}>{cat.icon}</span>
                <h3 style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '2px', color: cat.color, textTransform: 'uppercase' }}>{cat.title}</h3>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color={cat.color} delay={catIdx * 0.1 + i * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
          style={{ marginBottom: '40px', padding: '24px 28px', border: '1px solid var(--border)', borderRadius: '4px', background: 'rgba(26,18,21,0.4)' }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '4px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '16px' }}>🌍 Languages</div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[{ lang: 'Arabic', level: 'Native', color: 'var(--rose-gold)' }, { lang: 'French', level: 'B2', color: 'var(--cyan-neon)' }, { lang: 'English', level: 'B2', color: 'var(--purple-neon)' }].map(l => (
              <div key={l.lang} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 300, color: l.color }}>{l.level}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '2px' }}>{l.lang}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cert badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '4px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '24px', textAlign: 'center' }}>Certifications & Badges</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {certBadges.map((cert, i) => (
              <motion.div key={cert.name}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: `0 8px 32px ${cert.color}25` }}
                style={{
                  padding: '20px 24px',
                  border: `1px solid ${cert.color}${cert.status === 'completed' ? '60' : '30'}`,
                  borderRadius: '6px',
                  background: `${cert.color}${cert.status === 'completed' ? '0e' : '06'}`,
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}>
                {/* top glow strip */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${cert.color}${cert.status === 'completed' ? 'cc' : '55'}, transparent)` }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '20px' }}>{cert.icon}</span>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: cert.color, letterSpacing: '0.5px', lineHeight: 1.4 }}>{cert.name}</span>
                  </div>
                  <span style={{
                    flexShrink: 0,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '9px',
                    letterSpacing: '1px',
                    background: cert.status === 'completed' ? `${cert.color}20` : 'rgba(255,255,255,0.05)',
                    color: cert.status === 'completed' ? cert.color : 'var(--text-muted)',
                    border: `1px solid ${cert.status === 'completed' ? cert.color + '50' : 'rgba(255,255,255,0.1)'}`,
                  }}>
                    {cert.status === 'completed' ? '✓ Completed' : '⏳ In progress'}
                  </span>
                </div>

                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '4px' }}>{cert.issuer}</div>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: cert.status === 'completed' ? cert.color + 'aa' : 'var(--text-muted)', letterSpacing: '1px' }}>{cert.date}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
