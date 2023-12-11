import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import Adder from './pages/adder.jsx';
import App from './App.jsx';
import Blogs from './pages/blogs.jsx';
import { Provider } from 'react-redux';
import { store } from "./redux/store.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Adder",
    element: <Adder />,
  },
  {
    path: "/Blogs",
    element: <Blogs />,
  },


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);

