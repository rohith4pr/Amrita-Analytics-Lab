import './App.css';
import NavBar from './NavBar';
import HomeMain from './pages/HomeMain';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <HomeMain />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
