import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import Nopage from './pages/Nopage';
import Signup from './pages/Signup';
import Table from './pages/Table';
function App() {

  return (
    <>
      <p>navigations</p>
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
    </>
  )
}

export default App
