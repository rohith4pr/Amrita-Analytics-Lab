import NavBar from '../NavBar';
import { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login"
  }, []);
  return(
    <div className="Home">
        <div>
          <NavBar />
        </div>
        LoginPage
    </div>
  )
}

export default LoginPage;