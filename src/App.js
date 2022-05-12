import './App.css';
import HomeMain from './pages/HomeMain';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import BlogPost from './pages/BlogPost';
import SignUp from './pages/SignUp';

function App() {

  const [user,setUser] = useState("");

  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route exact path="/" element={<HomeMain user={user} setUser={setUser} />} />
            <Route path="/blogs" element={<BlogPage user={user} setUser={setUser} />} />
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
            <Route path="/services" element={<ServicesPage user={user} setUser={setUser} />} />
            <Route path="/contact" element={<ContactPage user={user} setUser={setUser} />} />
            <Route path="/blogs/blogpost" element={<BlogPost user={user} setUser={setUser} />} />
            <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
            <Route path="*" element={<NotFoundPage user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
