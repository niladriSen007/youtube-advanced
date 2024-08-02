import { useState } from "react"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  console.log(formData)
  return (
    <section className="">
      <form onSubmit={onSubmit}>
        <div className="">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className=""
            value={formData?.email}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className=""
            value={formData?.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="">
          Login
        </button>
      </form>
    </section>
  )
}
export default Login
