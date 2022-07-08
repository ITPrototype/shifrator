import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/navbar.css'
export default function MenuNavbar() {
  let navigate = useNavigate()
  let auth = localStorage.getItem('Auth Token')
  const logout = () => {
    localStorage.removeItem('Auth Token');
    navigate('/login')
  }
  useEffect(() => {

  }, [auth])
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!auth ? <span><li><Link to="/login">Login</Link></li><li><Link to="register">Register</Link></li></span> : <button onClick={logout}>Logout</button> }
      </ul>
    </div>
  )
}
