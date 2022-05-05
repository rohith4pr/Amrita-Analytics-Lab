import React from 'react';   
import logo from './logo.svg';
import menu from './menu.png';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li className='logo'> 

                <img className='hovershit' width='60px' alt='some value' src={logo}/> 
                <div className='amritha hovershit'>AMRITA</div>
                <div className='amrithaINNER hovershit'>ANALYTICS LAB</div>
            </li>
            <li className='right'>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"> HOME </Link>
            </li>
            <li className='right'>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/blogs"> BLOG </Link>
            </li>
            <li className='right'>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/services"> SERVICES </Link>
            </li>
            <li className='right'>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/contact"> CONTACT </Link>
            </li>
            <li style={{marginRight : '70px'}} className='right'>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login"> LOGIN </Link>
            </li>
            <li>
            <img className='hammenu' style={{marginTop : '5px'}} width='42px' height='50px' alt='some value' src={menu}/> 
            </li>
        </ul>
    </nav>
);

export default NavBar;