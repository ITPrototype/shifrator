import './App.css';
import MenuNavbar from './components/MenuNavbar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FormLog from './components/FormLog';
import { useEffect, useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function App() {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAction = (id) => {
    const authentication = getAuth();
    if (email === '' && password === '') {
      Swal.fire({
        title:'Error',
        text:'Empty field!',
        icon:'error',
        confirmButtonText:'Ok'
      })
    } else {


      if (password.length > 6) {
        if (id === 2) {
          createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
              navigate('/')
              localStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            })
            .catch((err) => {
              Swal.fire({
                title:'Error',
                text:`${err.message}`,
                icon:'error',
                confirmButtonText:'Ok'
              })
            })
        }
        if (id === 1) {
          signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
              navigate('/')
              localStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            })
            .catch((err) => {
              Swal.fire({
                title:'Error',
                text:`${err.message}`,
                icon:'error',
                confirmButtonText:'Ok'
              })
            })
        }
      } else {
        alert('Password should be at least 6 or more charactes')
      }
    }
  }
  useEffect(() => {
    let authToken = localStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/')
    }
  }, [])
  return (
    <div className="App">
      <MenuNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            <FormLog
              title={'Login'}
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />}
        />
        <Route
          path='/register'
          element={
            <FormLog
              title={'Register'}
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />}
        />
      </Routes>
    </div>
  );
}

export default App;
