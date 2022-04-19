import { gsap } from 'gsap';
import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {
  const l1 = useRef(null);
  const l2 = useRef(null);
  const l3 = useRef(null);
  const l4 = useRef(null);
  const cursor = useRef(null);
  const cursorDOT = useRef(null);

  const [ani, setAni] = useState(null);

  const tween = {
    duration: 1,
    x: 90,
    ease: 'power2.inOut',
  };

  const updateCursor = (e) => {
    // generate random clip path
    gsap.to('.cursor', {
      duration: 0.1,
      x: e.clientX,
      y: e.clientY,
      ease: 'power1.inOut',
    });
    // cursor.current.style.left = `${e.clientX}px`;
    // cursor.current.style.top = `${e.clientY}px`;
    cursorDOT.current.style.left = `${e.clientX}px`;
    cursorDOT.current.style.top = `${e.clientY}px`;
  };
  useEffect(() => {
    // document.addEventListener('mousemove', updateCursor);
    const test = gsap.to(l1.current, tween);
    test.pause();

    setAni(test);
  }, []);

  //  function handleMouseMove(ev) {
  //    console.log({ left: ev.pageX, top: ev.pageY });
  //  }
  return (
    <>
      {/* <div className='cursor' ref={cursor}></div>
      <div className='cursorDOT' ref={cursorDOT}></div> */}
      <div
        // onMouseMove={(ev) => handleMouseMove(ev)}
        onClick={(e) => {
          console.log(e.target.id);

          if (e.target.id == 'level1') {
            ani.reverse();
          }
          if (e.target.id == 'level4') {
            ani.play();
          }
        }}
        className='App'
        ref={l1}
        style={{
          color: '#E6D5B8',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          onClick={(e) => {
            console.log('Level 1');
          }}
          id='level1'
          ref={l2}
          style={{
            backgroundColor: '#FF6363',
            padding: '20px',
            borderRadius: '5px',
            margin: '10px',
            height: '100%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Level 1</h1>
          <div
            ref={l3}
            onClick={() => {
              console.log('Level 2');
            }}
            id='level2'
            style={{
              backgroundColor: '#F8B400',
              padding: '20px',
              borderRadius: '5px',
              margin: '10px',
              cursor: 'pointer',
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1>Level 2</h1>
            <div
              onClick={() => {
                console.log('Level 3');
              }}
              id='level3'
              ref={l4}
              style={{
                backgroundColor: '#143F6B',
                padding: '20px',
                borderRadius: '5px',
                margin: '10px',
                cursor: 'pointer',
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1>Level 3</h1>
              <div
                onClick={(e) => {
                  console.log('Level 4');
                }}
                id='level4'
                style={{
                  backgroundColor: '#6BCB77',
                  padding: '20px',
                  borderRadius: '5px',
                  margin: '10px',
                  cursor: 'pointer',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h1>Hello I am child 😎</h1>
                <h1>Level 4</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
