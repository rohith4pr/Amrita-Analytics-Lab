//import NavBar from '../NavBar';
import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import logoLogin from '../logoLogin.svg';
import { NavLink } from 'react-router-dom';
const LoginPage = () => {
  useEffect(() => {
    document.title = "Login"
  }, []);

  const[tempUser,setTempUser] = useState("");
  const[tempPassword,setTempPassword] = useState("");

  const loginButtonAction = async () => {

    const result = await fetch(`/api/login-user-auth`, {
        method: 'post',
        body: JSON.stringify({ tempUser, tempPassword }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const body = await result.json();
    console.log(body);
  }

  
  return(
    <div >
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
       

      <div className="LoginMain">
        <div className="LoginLeft">
          <h2>Login your account</h2>
          <input value={tempUser} onChange={(e) => setTempUser(e.target.value)} style={{borderBottom: '1px solid #FFFFFF'}} type="email" className="FormField" placeholder="USERNAME" id='name' required />
          <input value={tempPassword} onChange={(e) => setTempPassword(e.target.value)} style={{borderBottom: '1px solid #FFFFFF', marginTop : '70px'}}type="password" className="FormField" placeholder="PASSWORD" id='password' required />
          <div style={{display:'flex'}}>
            <div onClick={ ()=>loginButtonAction() } className='buttonstuffLogin'>
              LOGIN
            </div>
            <div className='buttonstuffLogin' style={{marginLeft:'100px'}}>
              <NavLink style={{ textDecoration:'inherit', color:'inherit' }}  to="/signup"> SIGNUP </NavLink>
            </div>
          </div>
        </div>
        <div className="LoginRight">
          <div>
            <img width='300px' alt='some value' src={logoLogin}/> 
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

export default LoginPage;