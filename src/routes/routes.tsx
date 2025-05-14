import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Bicycles from "../pages/bicycles/Bicycles";
import BicycleDetails from "../pages/bicycles/BicycleDetails";
import Checkout from "../pages/checkout/Checkout";
import PaymentSuccess from "../pages/checkout/PaymentSuccess";
import PaymentFail from "../pages/checkout/PaymentFail";
import About from "../pages/about/About";
import ProtectedRoute from "../layouts/ProtectedRoute";
import Dashboard from "../layouts/Dashboard";
import ManageOrders from "../pages/dashboard/order/ManageOrders";
import ManageUsers from "../pages/dashboard/ManageUsers/ManageUsers";
import ManageProducts from "../pages/dashboard/ManageProducts/ManageProducts";
import CreateProduct from "../pages/dashboard/ManageProducts/CreateProduct";
import MyOrders from "../pages/dashboard/order/MyOrders";
import Profile from "../pages/dashboard/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/bicycles",
        element: <Bicycles />,
      },
      {
        path: "/bicycle/:id",
        element: <BicycleDetails />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute allowedRoles={["admin", "customer"]}>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/payment/success",
        element: (
          <ProtectedRoute allowedRoles={["admin", "customer"]}>
            <PaymentSuccess />
          </ProtectedRoute>
        ),
      },
      {
        path: "/payment/fail",
        element: (
          <ProtectedRoute allowedRoles={["admin", "customer"]}>
            <PaymentFail />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute allowedRoles={["admin", "customer"]}>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "my-orders",
        element: (
          <ProtectedRoute allowedRoles={["customer"]}>
            <MyOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageUsers />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-product",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <CreateProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute allowedRoles={["admin", "customer"]}>
            <Profile />
          </ProtectedRoute>
        ),
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
