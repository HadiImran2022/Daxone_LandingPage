import { Alert } from 'bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection';
import Banner from './components/Banner/Banner';
import All_Products from './components/AllProducts/All_Products';
import BestSell from './components/BestSell/BestSell';
import Discount from './components/DiscountSec/Discount';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Banner/>
     <BestSell/>
     <Discount/>
     <All_Products/>
     <Footer/>
    </>
  );
}

export default App;