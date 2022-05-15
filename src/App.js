import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
