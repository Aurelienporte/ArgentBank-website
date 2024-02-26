import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './Pages/Home/Home.jsx';
// import SignIn from './Pages/SignIn/SignIn.jsx'
// import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Home />
    {/* <SignIn></SignIn> */}
    {/* <Dashboard></Dashboard> */}
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
