import React from 'react'
import '../css/form.css'

export default function FormLog({ title, setPassword, setEmail, handleAction }) {
  return (
    <div className='d-flex flex-row justify-content-center'>
      <div className='form'>
        <h3>{title}</h3>
        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          required

        />
        <br />
        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          required

        />
        <br />
        <button
          className='subBtn btn btn-success'
          onClick={handleAction}
        >{title}
        </button>
      </div>
    </div>
  )
}
