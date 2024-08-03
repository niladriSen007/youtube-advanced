import { useRef, useState } from "react"
import axios from "axios"
import Button from "../../components/shared/Button"
import { useNavigate } from "react-router-dom"
import { API_PORT } from "../../utils/apiCalls"
const Register = () => {
  const imageRef = useRef(null)
  const coverImageRef = useRef(null)

  const navigate = useNavigate()
  const [avatarImg, setAvatarImg] = useState(null)
  const [coverImg, setCoverImg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
    coverImage: "",
  })

  const formDataForApi = new FormData()

  const onSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    formDataForApi.append("fullname", formData.fullname)
    formDataForApi.append("username", formData.username)
    formDataForApi.append("email", formData.email)
    formDataForApi.append("password", formData.password)
    formDataForApi.append("avatar", formData.avatar)
    formDataForApi.append("coverImage", formData.coverImage)
    /*   console.log(formDataForApi.get("email")) */

    try {
      const { data } = await axios.post(
        `${API_PORT}/user/register`,
        formDataForApi
      )
      console.log(data)
      setIsLoading(false)
      navigate("/auth/login")
    } catch (error) {
      console.log(error)
    }
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    imageRef.current.click()
  }

  const handleCoverImageChange = (e) => {
    e.preventDefault()
    coverImageRef.current.click()
  }

  const uploadImage = async () => {
    const uploadedFile = imageRef.current?.files[0]
    setFormData({ ...formData, avatar: uploadedFile })
    formDataForApi.append("avatar", uploadedFile)
    /*  console.log(formDataForApi.get("avatar"))
    console.log(uploadedFile) */
    setAvatarImg(URL.createObjectURL(uploadedFile))
    /*  const cachedURL = URL.createObjectURL(uploadedFile) */
    /* setFormData({ ...formData, avatar: uploadedFile }) */
  }

  const uploadCoverImage = async () => {
    const uploadedFile = coverImageRef.current?.files[0]
    setFormData({ ...formData, coverImage: uploadedFile })
    console.log(uploadedFile)
    setCoverImg(URL.createObjectURL(uploadedFile))
    formDataForApi.append("coverImage", uploadedFile)
  }

  return (
    <section className="border rounded-md p-2 w-[24%] py-8 px-6 my-24">
      <h2 className="text-center text-5xl font-black my-5 mb-10">
        Welcome to <span className="text-rose-600 underline ">VideoTube</span>
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4  ">
        <div className="flex flex-col gap-1">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            className="rounded-md px-2 p-1 text-black"
            name="fullname"
            value={formData?.fullname}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="rounded-md px-2 p-1 text-black"
            name="username"
            value={formData?.username}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="rounded-md px-2 p-1 text-black"
            id="email"
            name="email"
            value={formData?.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="rounded-md px-2 p-1 text-black"
            id="password"
            name="password"
            value={formData?.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            ref={imageRef}
            hidden
            /* value={formData?.avatar}
            onChange={handleImageChange} */
            onChange={uploadImage}
          />
          {avatarImg && (
            <img
              src={avatarImg}
              alt="avatar"
              className="w-64 h-40 object-cover rounded-md my-2"
            />
          )}
          <Button onClick={handleImageChange} content="Upload Avatar Image" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="coverImage">Cover Image</label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            ref={coverImageRef}
            hidden
            /* value={formData?.coverImage}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            } */
            onChange={uploadCoverImage}
          />
          {coverImg && (
            <img
              src={coverImg}
              alt="cover"
              className=" h-64 rounded-md object-cover my-2"
            />
          )}
          <Button
            onClick={handleCoverImageChange}
            content="Upload cover Image"
          />
        </div>
        <Button type="submit" content="Register" isLoading={isLoading} />
      </form>
    </section>
  )
}
export default Register
