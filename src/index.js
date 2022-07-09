import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app'


firebase.initializeApp({
  apiKey: "AIzaSyDtERXM_qc7PigkF9ZLTfWHkmXsu2gEdNA",
  authDomain: "fb-auth-secret-chat.firebaseapp.com",
  projectId: "fb-auth-secret-chat",
  storageBucket: "fb-auth-secret-chat.appspot.com",
  messagingSenderId: "606924560335",
  appId: "1:606924560335:web:2e14ad9605a913886d24ba",
  measurementId: "G-SEPC9WH85M"
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


