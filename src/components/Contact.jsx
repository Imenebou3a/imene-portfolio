import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  { label: 'GitHub', icon: '⌥', href: 'https://github.com/Imenebou3a', handle: '@Imenebou3a', color: 'var(--white-dim)' },
  { label: 'LinkedIn', icon: '◈', href: 'https://www.linkedin.com/in/imene-bouabdallah-49b6341b1', handle: 'Imen Bouabdallah', color: 'var(--cyan-neon)' },
  { label: 'Email', icon: '✉', href: 'mailto:imen.bouabdallah@esprit.tn', handle: 'imen.bouabdallah@esprit.tn', color: 'var(--rose-gold)' },
  { label: 'Location', icon: '📍', href: '#', handle: 'Tunisia 🇹🇳', color: 'var(--pink-neon)' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(26,18,21,0.6)', border: '1px solid var(--border)',
    borderRadius: '3px', color: 'var(--white)',
    fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px',
    outline: 'none', transition: 'border-color 0.3s ease', boxSizing: 'border-box',
  };

  return (
    <section id="contact" ref={ref} style={{ padding: '120px 24px', position: 'relative', zIndex: 5 }}>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(92,26,46,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="deco-line" style={{ marginBottom: '20px' }}><span>05</span><span>Get In Touch</span><span>✦</span></div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 300, color: 'var(--white)', marginBottom: '16px' }}>
            Let&apos;s Build Something{' '}
            <span style={{ background: 'linear-gradient(135deg, #e8b49a, #c9956a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>Together</span>
          </h2>
          <p style={{ color: 'var(--white-dim)', fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
            Open to internships, collaborations, and cybersecurity/cloud projects. Let&apos;s connect.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Name</label>
                  <input type="text" placeholder="Your name" required value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--rose-gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Email</label>
                  <input type="email" placeholder="your@email.com" required value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--rose-gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Subject</label>
                <input type="text" placeholder="Internship / Collaboration / Project..." value={formState.subject}
                  onChange={e => setFormState(s => ({ ...s, subject: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--rose-gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontFamily: 'Space Mono, monospace', fontSize: '10px', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Message</label>
                <textarea placeholder="Tell me about your project or opportunity..." required rows={6} value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--rose-gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
              <motion.button type="submit" disabled={sending || sent}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(201,149,106,0.3)' }} whileTap={{ scale: 0.98 }}
                style={{ width: '100%', padding: '16px', background: sent ? 'linear-gradient(135deg, #4ade80, #22c55e)' : 'linear-gradient(135deg, #9a6840, #c9956a, #e8b49a)', border: 'none', borderRadius: '3px', color: 'var(--bg-primary)', fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, cursor: sending || sent ? 'default' : 'pointer', transition: 'background 0.4s ease' }}>
                {sent ? '✓ Message Sent!' : sending ? 'Sending...' : 'Send Message ✦'}
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <div style={{ padding: '28px', border: '1px solid var(--border)', borderLeft: '3px solid var(--rose-gold)', borderRadius: '4px', background: 'rgba(26,18,21,0.5)', marginBottom: '36px' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontStyle: 'italic', fontWeight: 300, color: 'var(--white)', lineHeight: 1.6, marginBottom: '12px' }}>
                &ldquo;The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.&rdquo;
              </p>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: 'var(--rose-gold)', letterSpacing: '2px' }}>— Gene Spafford</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {socials.map((s, i) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ x: 6 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 18px', border: '1px solid var(--border)', borderRadius: '4px', background: 'rgba(26,18,21,0.4)', textDecoration: 'none', transition: 'border-color 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = s.color}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  <span style={{ fontSize: '18px', color: s.color, width: '28px', textAlign: 'center' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2px' }}>{s.label}</div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', color: 'var(--white-dim)' }}>{s.handle}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '12px' }}>↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
