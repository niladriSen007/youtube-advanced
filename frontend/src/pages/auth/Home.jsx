import axios from "axios"
import { useEffect, useState } from "react"
const API_BASE_URL = import.meta.env.VITE_API_AUTH_URL
import { Link } from "react-router-dom"

const Home = () => {
  const [videos, setVideos] = useState([])

  const getVideos = async (videosId) => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/video/all?videosId=${videosId}`
      )
      setVideos(data?.data?.videos)
      const videosIdArray = data?.data?.videos.map((video) => video._id)
      getVideos(videosIdArray)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //Short polling
  /*   let timerId
    timerId = setInterval(() => {
      getVideos()
    }, 10000)
    return () => clearInterval(timerId) */
    getVideos([])
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {videos?.map((video) => (
        <Link
          to={`/shorts/${video._id}`}
          key={video._id}
          className="rounded-md flex flex-col gap-3 p-6"
        >
          {/* <video src={video.videoFile} controls className="h-96"></video> */}
          <img
            src={video.thumbnail}
            alt=""
            className=" w-80 h-48 rounded-md object-cover"
          />
          <section className="flex items-start gap-4">
            <img
              src={video.owner?.avatar}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <section>
              <h1 className="text-lg font-black">{video.title}</h1>
              <p className="text-gray-500 text-md">@{video.owner?.username}</p>
              <section className=" flex items-center gap-1 text-gray-400 text-sm">
                <span>{video?.views} views</span>
                <span>&#8226;</span>
                <span>
                  {Math.floor(
                    Math.floor(
                      Math.floor(
                        Math.floor(
                          Math.floor(new Date() - new Date(video?.createdAt)) /
                            1000
                        ) / 60
                      ) / 60
                    ) / 24
                  )}{" "}
                  hours ago
                </span>
              </section>
            </section>
          </section>
        </Link>
      ))}
    </div>
  )
}
export default Home
