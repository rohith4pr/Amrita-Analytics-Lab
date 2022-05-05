import './App.css';
import HomeMain from './pages/HomeMain';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
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
          <Routes>
            <Route exact path="/" element={<HomeMain />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
