import React,{useState} from 'react';   
import logo from './logo.svg';
//import menu from './menu.png';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = ({user,setUser}) => {

    const[tabState,setTab] = useState(0);
    let navigate = useNavigate();
    const setLogout = () =>{
        setUser("");
        navigate("/");
    }

    const openTab = () =>{
        if(tabState === 0)
            setTab(1)
        else
            setTab(0)
    }

    return(
        <nav>
            <ul>
                <li className='logo'> 
                    <NavLink style={{display:'flex', flexDirection:'row', color: 'inherit', textDecoration: 'inherit'}} to="/">
                        <img className='hovershit' width='60px' alt='some value' src={logo} style={{paddingLeft:'30px'}}/> 
                        <div className='amritha hovershit'>AMRITA</div>
                        <div className='amrithaINNER hovershit'>ANALYTICS LAB</div>
                    </NavLink>
                </li>
                <li className='right'>
                    <NavLink  style={({ isActive }) => ({
                            color: isActive ? '#545e6f' : 'inherit' ,
                            fontWeight : isActive ? 700 : 500,
                            textDecoration: 'inherit',
                        })} 
                     to="/"> HOME </NavLink>
                </li>
                <li className='right'>
                    <NavLink style={({ isActive }) => ({
                            color: isActive ? '#545e6f' : 'inherit' ,
                            fontWeight : isActive ? 700 : 500,
                            textDecoration: 'inherit',
                        })}  to="/blogs"> BLOG </NavLink>
                </li>
                <li className='right'>
                    <NavLink style={({ isActive }) => ({
                            color: isActive ? '#545e6f' : 'inherit' ,
                            fontWeight : isActive ? 700 : 500,
                            textDecoration: 'inherit',
                        })}  to="/services"> SERVICES </NavLink>
                </li>
                <li className='right'>
                    <NavLink style={({ isActive }) => ({
                            color: isActive ? '#545e6f' : 'inherit' ,
                            fontWeight : isActive ? 700 : 500,
                            textDecoration: 'inherit',
                        })}  to="/contact"> CONTACT </NavLink>
                </li>
                <li style={{marginRight : '70px'}} className='right'>
                    {(user !=="") ? (
                        <div onClick={setLogout} style={{
                            color: 'inherit' ,
                            fontWeight : 500,
                            textDecoration: 'inherit',
                        }} > LOGOUT </div>
                    ) : (
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#545e6f' : 'inherit' ,
                            fontWeight : isActive ? 700 : 500,
                            textDecoration: 'inherit',
                        })}  to="/login"> LOGIN </NavLink>
                    )
                    }
                </li>
                <li>
                    <div onClick={openTab} className='hammenu hamburger-lines'>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>  
                
                </li>
            </ul>
            <div className={(tabState === 0 ? 'sidebar-nav' : 'sidebar-nav-open')}>
                <ul className='sidebar-ul'>
                    <li >
                        <NavLink  style={({ isActive }) => ({
                                color: isActive ? '#FFFFFF' : '#545e6f' ,
                                fontWeight : isActive ? 700 : 500,
                                textDecoration: 'inherit',
                            })} 
                        to="/"> HOME </NavLink>
                    </li>
                    <li >
                        <NavLink style={({ isActive }) => ({
                                color: isActive ? '#FFFFFF' : '#545e6f' ,
                                fontWeight : isActive ? 700 : 500,
                                textDecoration: 'inherit',
                            })}  to="/blogs"> BLOG </NavLink>
                    </li>
                    <li >
                        <NavLink style={({ isActive }) => ({
                                color: isActive ? '#FFFFFF' : '#545e6f' ,
                                fontWeight : isActive ? 700 : 500,
                                textDecoration: 'inherit',
                            })}  to="/services"> SERVICES </NavLink>
                    </li>
                    <li >
                        <NavLink style={({ isActive }) => ({
                                color: isActive ? '#FFFFFF' : '#545e6f' ,
                                fontWeight : isActive ? 700 : 500,
                                textDecoration: 'inherit',
                            })}  to="/contact"> CONTACT </NavLink>
                    </li>
                    <li  >
                        {(user !=="") ? (
                            <div onClick={setLogout} style={{
                                color: '#545e6f' ,
                                fontWeight : 500,
                                textDecoration: 'inherit',
                            }} > LOGOUT </div>
                        ) : (
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#FFFFFF' : '#545e6f' ,
                                fontWeight : isActive ? 700 : 500,
                                textDecoration: 'inherit',
                            })}  to="/login"> LOGIN </NavLink>
                        )
                        }
                    </li>
            
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;