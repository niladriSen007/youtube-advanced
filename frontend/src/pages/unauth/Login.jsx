import { useState } from "react"
import Button from "../../components/shared/Button"
import { API_PORT } from "../../utils/apiCalls"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { currentUser } from "../../app/slices/userSlices"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    try {
      const { data } = await axios.post(`${API_PORT}/user/login`, formData, {
        withCredentials: true,
      })
      console.log(data, "Login")
      /* const { user, accessToken, refreshToken } = data */
      dispatch(currentUser(data))
      setIsLoading(false)
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  console.log(formData)
  return (
    <section className="border rounded-md p-2 w-[24%] py-8 px-6 my-24">
      <h2 className="text-center text-5xl font-black my-5 mb-10">
        Login to <span className="text-rose-600 underline ">VideoTube</span>
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4  ">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md px-2 p-1 text-black"
            value={formData?.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded-md px-2 p-1 text-black"
            value={formData?.password}
            onChange={handleChange}
          />
        </div>
        <Button content="Login" type="submit" isLoading={isLoading} />
      </form>
    </section>
  )
}
export default Login
