import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Testimonial from "./components/testimonial/Testimonial";
import Virtual from "./components/virtlual/Virtual";

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Slider/>
     <Virtual/>
     <Products />
     <Testimonial />
     <Footer/>
    </div>
  );
}

export default App;
