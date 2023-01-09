import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <ul className='navbar-list'> 
                <li className='nav-ecommerce'><Link to='/'><h1 className='main-title'>e-commerce</h1></Link></li>
                <li className='nav-log'><Link to='/login'><i className="fa-regular fa-user"></i></Link></li>
                <li className='nav-cart'><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link></li>
                <li className='nav-purchases'><Link to='/purchases'><i className="fa-solid fa-bag-shopping"></i></Link></li>
            </ul>
          <div className='line'></div>
        </nav>
    </header>
  )
}

export default Header