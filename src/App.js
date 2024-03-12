import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rent from './components/Rent';
import Recept from './components/Recept';
import Transport from './components/Transport';
import Footer from './components/Footer';
import WppButton from './components/WppButton';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rent></Rent>
      <Recept></Recept>
      <Transport></Transport>
      <WppButton></WppButton>
      <Footer></Footer>
    </div>

  );
}

export default App;
