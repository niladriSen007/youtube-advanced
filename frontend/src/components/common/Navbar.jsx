/* eslint-disable react/prop-types */
import { Menu, Search } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import Modal from "../shared/Modal"
import { Link } from "react-router-dom"

const Navbar = ({ expanded, setExpanded }) => {
  const { useravatar } = useSelector((state) => state.user)
  const [openModal, setOpenModal] = useState(false)
  const modalRef = useRef(null)

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
            VideoTube
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
      <section className="relative">
        <img
          src={useravatar}
          alt=""
          className="size-10 object-cover rounded-full cursor-pointer "
          onClick={() => setOpenModal(!openModal)}
        />
        {openModal && <Modal {...{ openModal, setOpenModal, modalRef }} />}
      </section>
    </nav>
  )
}
export default Navbar
