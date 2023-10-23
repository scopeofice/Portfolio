import React, { useEffect, useState } from 'react';
import './CursorStyle.css';

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    function moveCursor(e) {
      const x = e.clientX;
      const y = e.clientY;
      setCursorPosition({ x, y });
    }

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const links = Array.from(document.querySelectorAll('a'));

  const handleLinkMouseOver = () => {
    setIsLinkHovered(true);
    const innerCursor = document.querySelector('.inner-cursor');
    innerCursor.classList.add('grow');
  };

  const handleLinkMouseOut = () => {
    setIsLinkHovered(false);
    const innerCursor = document.querySelector('.inner-cursor');
    innerCursor.classList.remove('grow');
  };

  links.forEach((link) => {
    link.addEventListener('mouseover', handleLinkMouseOver);
    link.addEventListener('mouseout', handleLinkMouseOut);
  });

  return (
    <div>
      <div
        className={`inner-cursor ${isLinkHovered ? 'grow' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
      </div>
    </div>
  );
}
