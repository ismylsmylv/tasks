import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
