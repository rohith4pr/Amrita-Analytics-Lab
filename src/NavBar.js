import React from 'react';   
import logo from './logo.svg';
import menu from './menu.png';
import { NavLink } from 'react-router-dom';

const NavBar = ({user}) => (
    <nav>
        <ul>
            <li className='logo'> 
                <NavLink style={{display:'flex', flexDirection:'row', color: 'inherit', textDecoration: 'inherit'}} to="/">
                    <img className='hovershit' width='60px' alt='some value' src={logo}/> 
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
            <li style={{marginRight : '0px'}} className='right'>
                {(user !=="") ? (
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? '#545e6f' : 'inherit' ,
                        fontWeight : isActive ? 700 : 500,
                        textDecoration: 'inherit',
                    })}  to="/contact"> CONTACT </NavLink>
                ) : (
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? '#545e6f' : 'inherit' ,
                        fontWeight : isActive ? 700 : 500,
                        textDecoration: 'inherit',
                    })}  to="/login"> LOGIN </NavLink>
                )
                }
                
            </li>
            <li style={{marginRight : '70px', fontSize:'7px'}} className='right'>
                <NavLink style={({ isActive }) => ({
                        color: isActive ? '#545e6f' : 'inherit' ,
                        fontWeight : isActive ? 700 : 500,
                        textDecoration: 'inherit',
                    })}  to="/blogs/blogpost"> Dummy-Blogpost </NavLink>
            </li>
            <li>
            <img className='hammenu' style={{marginTop : '5px'}} width='42px' height='50px' alt='some value' src={menu}/> 
            </li>
        </ul>
    </nav>
);

export default NavBar;