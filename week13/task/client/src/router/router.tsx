import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Artists from "../pages/Artists";
import Navbar from "../components/Navbar";
import App from "../App";
import Details from "../pages/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/artists/:id",
        element: <Details />,
      },
    ],
  },
]);
export default router;
