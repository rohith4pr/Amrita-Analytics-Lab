import React from 'react';   
import logo from './logo.svg';
import menu from './menu.png';

const NavBar = () => (
    <nav>
        <ul>
            <li className='logo'> 
                <img width='60px' alt='some value' src={logo}/> 
                <div className='amritha'>AMRITA</div>
                <div className='amrithaINNER'>ANALYTICS LAB</div>
            </li>
            <li className='right'>
                HOME
            </li>
            <li className='right'>
                BLOG
            </li>
            <li className='right'>
                SERVICES
            </li>
            <li className='right'>
                CONTACT
            </li>
            <li style={{marginRight : '70px'}} className='right'>
                LOGIN
            </li>
            <li>
            <img className='hammenu' style={{marginTop : '5px'}} width='42px' height='50px' alt='some value' src={menu}/> 
            </li>
        </ul>
    </nav>
);

export default NavBar;