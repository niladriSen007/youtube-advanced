import Button from "../shared/Button"

const VideoUploadModal = ({ setVideoOpenModal }) => {
  return (
    <div className="w-screen h-screen absolute top-0 -right-6  flex items-center justify-center z-50 py-3 pl-4 backdrop-blur-sm">
      <div className="flex flex-col gap-6 relative bg-[#071125] p-5 mx-10 w-screen backdrop-blur-lg rounded-lg">
        <Button
          content={"Close"}
          size="small"
          type="close"
          onClick={() => {
            setVideoOpenModal(false)
          }}
        />
      </div>
    </div>
  )
}
export default VideoUploadModal
