import './App.css';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { Shop } from './components/Shop';

function App() {
  return (
    <div className="App text-stone-900">
      <Navbar/>
      <Hero/>
      <Product/>
      <Shop/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
