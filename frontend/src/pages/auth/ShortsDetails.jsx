import axios from "axios"
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  ListPlus,
  MailOpen,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaYoutube } from "react-icons/fa"
const API_BASE_URL = import.meta.env.VITE_API_AUTH_URL

const ShortsDetails = () => {
  const { shortsId } = useParams()
  const [shortDetails, setShortDetails] = useState()
  const [recommendedShorts, setRecommendedShorts] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  const getShorts = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/video/${shortsId}`)
      console.log(data)
      setShortDetails(data?.data?.video)
    } catch (error) {
      console.log(error)
    }
  }

  const getRecommendedShorts = async () => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/video/recommendedvideos/${shortsId}`
      )
      setRecommendedShorts(data?.data?.videos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getShorts()
    getRecommendedShorts()
  }, [])
  return (
    <div className="w-full flex items-start gap-6 p-6">
      <div className="w-2/3 ">
        <section className="my-6">
          {shortDetails ? (
            <video
              src={shortDetails.videoFile}
              controls
              className="h-96 w-[90%]"
            ></video>
          ) : (
            <h1>Loading...</h1>
          )}
        </section>
        <section className="flex flex-col gap-4 px-4">
          <h1 className="text-2xl font-bold">{shortDetails?.title}</h1>
          <section className="flex justify-between items-center w-[90%]">
            <section className="flex items-center gap-5">
              <img
                className="size-10 object-cover rounded-full"
                src={shortDetails?.owner?.avatar}
                alt=""
              />
              <section className="flex flex-col ">
                <span>{shortDetails?.owner?.username}</span>
                <span className="text-sm">{"1.87M"} subscribers</span>
              </section>
              <button className="rounded-full px-4 py-1 text-black bg-white">
                Subscribe
              </button>
            </section>
            <section className="flex items-center gap-4">
              <div className="  rounded-full flex  bg-gray-700">
                <span className="rounded-l-full py-2 px-4 flex items-center gap-2 border-r cursor-pointer bg-gray-700 hover:bg-gray-800">
                  <ThumbsUp /> {shortDetails?.likes}
                </span>
                <span className="py-2 bg-gray-700 rounded-r-full hover:bg-gray-800 cursor-pointer  px-4 flex items-center gap-2">
                  <ThumbsDown />
                  {shortDetails?.dislikes}
                </span>
              </div>
              <div>
                <span className="flex items-center gap-2 bg-gray-700 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-800">
                  <ListPlus />
                  Save to playlist
                </span>
              </div>
            </section>
          </section>
          <section className="bg-gray-700 w-11/12 p-4 rounded-md flex flex-col gap-6 my-6">
            <scection className="flex items-center justify-between">
              <section className="font-bold">
                {shortDetails?.views} views Premiered on{" "}
                {new Date(shortDetails?.createdAt).toDateString()}
              </section>
              <section
                className="p-1 bg-gray-800 rounded-full cursor-pointer"
                onClick={() => {
                  setIsExpanded(!isExpanded)
                }}
              >
                {isExpanded ? <ChevronUp /> : <ChevronDown />}
              </section>
            </scection>
            {isExpanded && (
              <scection className="flex flex-col gap-1">
                <p className="text-gray-300 ">{shortDetails?.description}</p>
                <span className="flex items-center">
                  <FaYoutube /> &nbsp; Youtube: @{shortDetails?.owner.username}
                </span>
                <span className="flex items-center">
                  <Facebook size={20} /> &nbsp; Facebook: @
                  {shortDetails?.owner.username}
                </span>
                <span className="flex items-center">
                  <MailOpen size={18} /> &nbsp; Email: @
                  {shortDetails?.owner.email}
                </span>
              </scection>
            )}
          </section>
        </section>
      </div>
      <div className="w-1/3">
      <p className="text-xl font-bold mb-6">Recommended</p>
      <div className="flex flex-col gap-10">
      {
        recommendedShorts.map((video) => (
          <div key={video._id} className="flex items-start gap-4">
            <img
              src={video.thumbnail}
              alt=""
              className="min-w-48 h-32 object-cover rounded-md"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-base break-words font-bold">{video.title}</h1>
              <span className="text-xs text-gray-400">@ {video.owner.username}</span>
              <span className="text-xs text-gray-400">{video.views} views</span>
            </div>
          </div>
        ))
      }
      </div>
      </div>
    </div>
  )
}
export default ShortsDetails
