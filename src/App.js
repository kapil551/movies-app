import './App.css';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App h-screen">

      {/*  */}
      <Navbar />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
