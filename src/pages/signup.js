import '../service.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './signup.css';
import logo from '../logo.svg';

const SignUp = ({user}) =>{
  useEffect(() => {
    document.title = "Sign Up"
 }, []);
  return(
    <div className='main-container Home'>
       <nav>
          <ul>
              <li className='logo'> 
                  <NavLink style={{display:'flex', flexDirection:'row', color: 'inherit', textDecoration: 'inherit'}} to="/">
                      <img className='hovershit' width='60px' alt='some value' src={logo}/> 
                      <div className='amritha hovershit'>AMRITA</div>
                      <div className='amrithaINNER hovershit'>ANALYTICS LAB</div>
                  </NavLink>
              </li>
          </ul>
        </nav>
        <div className='hero-container'>
            <div className='hero'>
              <div>
                <p style={{font:'montserrat', fontWeight:'bolder', fontSize:'30px', padding:'10px 20px'}}>SignUp</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;