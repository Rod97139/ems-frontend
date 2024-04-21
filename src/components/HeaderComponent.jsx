import React from 'react'
import { Link } from 'react-router-dom'


const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar bg-dark border-bottom border-body'>
            <Link to='/' className="navbar-brand text-light">Employee Management System</Link>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
