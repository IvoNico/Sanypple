import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfKmutdcZ9Gmf6PoCKh01FhoaqQDz4ZkI",
  authDomain: "sanypple-reactcoderhouse.firebaseapp.com",
  projectId: "sanypple-reactcoderhouse",
  storageBucket: "sanypple-reactcoderhouse.appspot.com",
  messagingSenderId: "696294210474",
  appId: "1:696294210474:web:bd607c4ffd6bffc55e49d3"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



