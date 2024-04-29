// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Menu from './components/Header/Menu';
import BlurredBackground from './components/Header/BlurredBackground';
import BurgerContainer from './components/Header/BurgerContainer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollUp from './components/Utils/ScrollUp';
import Spinner from "./components/Utils/Spinner";


const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Spinner setLoading={setLoading} />
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default App;

