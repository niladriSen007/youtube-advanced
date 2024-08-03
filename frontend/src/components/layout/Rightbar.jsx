const API_BASE_URL = import.meta.env.VITE_API_AUTH_URL;
import axios from "axios"
import Button from "../shared/Button"
import Navbar from "../common/Navbar";

const Rightbar = ({ children }) => {
  const logoutUser = async () => {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/user/logout`, {
        withCredentials: true,
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="py-6">
     
      {/* <Button content="Logout" onClick={logoutUser} /> */}
      {children}
    </div>
  )
}
export default Rightbar
