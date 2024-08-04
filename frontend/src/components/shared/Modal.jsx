import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Button from "./Button"
import axios from "axios"
import { currentUser } from "../../app/slices/userSlices"
import {
  CircleHelp,
  Globe,
  LogOut,
  MessageSquareCode,
  Settings,
  ShoppingBag,
  SquareUser,
  SunMoon,
  Twitter,
  UserRoundPen,
  Youtube,
} from "lucide-react"
const API_BASE_URL = import.meta.env.VITE_API_AUTH_URL

const Modal = ({ openModal, setOpenModal, modalRef }) => {
  const { username, useravatar, userid } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const logoutUser = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/user/logout`)
      console.log(data)
      dispatch(
        currentUser({
          data: {
            user: {
              username: "",
              userid: "",
              useravatar: "",
            },
            refreshToken: "",
          },
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="absolute w-56 top-16 right-0" ref={modalRef}>
      <div className="fixed top-4 bg-slate-800 bg-opacity-20 z-50 "></div>

      <div className="bg-gray-800 py-4 rounded-lg">
        <div className="flex items-center gap-4 pl-4">
          <img
            src={useravatar}
            alt=""
            className="size-10 object-cover rounded-full"
          />
          <div>
            <h1 className="text-white text-xl">{username?.toUpperCase()}</h1>
            <Link
              to={`/yourChannel/${userid}`}
              className="text-blue-400 font-thin text-sm"
              onClick={() => setOpenModal(false)}
            >
              View Profile
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 pl-4 py-4 border-y mt-4 ">
          <p className="flex items-center gap-4">
            <Twitter />
            Twitter account
          </p>
          <p className="flex items-center gap-4">
            <SquareUser />
            Switch account
          </p>
          <p className="flex items-center gap-4">
            <LogOut />
            Sign out
          </p>
        </div>
        <div className="flex flex-col gap-4 pl-4 py-4 border-y  ">
          <p className="flex items-center gap-4">
            <Youtube />
            Youtube studio
          </p>
          <p className="flex items-start gap-4">
            <ShoppingBag />
            Purchase and membership
          </p>
        </div>
        <div className="flex flex-col gap-4 pl-4 py-4 border-y  ">
          <p className="flex items-center gap-4">
            <UserRoundPen />
            Your data on youtube
          </p>
          <p className="flex items-center gap-4">
            <SunMoon />
            Appearance : Dark
          </p>
          <p className="flex items-center gap-4">
            <Globe />
            Location : India
          </p>
        </div>
        <div className="flex flex-col gap-4 pl-4 py-4 border-y  ">
          <p className="flex items-center gap-4">
            <Settings />
            Settings
          </p>
          <p className="flex items-center gap-4">
            <CircleHelp />
            Help{" "}
          </p>
          <p className="flex items-center gap-4">
            <MessageSquareCode />
            Send feedback
          </p>
        </div>
        <div className="mt-4 px-4">
          <Button size="medium" content="Logout" onClick={logoutUser} />
        </div>
        {/* <div className="flex flex-col gap-2 mt-4">
          <button className="hover:bg-gray-700 p-2 rounded-lg">Profile</button>
          <button className="hover:bg-gray-700 p-2 rounded-lg">Settings</button>
          <button className="hover:bg-gray-700 p-2 rounded-lg">Logout</button>
        </div> */}
      </div>
    </section>
  )
}
export default Modal
