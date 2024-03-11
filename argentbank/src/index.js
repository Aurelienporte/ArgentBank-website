import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";

import './index.css';


import Home from './Pages/Home/Home.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Layout from './utils/layout.jsx';
import {store} from './app/mag.js'

const router = createBrowserRouter([{
  element:<Layout></Layout>,
  children:[
    {
      path: "/",
      element: <Home /> ,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/user",
      element: <Dashboard />,
    },
  ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Layout/>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
