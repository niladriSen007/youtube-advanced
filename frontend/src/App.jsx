import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./index.css"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

export const App = () => {
  const UnAuthLayout = () => {
    return (
      <div
        className=" min-h-screen flex items-center justify-center overflow-x-hidden
       text-white bg-slate-950 "
      >
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <UnAuthLayout />,
      children: [
        {
          path: "/auth/login",
          element: <Login />,
        },
        {
          path: "/auth/register",
          element: <Register />,
        },
      ],
    },
  ])

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  )
}
