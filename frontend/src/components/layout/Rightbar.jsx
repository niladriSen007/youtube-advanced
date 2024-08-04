
import axios from "axios"
import Button from "../shared/Button"
import Navbar from "../common/Navbar"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { currentUser } from "../../app/slices/userSlices"

const Rightbar = ({ children }) => {
  const dispatch = useDispatch()

  return (
    <div className="py-6">
      
      {children}
    </div>
  )
}
export default Rightbar
