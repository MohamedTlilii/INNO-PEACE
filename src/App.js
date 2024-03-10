import "./App.css";
import NavbarFromBootsTrap from "./Components/Navbar/NavbarFromBootsTrap";
import Hero from "./page/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Projects from "./page/Projects/Projects";

function App() {
  return (
    <div>
      <NavbarFromBootsTrap />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
