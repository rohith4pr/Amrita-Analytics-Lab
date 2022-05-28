import { NavLink,useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';
import './signup.css';
import logo from '../logo.svg';
import logoLogin from '../logoLogin.svg';

const SignUp = ({user,setUser}) =>{
  useEffect(() => {
    document.title = "Sign Up"
 }, []);

  const[tempUser,setTempUser] = useState("");
  const[tempPassword,setTempPassword] = useState("");
  const[tempConfirmPassword,setTempConfirmPassword] = useState("");
  const[tempUserFirstname,setTempUserFirstname] = useState("");
  const[tempUserSecondname,setTempUserSecondname] = useState("");

  const[flag,setFlag] = useState(0);
  let navigate = useNavigate();

  const signupButtonAction = async () => {
    setFlag(0);
    if(tempPassword !== tempConfirmPassword){
      setFlag(3);
      return;
    }

    const result = await fetch(`/api/signup-user-auth`, {
        method: 'post',
        body: JSON.stringify({ tempUser, tempPassword,  tempUserFirstname, tempUserSecondname, 
                                "social" : {
                                  "twitter" : "",
                                  "instagram" : "",
                                  "facebook" : "",
                                  "linkedin" : "",
                                  "pinterest" : ""
                                }}),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const body = await result.json();
    if( body["res"] === "useralreadyexist"){
      setFlag(2);
    }
    else if ( body["res"] === "newuseradded"){
      setFlag(1);
      setUser(tempUser);
      navigate("/blogs");
    }
    else{
      console.log(body["res"]);
    }
  }

  return(
    <div>
      <nav>
          <ul>
              <li className='logo'> 
                  <NavLink style={{display:'flex', flexDirection:'row', color: 'inherit', textDecoration: 'inherit'}} to="/">
                      <img className='hovershit'alt='some value' src={logo}/> 
                      <div className='amritha hovershit'>AMRITA</div>
                      <div className='amrithaINNER hovershit'>ANALYTICS LAB</div>
                  </NavLink>
              </li>
          </ul>
        </nav>
        <div className='main-container'>
            <div className='hero-container'>
                <div className='hero'>
                  <div>
                    <p style={{fontFamily:'Montserrat', fontStyle: 'normal', fontWeight:'700', fontSize:'40px', lineHeight: '49px', padding:'10px 40px',color:'white'}}>
                      Create new account
                    </p>
                  </div>
                  <div style={{display:'flex', paddingRight: '150px'}}>
                        <input  value={tempUserFirstname} onChange={(e) => setTempUserFirstname(e.target.value)}  style={{borderBottom: '1px solid #FFFFFF', marginBottom:'50px'}} type="email" className="FormField2" placeholder="FIRST NAME" name="name" id='firstname' required />
                        <input  value={tempUserSecondname} onChange={(e) => setTempUserSecondname(e.target.value)}  style={{borderBottom: '1px solid #FFFFFF'}} type="email" className="FormField2" placeholder="LAST NAME" name="name" id='lastname' required />
                  </div>
                  <input  value={tempUser} onChange={(e) => setTempUser(e.target.value)}  style={{borderBottom: '1px solid #FFFFFF'}} type="email" className="FormField" placeholder="USERNAME" name="name" id='username' required />
                  { flag === 2 && <p>Username already exsists!</p>}
                  <input  value={tempPassword} onChange={(e) => setTempPassword(e.target.value)}  style={{borderBottom: '1px solid #FFFFFF', marginTop : '70px'}}type="password" className="FormField" placeholder="PASSWORD" name="name" id='password' required />
                  <input  value={tempConfirmPassword} onChange={(e) => setTempConfirmPassword(e.target.value)}  style={{borderBottom: '1px solid #FFFFFF', marginTop : '70px'}}type="password" className="FormField" placeholder="CONFIIRM PASSWORD" name="name" id='confirmpassword' required />
                  { flag === 3 && <p>Your password does not match !</p>}
                  <div onClick={signupButtonAction} className='buttonstuffLogin'>
                      SIGN UP
                  </div>
                
                </div>
                <div className="signUpRight">
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
    </div>
    
  )
}

export default SignUp;
