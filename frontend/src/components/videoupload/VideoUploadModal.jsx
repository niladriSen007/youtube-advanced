import { useRef, useState } from "react"
import Button from "../shared/Button"
import axios from "axios"
import { useSelector } from "react-redux"
const API_BASE_URL = import.meta.env.VITE_API_AUTH_URL

const VideoUploadModal = ({ setVideoOpenModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoFile: null,
    thumbnail: null,
    tags: "",
  })

  const [isUploading, setIsUploading] = useState(false)
  const [videoTags, setVideoTags] = useState([])

  const videoInputRef = useRef(null)
  const thumbnailInputRef = useRef(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const videoFormData = new FormData()

  const { userid } = useSelector((state) => state?.user)

  const uploadVideo = async (e) => {
    setIsUploading(true)
    e.preventDefault()
    e.stopPropagation()
    console.log(formData)
    videoFormData.append("title", formData.title)
    videoFormData.append("description", formData.description)
    videoFormData.append("videoFile", formData.videoFile)
    videoFormData.append("thumbnail", formData.thumbnail)
    videoFormData.append("tags", videoTags)
    videoFormData.append("userId", userid)
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/video/upload`,
        videoFormData
      )
      console.log(data)
      setIsUploading(false)
      setVideoOpenModal(false)
    } catch (error) {
      console.log(error)
      setIsUploading(false)
    }
  }
  return (
    <div className="w-screen h-screen absolute top-0 -right-6  flex items-center justify-center z-50 py-3 pl-4 backdrop-blur-sm">
      <div className="flex flex-col gap-6 relative bg-[#071125] p-5 mx-10 backdrop-blur-lg rounded-lg w-3/5 ">
        <section className="flex items-center justify-between">
          <span>Upload your video</span>
          <span
            className="cursor-pointer text-xl"
            onClick={() => {
              setVideoOpenModal(false)
            }}
          >
            X
          </span>
        </section>
        <section className="flex flex-col gap-6 ">
          <section className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={formData.title}
              className="text-black"
            />
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={formData.description}
              className="text-black"
            />
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="description">Tags</label>
            <input
              type="text"
              name="tags"
              id="tags"
              onChange={handleChange}
              value={formData.tags}
              className="text-black"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setVideoTags([...videoTags, e.target.value])
                  setFormData({ ...formData, tags: "" })
                  e.target.value = ""
                }
              }}
            />
            <p className="flex items-center gap-2">
            {videoTags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              accept="image/*"
              ref={thumbnailInputRef}
              /* className="hidden" */
              onChange={(e) => {
                e.stopPropagation()
                setFormData({
                  ...formData,
                  thumbnail: thumbnailInputRef?.current?.files[0],
                })
                videoFormData.append(
                  "thumbnail",
                  thumbnailInputRef?.current?.files[0]
                )
              }}
            />
            {/*  <Button
              content={"Upload"}
              type="button"
              size="small"
              onClick={(e) => {
                e.preventDefault()
                thumbnailInputRef.current.click()
              }}
            /> */}
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="videoFile">Video</label>
            <input
              type="file"
              name="videoFile"
              accept="video/*"
              id="videoFile"
              /* className="hidden" */
              ref={videoInputRef}
              onChange={(e) => {
                e.stopPropagation()
                setFormData({
                  ...formData,
                  videoFile: e.target?.files[0],
                })
                videoFormData.append("videoFile", e.target?.files[0])
              }}
            />
            {/*  <Button
              content={"Upload"}
              type="button"
              size="small"
              onClick={() => {
                videoInputRef.current.click()
              }}
            /> */}
          </section>
          <Button
            type="submit"
            content={isUploading ? "Uploading..." : "Upload Video"}
            onClick={uploadVideo}
          />
        </section>
      </div>
    </div>
  )
}
export default VideoUploadModal
