// page.jsx
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Vault from "./components/Vault";
import Cube from "./components/Cube";
import Nutshel from "./components/Nutshel";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Vault />
      <Cube />
      <Nutshel />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
