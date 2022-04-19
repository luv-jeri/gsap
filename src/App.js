import { gsap } from 'gsap';
import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {
  const cursor = useRef(null);
  const cursorDOT = useRef(null);

  const updateCursor = (e) => {
    gsap.to('.cursor', {
      duration: 0.1,
      x: e.clientX,
      y: e.clientY,
      ease: 'power1.inOut',
    });

    cursorDOT.current.style.left = `${e.clientX}px`;
    cursorDOT.current.style.top = `${e.clientY}px`;
  };
  useEffect(() => {
    document.addEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div>
      <div className='cursor' ref={cursor}></div>
      <div className='cursorDOT' ref={cursorDOT}></div>
    </div>
  );
}

export default App;
