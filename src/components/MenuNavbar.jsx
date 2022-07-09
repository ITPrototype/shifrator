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
    <div className='menuTop'>
      <ul className='d-flex justify-content-between align-items-center'>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!auth ? <span id='logreg' className='d-flex flex-row justify-content-between'><li><Link to="/login">Login</Link></li><li><Link to="register">Register</Link></li></span> : <button onClick={logout} className="btn btn-danger">Logout</button> }
      </ul>
      <hr />
    </div>
  )
}
