import { useState } from "react"
import { yourVideos } from "../../utils/mockdata"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HomeTab = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(4)
  return (
    <section className="relative">
      <h1 className="text-xl mb-4">Your videos &gt;</h1>
      <button
        className="bg-gray-700 rounded-full p-2 absolute top-[45%] -left-4 backdrop-blur-md"
        onClick={() => {
          setStartIndex((prev) => (prev > 3 ? prev - 4 : 0))
          setEndIndex((prev) => (prev - 4 >= 4 ? prev - 4 : 4))
        }}
      >
        <ChevronLeft />
      </button>
      <button
        className="bg-gray-700 rounded-full p-2 absolute top-[45%]  -right-4 backdrop-blur-md"
        onClick={() => {
          setStartIndex((prev) =>
            prev + 4 < yourVideos.length ? prev + 4 : prev
          )
          setEndIndex((prev) =>
            prev + 4 < yourVideos.length ? prev + 4 : yourVideos.length
          )
        }}
      >
        {" "}
        <ChevronRight />
      </button>

      <section className="flex gap-6 transition-all duration-300 ">
        {yourVideos?.slice(startIndex, endIndex)?.map((video) => (
          <div key={video.id}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-64 h-36 object-cover rounded-md"
              loading="lazy"
            />
            <p>{video.title}</p>
          </div>
        ))}
      </section>
    </section>
  )
}
export default HomeTab
