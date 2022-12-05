import "./App.css";
import Add from "./components/Add";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="bg-[#232f3e]">
      {/* Navbar */}
      <Navbar />
      {/* Add */}
      <Add />
      {/* Hero */}
      <Hero />
      {/* Products */}
      <Products />
      {/* Deals */}
      {/* Trending */}
      {/* Footer */}
      <Footer />
      {/* <div className="bg-[#eaeded] h-screen"></div> */}
    </div>
  );
}

export default App;
