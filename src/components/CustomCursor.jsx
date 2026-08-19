import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    let animId;
    const animateFollower = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = followerPos.current.x + 'px';
        followerRef.current.style.top = followerPos.current.y + 'px';
      }
      animId = requestAnimationFrame(animateFollower);
    };
    animateFollower();

    const handleMouseDown = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0.7)';
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    };
    const handleMouseUp = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const handleHover = () => {
      if (followerRef.current) {
        followerRef.current.style.width = '60px';
        followerRef.current.style.height = '60px';
        followerRef.current.style.borderColor = 'var(--pink-neon)';
      }
    };
    const handleHoverLeave = () => {
      if (followerRef.current) {
        followerRef.current.style.width = '36px';
        followerRef.current.style.height = '36px';
        followerRef.current.style.borderColor = 'var(--rose-gold)';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const interactives = document.querySelectorAll('a, button, [data-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ transform: 'translate(-50%, -50%)' }} />
      <div ref={followerRef} className="cursor-follower" style={{ transform: 'translate(-50%, -50%)' }} />
    </>
  );
}
