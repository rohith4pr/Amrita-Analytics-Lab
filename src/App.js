import './App.css';
import NavBar from './NavBar';
import HomeMain from './pages/HomeMain';
import Footer from './Footer';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<HomeMain />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
