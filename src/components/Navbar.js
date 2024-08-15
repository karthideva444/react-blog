import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
      <div className='container'> 
        <h1>Blog</h1>
        <nav>
          <Link to='/'><h4>Home</h4></Link>
          <Link to='/create'><h4>Createpost</h4></Link>
        </nav>
      </div>
    </header>
  )
}
