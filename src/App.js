import "./App.css";
import {
  Add,
  Deals,
  Footer,
  Hero,
  Navbar,
  Products,
  Trending,
} from "./components";

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
      <Deals />
      {/* Trending */}
      <Trending />
      {/* Footer */}
      <Footer />
      {/* <div className="bg-[#eaeded] h-screen"></div> */}
    </div>
  );
}

export default App;
