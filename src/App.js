import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Pat from './components/hero/Pat';
import Services from './components/services/Services';
import Project from './components/projectShowcase/Project';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='bg-[#232932] overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Pat/>
      <Services/>
      <Project/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
