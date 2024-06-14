import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Meet from './components/Meet/Meet';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Reviews from './components/Reviews/Reviews';
import Stats from './components/Stats/Stats';
import ToolsYouNeed from './components/ToolsYouNeed/ToolsYouNeed';
import Layout from './components/ui/Layout';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  once: true,
});

function App() {
  return (
    <main>
      <Navbar />
      <Layout maxWidth='max-w-[1440px]'>
        <Hero />
        <ToolsYouNeed />
        <Info />
        <Meet />
        <Stats />
        <Reviews />
        <Projects />
        <Features />
        <Contact />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
