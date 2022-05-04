import React from 'react';   
import logo from './logo.svg';

const NavBar = () => (
    <nav>
        <ul>
            <li className='logo'> 
                <img alt='some value' src={logo}/> 
                <div className='amritha'>AMRITHA</div>
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
        </ul>
    </nav>
);

export default NavBar;