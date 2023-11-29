import './App.css'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Table from './pages/Table';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Nopage from './pages/Nopage';
import Add from './pages/Add';
function App() {

  return (
    <>
      <p>navigations</p>
      <BrowserRouter>
        <Routes>

          <Route path='/' index element={<Home />} />
          <Route path='/table'>
            <Route index element={<Table />} />
            <Route path='/table/add' element={<Add />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Nopage />} />
        </Routes>



      </BrowserRouter>

    </>
  )
}

export default App
