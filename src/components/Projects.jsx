import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Lammetna',
    subtitle: 'Discover Authentic Tunisia',
    description: 'A full-stack platform dedicated to discovering authentic Tunisia — local products, artisanal kits, cultural events, accommodations, and community features. Integrated Stripe payments, AI-powered recommendations via OpenAI API, and location/delivery via OpenStreetMap.',
    tags: ['Java', 'JavaFX', 'PHP', 'Symfony', 'MySQL', 'Stripe', 'OpenAI API', 'OpenStreetMap', 'GitHub'],
    color: 'var(--rose-gold)',
    colorAlpha: 'rgba(201,149,106,0.08)',
    icon: '◆',
    metrics: ['Stripe payments', 'AI recommendations', 'Full e-commerce'],
    role: 'Gestion des produits locaux',
  },
  {
    id: 2,
    title: 'CERT Track',
    subtitle: 'Equipment Certification Desktop App',
    description: 'Desktop application to digitalize the technical certification process for equipment at a certification center. Full workflow from equipment declaration → technical tests → PDF compliance report → final decision. Role-based access (Admin / Engineer / Manager) with BCrypt auth.',
    tags: ['Java 17', 'JavaFX 21', 'MySQL 8', 'JDBC', 'OpenPDF', 'Maven', 'MVC'],
    color: 'var(--cyan-neon)',
    colorAlpha: 'rgba(0,245,255,0.08)',
    icon: '▸',
    metrics: ['3-role RBAC', 'PDF export', 'Full audit trail'],
    role: 'Internship project @ CERT',
  },
  {
    id: 3,
    title: 'CyberLab',
    subtitle: 'Personal Cybersecurity Home Lab',
    description: 'Isolated cybersecurity laboratory built on Windows 11 host with VMware Workstation Pro 17.6.4. Kali Linux as attacker machine, Ubuntu Server as target. Used for practicing network security, Linux administration, penetration testing concepts and security experimentation.',
    tags: ['VMware', 'Kali Linux', 'Ubuntu Server', 'Networking', 'Linux', 'Security Testing'],
    color: 'var(--pink-neon)',
    colorAlpha: 'rgba(255,110,180,0.08)',
    icon: '◈',
    metrics: ['Isolated lab', 'Attacker/Target setup', 'Hands-on practice'],
    role: 'Personal project',
  },
  {
    id: 4,
    title: 'TechSolutions SARL',
    subtitle: 'Enterprise Network Infrastructure',
    description: 'Complete enterprise network infrastructure simulation for TechSolutions SARL using GNS3 and Cisco equipment. Designed and implemented a network over the 192.168.0.0/17 address space with VLSM, OSPF routing, NAT, VPN, and full topology documentation.',
    tags: ['GNS3', 'Cisco', 'OSPF', 'VLSM', 'NAT', 'VPN', 'IP Routing', 'Network Design'],
    color: 'var(--purple-neon)',
    colorAlpha: 'rgba(180,79,255,0.08)',
    icon: '◇',
    metrics: ['192.168.0.0/17', 'OSPF + VPN', 'Full topology'],
    role: 'Documentation & design',
  },

  {
    id: 6,
    title: 'AfricaGym',
    subtitle: 'Mobile Gym Tracking App',
    description: 'Mobile-oriented gym tracking application built with FlutterFlow and Firebase. Handles workout tracking, user profiles and real-time data sync via Firebase integration.',
    tags: ['FlutterFlow', 'Firebase', 'Mobile', 'Low-code'],
    color: 'var(--cyan-neon)',
    colorAlpha: 'rgba(0,245,255,0.08)',
    icon: '▸',
    metrics: ['Firebase real-time', 'Mobile UI', 'Workout tracking'],
    role: 'Mobile interface & Firebase',
  },
  {
    id: 7,
    title: 'NRP',
    subtitle: 'Network Resource Protocol',
    description: 'Network protocol implementation project focused on client/server communication. Worked on message creation, message parsing, server responses, and dynamic resource management — core protocol internals for a custom network resource protocol.',
    tags: ['Networking', 'Protocol Design', 'Client/Server', 'C', 'Sockets'],
    color: 'var(--pink-neon)',
    colorAlpha: 'rgba(255,110,180,0.08)',
    icon: '◆',
    metrics: ['Custom protocol', 'Client-side impl.', 'Message parsing'],
    role: 'Client-side implementation',
  },
  {
    id: 8,
    title: 'Vireo',
    subtitle: 'Web Development Project',
    description: 'A web development project built as part of the engineering curriculum, applying modern web technologies and best practices in frontend and backend development.',
    tags: ['Web', 'JavaScript', 'HTML/CSS', 'PHP'],
    color: 'var(--purple-neon)',
    colorAlpha: 'rgba(180,79,255,0.08)',
    icon: '▪',
    metrics: ['Web application', 'Full-stack', 'Academic project'],
    role: 'Web development',
  },
];

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: 'relative', padding: '28px',
        background: hovered ? project.colorAlpha : 'rgba(26,18,21,0.5)',
        border: `1px solid ${hovered ? project.color + '50' : 'var(--border)'}`,
        borderRadius: '4px', backdropFilter: 'blur(10px)',
        transition: 'all 0.4s ease', overflow: 'hidden', cursor: 'pointer',
      }}
    >
      <motion.div animate={{ scaleX: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`, transformOrigin: 'left' }} />

      <div style={{ position: 'absolute', top: '12px', right: '16px', fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--text-muted)' }}>
        {String(project.id).padStart(2, '0')}
      </div>

      <div style={{ fontSize: '26px', marginBottom: '14px' }}>{project.icon}</div>

      <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 400, color: 'var(--white)', marginBottom: '4px' }}>{project.title}</h3>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: project.color, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>{project.subtitle}</div>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '14px' }}>Role: {project.role}</div>

      <p style={{ color: 'var(--white-dim)', fontSize: '13px', lineHeight: 1.8, marginBottom: '18px', fontWeight: 300 }}>{project.description}</p>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
        {project.metrics.map(m => (
          <span key={m} style={{ padding: '3px 10px', background: `${project.color}15`, border: `1px solid ${project.color}30`, borderRadius: '100px', fontFamily: 'Space Mono, monospace', fontSize: '9px', color: project.color, letterSpacing: '1px' }}>{m}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: hovered ? '20px' : '0' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px', fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '1px' }}>{tag}</span>
        ))}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
            style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
            <a href="#" style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: project.color, textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: `1px solid ${project.color}60`, paddingBottom: '2px' }}>
              View Project ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} style={{ padding: '120px 24px', position: 'relative', zIndex: 5 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="deco-line" style={{ marginBottom: '20px' }}><span>03</span><span>Selected Works</span><span>✦</span></div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: 'var(--white)' }}>
            What I&apos;ve{' '}
            <span style={{ background: 'linear-gradient(135deg, #e8b49a, #c9956a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Built</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '60px' }}>
          <motion.a href="https://github.com/Imenebou3a" target="_blank" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 32px', border: '1px solid var(--border)', color: 'var(--white-dim)', fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', transition: 'all 0.3s ease' }}>
            View All on GitHub ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
