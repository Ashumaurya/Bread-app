import Navbar from "./components/navbar";
import HeroArea from "./components/hero";
import MainSection from "./components/main";
import Footer from "./components/footer";
function App() {
  return (
    <div className='App container-fluid'>
      <Navbar />
      <HeroArea />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
