/* eslint-disable react/prop-types */
import { Menu, MonitorUp, Search } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import Modal from "../shared/Modal"
import { Link } from "react-router-dom"
import VideoUploadModal from "../videoupload/VideoUploadModal"
import Button from "../shared/Button"

const Navbar = ({ expanded, setExpanded }) => {
  const { useravatar } = useSelector((state) => state.user)
  const [openModal, setOpenModal] = useState(false)
  const [videoOpenModal, setVideoOpenModal] = useState(false)
  const modalRef = useRef(null)

  const handleClick = (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName == "IMG") {
      setOpenModal(!openModal)
    } else if (e.target.tagName == "BUTTON") {
      setVideoOpenModal(!videoOpenModal)
    }
  }

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        openModal &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setOpenModal(false)
      }
    }
    console.log(openModal, "Nil")
    if (openModal) {
      document.addEventListener("mousedown", checkIfClickedOutside)
    } else {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [openModal])

  return (
    <nav className="flex items-center justify-between w-full border-b  py-3 border-gray-700 px-6 fixed top-0  z-50 bg-slate-950">
      <section>
        <section className="flex items-center gap-2">
          <Menu
            className="cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          />
          <img
            src="./logo.png"
            alt="Videotube_logo"
            className="size-10 ovject-cover"
          />
          <Link to="/home" className="text-2xl">
            ShortsTube
          </Link>
        </section>
      </section>
      <section className="flex items-center">
        <input
          placeholder="Search"
          type="text"
          name=""
          id=""
          className="bg-transparent border outline-none border-gray-600 rounded-l-full w-96 px-3 py-1.5"
        />
        <Search className="bg-gray-800 rounded-r-full px-2" size={42} />
      </section>
      <section
        className="relative flex gap-12 items-center"
        onClick={handleClick}
      >
        <Button content={"Upload"} size="medium"  />
          
        <img
          name="image"
          src={useravatar}
          alt=""
          className="size-10 object-cover rounded-full cursor-pointer "
        />
        {openModal && <Modal {...{ openModal, setOpenModal, modalRef }} />}
        {videoOpenModal && <VideoUploadModal {...{setVideoOpenModal}} />}
      </section>
    </nav>
  )
}
export default Navbar
