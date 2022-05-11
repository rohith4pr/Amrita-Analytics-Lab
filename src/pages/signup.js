import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './signup.css';
import logo from '../logo.svg';
import logoLogin from '../logoLogin.svg';

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
                <p>Already have an account?<span>Click here</span></p>
              </div>
              <div>
                <p style={{font:'montserrat', fontWeight:'bolder', fontSize:'50px', padding:'10px 40px',color:'white'}}>SignUp</p>
              </div>
              <div style={{flex:'flex'}}>
                    <input style={{borderBottom: '1px solid #FFFFFF',marginBottom:'50px'}} type="email" className="FormField" placeholder="FIRST NAME" name="name" id='name' required />
                    <input style={{borderBottom: '1px solid #FFFFFF'}} type="email" className="FormField" placeholder="LAST NAME" name="name" id='name' required />
              </div>
              <input style={{borderBottom: '1px solid #FFFFFF'}} type="email" className="FormField" placeholder="USERNAME" name="name" id='name' required />
              <input style={{borderBottom: '1px solid #FFFFFF', marginTop : '70px'}}type="password" className="FormField" placeholder="PASSWORD" name="name" id='name' required />
              <input style={{borderBottom: '1px solid #FFFFFF', marginTop : '70px'}}type="password" className="FormField" placeholder="CONFIIRM PASSWORD" name="name" id='name' required />
            
              <div className='buttonstuffLogin'>
                  SIGN UP
              </div>
             
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'120px',marginTop:'80px'}}>
                <div style={{marginLeft:'30px'}}>
                    <img width='200px' alt='some value' src={logoLogin}/> 
                </div>
                <div>
                    <div className='amrithaLogin'>AMRITA</div>
                    <div className='amrithaINNERLogin'>ANALYTICS LAB</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;