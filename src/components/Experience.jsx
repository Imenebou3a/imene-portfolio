import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    period: 'Aug 2024',
    role: 'Stagiaire â€” Banque UIB',
    company: 'UIB â€” Groupe SociÃ©tÃ© GÃ©nÃ©rale',
    location: 'Tunis, Tunisia',
    type: 'Internship Â· 1 month',
    color: 'var(--gold)',
    points: [
      'Discovered the internal workings of a bank by supporting the team with administrative tasks including database updates and document organisation',
      'Interacted directly with clients, gaining practical understanding of core banking and financial services',
      'Developed B2B communication skills and professional reactivity in a fast-paced banking environment',
      'Exposure to banking operations, compliance workflows, and financial service processes',
    ],
  },
  {
    period: 'Jul 2026 â€” Aug 2026',
    role: 'Intern â€” Software & Technical Documentation',
    company: 'CERT (Centre d\'Ã‰tudes et de Recherches des TÃ©lÃ©communications)',
    location: 'Tunisia ðŸ‡¹ðŸ‡³',
    type: 'Internship Â· 6 weeks',
    color: 'var(--cyan-neon)',
    points: [
      'Developed CERT Track â€” a JavaFX/MySQL desktop application to digitalize equipment certification workflows',
      'Designed role-based access control (Admin / Engineer / Manager) with BCrypt authentication',
      'Implemented automated PDF compliance report generation using OpenPDF',
      'Worked on technical documentation for equipment entering the Tunisian market (routers, wireless, phones, IoT)',
      'Studied certification and conformity processes for network and electronic equipment',
    ],
  },
  {
    period: '2023 â€” Present',
    role: 'Engineering Student â€” Cybersecurity & Cloud Specialty',
    company: 'ESPRIT â€” Ã‰cole SupÃ©rieure PrivÃ©e d\'IngÃ©nierie et de Technologies',
    location: 'Tunisia ðŸ‡¹ðŸ‡³',
    type: 'Academic Â· 5-year cycle',
    color: 'var(--rose-gold)',
    points: [
      'Specialized in Cybersecurity & Cloud Engineering (first-choice specialty)',
      'Built enterprise network infrastructure simulations with Cisco, GNS3, OSPF, VLSM, NAT & VPN',
      'Developed full-stack applications: Lammetna (Java/PHP/Symfony), CERT Track (JavaFX/MySQL)',
      'Built a personal CyberLab using VMware, Kali Linux and Ubuntu Server for hands-on security practice',
      'Obtained Cisco CCNA certification â€” covering routing, switching and network fundamentals',
      'Completed projects in Java, Python, C/C++, PHP, JavaScript, FlutterFlow, Arduino and Qt',
    ],
  },
  {
    period: 'May 2026',
    role: 'SCRUM MASTER â€” Lammetna PIDEV',
    company: 'ESPRIT Academic Project',
    location: 'Tunisia ðŸ‡¹ðŸ‡³',
    type: 'Academic Project',
    color: 'var(--pink-neon)',
    points: [
      'Led development of Lammetna, a platform for discovering authentic Tunisian local products and culture',
      'Responsible for Gestion des produits locaux module â€” full product catalog, cart, checkout, Stripe & AI recommendations',
      'Managed project delivery with Scrum: product backlog, user stories, sprint reviews, burn-down charts, Trello',
      'Integrated OpenAI API for AI-powered product recommendations and OpenStreetMap for delivery logistics',
      'Produced full documentation: UML sequence diagrams, README, Git history, demo materials',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} style={{ padding: '120px 24px', position: 'relative', zIndex: 5 }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="deco-line" style={{ marginBottom: '20px' }}><span>04</span><span>Experience</span><span>âœ¦</span></div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: 'var(--white)' }}>
            Career{' '}
            <span style={{ background: 'linear-gradient(135deg, #e8b49a, #c9956a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Timeline</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <motion.div initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}} transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: '22px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, var(--rose-gold), rgba(201,149,106,0.1))', transformOrigin: 'top' }} />

          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{ position: 'relative', paddingLeft: '64px', marginBottom: '48px' }}>

              {/* Dot */}
              <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
                style={{ position: 'absolute', left: '14px', top: '6px', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--bg-primary)', border: `2px solid ${exp.color}`, boxShadow: `0 0 12px ${exp.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: exp.color }} />
              </motion.div>

              {/* Card */}
              <motion.div whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 300 }}
                style={{ padding: '24px 28px', background: 'rgba(26,18,21,0.5)', border: '1px solid var(--border)', borderLeft: `3px solid ${exp.color}40`, borderRadius: '4px', backdropFilter: 'blur(10px)' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: 'var(--white)', marginBottom: '4px' }}>{exp.role}</h3>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: exp.color }}>{exp.company}</span>
                      <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)' }}>{exp.location}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: 'var(--rose-gold)', marginBottom: '4px' }}>{exp.period}</div>
                    <span style={{ padding: '2px 10px', background: `${exp.color}15`, border: `1px solid ${exp.color}30`, borderRadius: '100px', fontFamily: 'Space Mono, monospace', fontSize: '9px', color: exp.color, letterSpacing: '1px' }}>{exp.type}</span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {exp.points.map((point, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '8px', color: 'var(--white-dim)', fontSize: '13px', lineHeight: 1.7, fontWeight: 300 }}>
                      <span style={{ color: exp.color, marginTop: '6px', flexShrink: 0, fontSize: '6px' }}>â—†</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

