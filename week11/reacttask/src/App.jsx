import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import About from './pages/About'
import AddCategory from './pages/AddCategory'
import Categories from './pages/Categories'
import CategoryDetail from './pages/CategoryDetail'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/AddCategory" element={<AddCategory />} />
          <Route path="/CategoryDetail/:id" element={<CategoryDetail />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
