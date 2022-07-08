import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app'


firebase.initializeApp({
  apiKey: "AIzaSyCQd3z5Mf2H9jqz_L4JV7rlKlQOYno5UCI",
  authDomain: "auth-app-test-d247f.firebaseapp.com",
  projectId: "auth-app-test-d247f",
  storageBucket: "auth-app-test-d247f.appspot.com",
  messagingSenderId: "1075672601907",
  appId: "1:1075672601907:web:9ed669af445a76a8cb9a46",
  measurementId: "G-J3YGM04XLY"
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


