import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom"
import "./index.css"
import Login from "./pages/unauth/Login.jsx"
import Register from "./pages/unauth/Register.jsx"
import Home from "./pages/auth/Home.jsx"
import Leftbar from "./components/layout/Leftbar.jsx"
import Rightbar from "./components/layout/Rightbar.jsx"
import YourChannel from "./pages/auth/YourChannel.jsx"
import Navbar from "./components/common/Navbar.jsx"
import { useSelector } from "react-redux"
import ShortsDetails from "./pages/auth/ShortsDetails.jsx"

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

  const AuthLayout = () => {
    const [expanded, setExpanded] = useState(true)
    const navigate = useNavigate()

    const user = useSelector((state) => state.user)

    console.log(user?.userid, "new user id")

    useEffect(() => {
      if (!user?.userid) {
        console.log(user?.userid, "new user id inside")
        navigate("/auth/login")
      }
    }, [user])

    return (
      <div className="min-h-screen text-white bg-slate-950 py-6">
        <Navbar {...{ expanded, setExpanded }} />
        <div className=" flex  ">
          <Leftbar {...{ expanded, setExpanded }} />
          <div className="flex-1 pt-10 px-4">
            <Rightbar>
              <Outlet />
            </Rightbar>
          </div>
        </div>
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
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/home",
          element: (
            <>
              <Home />
            </>
          ),
        },
        {
          path: "/yourChannel/:userId",
          element: (
            <>
              <YourChannel />
            </>
          ),
        },
        {
          path: "/shorts/:shortsId",
          element: <ShortsDetails />,
        }
      ],
    },
  ])

  /* ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  ) */

  return <RouterProvider router={router} />
}
