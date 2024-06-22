/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Menu from './components/Header/Menu';
import BlurredBackground from './components/Header/BlurredBackground';
import BurgerContainer from './components/Header/BurgerContainer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollUp from './components/Utils/ScrollUp';
import Spinner from './components/Utils/Spinner';

const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <>
      {loading && <Spinner setLoading={setLoading} />}
      <div style={{ display: loading ? 'none' : 'block' }}>
        <header>
          {open && <BlurredBackground />}
          <BurgerContainer open={open} setOpen={setOpen} />
          <Menu open={open} closeMenu={() => setOpen(false)} />
        </header>
        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
        {!open && <ScrollUp visible={false} />}
      </div>
    </>
  );
};

export default App;
