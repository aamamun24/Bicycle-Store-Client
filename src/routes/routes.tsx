import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
