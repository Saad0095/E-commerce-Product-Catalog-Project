import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center border-yellow-400 border-b-2 h-12 mb-3 text-black px-3'>
        <div className="logo">
            <h1>E-Buy</h1>
        </div>
        <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Products</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header
