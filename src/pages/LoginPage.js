//import NavBar from '../NavBar';
import { useEffect,useState } from 'react';
import logo from '../logo.svg';
import logoLogin from '../logoLogin.svg';
import { NavLink } from 'react-router-dom';
const LoginPage = ({user,setUser}) => {
  useEffect(() => {
    document.title = "Login"
  }, []);

  const[tempUser,setTempUser] = useState("");
  const[tempPassword,setTempPassword] = useState("");

  const loginButtonAction = async () => {

    console.log(tempUser);
    console.log(tempPassword);
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
          <h1>Login your account</h1>
          <input style={{borderBottom: '1px solid #FFFFFF'}} onChange={(e)=>setTempUser(e.target.value)} value={tempUser} type="email" className="FormField" placeholder="USERNAME" name="name" id='name' required />
          {/* <div style={{borderBottom: '1px solid #FFFFFF',marginLeft: '40px' , marginRight : '40px'}}>
          </div> */}
          <input style={{borderBottom: '1px solid #FFFFFF', marginTop : '70px'}} onChange={(e)=>setTempPassword(e.target.value)} value={tempPassword} type="password" className="FormField" placeholder="PASSWORD" name="name" id='name' required />
          {/* <div style={{borderBottom: '1px solid #FFFFFF',marginLeft: '40px' , marginRight : '40px'}}>
          </div> */}
          <div onClick={loginButtonAction} className='buttonstuffLogin'>
            LOGIN
          </div>
        </div>
        <div className="LoginRight">
          <div>
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

export default LoginPage;