// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from './router-navbar/Navebar';
// import Clintvideo from './router-navbar/Clintvideo';
import Package from './router-navbar/Package';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Navebar" element={<Navebar />} />
      {/* <Route path="/Clintvideo" element={<Clintvideo />} /> */}
      <Route path="/Package" element={<Package />} />
      {/* <Route path='Ecommerce' element={<Ecommerce />} />
      <Route path='Todolist' element={<Todolist />} />
     */}
  </Routes>
</BrowserRouter>
);
