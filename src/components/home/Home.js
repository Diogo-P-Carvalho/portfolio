import { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';

function Home() {
  useEffect(() => {
    const typed = new Typed("#typed", {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 700,
      startDelay: 0,
      loop: true
    })

    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <main>
      <div className="main-container">
        <h1>Hello, <br />
          <span id="typed-strings">
            <span>I'm Diogo Carvalho</span>
            <span>Software Developer</span>
            <span>And Coffee Lover!</span>
          </span>
          <span id="typed"></span>
        </h1>
      </div>
    </main>
  );
}

export default Home;