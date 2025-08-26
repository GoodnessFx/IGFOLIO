 
import './App.css';

import Contact from './sections/Hero/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Hero/Skills/Skills';
import Footer from './sections/Footer/Footer';

import Projects from './sections/Hero/Projects/Projects';
import { ThemeProvider } from './common/ThemeContext.jsx';
function App() {
  return(
       <>
      <ThemeProvider>
      <Hero/>
      <Projects/>
      <Skills />
      <Contact />
      <Footer/>

      </ThemeProvider>
      </>
  );
}

export default App;
