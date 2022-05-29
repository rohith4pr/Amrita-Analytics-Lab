//import NavBar from '../NavBar';
import { useEffect, useState } from 'react';
import logo from '../logo.svg';
import logoLogin from '../logoLogin.svg';
import { NavLink, useNavigate  } from 'react-router-dom';
const LoginPage = ({user,setUser}) => {
  useEffect(() => {
    document.title = "Login"
  }, []);

  const[tempUser,setTempUser] = useState("");
  const[tempPassword,setTempPassword] = useState("");
  const[flag,setFlag] = useState(0);
  const[clicked,setClicked] = useState(false);
  let navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      loginButtonAction();
    }
  }

  const loginButtonAction = async () => {

    

    if(tempUser === ""){
      setFlag(4);
      return;
    }

    if(tempPassword === ""){
      setFlag(5);
      return;
    }

    setClicked(true);
    const result = await fetch(`/api/login-user-auth`, {
        method: 'post',
        body: JSON.stringify({ tempUser, tempPassword }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const body = await result.json();
    if( body["res"] === "notfound"){
      setFlag(2);
    }
    else if ( body["res"] === "passwordcorrect"){
      setFlag(0);
      setUser(tempUser);
      navigate("/blogs");
    }
    else if ( body["res"] === "passwordwrong"){
      setFlag(3);
    }
    else{
      console.log(body["res"]);
    }
    setClicked(false);
  }

  
  return(
    <div >
       <nav>
          <ul>
              <li className='logo'> 
                  <NavLink style={{display:'flex', flexDirection:'row', color: 'inherit', textDecoration: 'inherit'}} to="/">
                      <img className='hovershit' alt='some value' src={logo}/> 
                      <div className='amritha hovershit'>AMRITA</div>
                      <div className='amrithaINNER hovershit'>ANALYTICS LAB</div>
                  </NavLink>
              </li>
          </ul>
        </nav>
        
       

      <div className="LoginMain">
        <div className="LoginLeft">
          <h2>Login your account</h2>
          <input value={tempUser} onKeyDown={handleKeyDown} onChange={(e) => setTempUser(e.target.value) || setFlag(0)} style={{borderBottom: '1px solid #FFFFFF'}} type="email" className="FormField" placeholder="USERNAME" id='name' required />
          { flag === 2 && <p className="hintFont">Your login credentials does not exist !</p>}
          { flag === 4 && <p className="hintFont">Username cannot be empty !</p>}
          <input value={tempPassword} onKeyDown={handleKeyDown} onChange={(e) => setTempPassword(e.target.value) || setFlag(0)} style={{borderBottom: '1px solid #FFFFFF', marginTop : '70px'}}type="password" className="FormField" placeholder="PASSWORD" id='password' required />
          { flag === 3 && <p className="hintFont">Your login credentials could not be verified, please try again !</p>}
          { flag === 5 && <p className="hintFont">Password cannot be empty !</p>}
          <div style={{display:'flex',justifyContent:'flex-start'}}>
            <div onClick={clicked?null:loginButtonAction } className="buttonstuffLogin">
              LOGIN
            </div>
            <div className='buttonstuffSingup'>
              <NavLink style={{ textDecoration:'inherit', color:'inherit' }}  to="/signup"> SIGNUP? </NavLink>
            </div>
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