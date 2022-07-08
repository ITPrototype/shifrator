import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Convert from '../components/Convert'

export default function Home() {
  let navigate = useNavigate()
  useEffect(() => {
    let authToken = localStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/')
    }
    if (!authToken) {
      navigate('/login')
    }
  }, [])
  return (
    <div>
      <Convert/>
    </div>
  )
}
