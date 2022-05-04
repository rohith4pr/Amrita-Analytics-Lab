import './App.css';
import NavBar from './NavBar';
import HomeMain from './components/HomeMain';
import Home2 from './components/Home2';
import HomeUnder from './components/HomeUnder';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className='Home'>
        <HomeMain />
      </div>
      <div>
        <Home2 />
      </div>
      <div>
        <HomeUnder />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
