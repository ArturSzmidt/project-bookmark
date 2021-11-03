import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Faq from './components/FaqCopy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
