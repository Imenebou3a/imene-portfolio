import { motion } from 'framer-motion';

export default function Logo({ size = 48 }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Outer decorative ring */}
      <motion.circle
        cx="30" cy="30" r="28"
        stroke="url(#logoGrad)"
        strokeWidth="1"
        strokeDasharray="4 2"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '30px 30px' }}
      />
      {/* Inner circle */}
      <circle cx="30" cy="30" r="22" stroke="url(#logoGrad)" strokeWidth="1.5" fill="rgba(26,18,21,0.8)" />
      
      {/* Decorative corner marks */}
      <line x1="4" y1="30" x2="8" y2="30" stroke="#c9956a" strokeWidth="1" />
      <line x1="52" y1="30" x2="56" y2="30" stroke="#c9956a" strokeWidth="1" />
      <line x1="30" y1="4" x2="30" y2="8" stroke="#c9956a" strokeWidth="1" />
      <line x1="30" y1="52" x2="30" y2="56" stroke="#c9956a" strokeWidth="1" />

      {/* I letter */}
      <text
        x="18"
        y="38"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="300"
        fontSize="22"
        fill="url(#logoGrad)"
        letterSpacing="-1"
      >
        IB
      </text>

      {/* Small dot accent */}
      <circle cx="30" cy="14" r="1.5" fill="#c9956a" />
      <circle cx="30" cy="46" r="1.5" fill="#c9956a" />

      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8b49a" />
          <stop offset="50%" stopColor="#c9956a" />
          <stop offset="100%" stopColor="#9a6840" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
