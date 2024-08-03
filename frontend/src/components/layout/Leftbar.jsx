import {
  CalendarCheck,
  Clapperboard,
  FileClock,
  History,
  House,
  ListVideo,
  Menu,
  ThumbsUp,
  TvMinimalPlay,
} from "lucide-react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Leftbar = ({expanded, setExpanded}) => {

  const {userid} = useSelector((state) => state.user)
  const navigate = useNavigate()
  return (
    <>
      {expanded ? (
        <section className="flex flex-col overflow-y-scroll pr-4 my-10">
          

          <section className="border-b border-slate-600 my-4 pb-6 flex flex-col gap-2 pl-4 font-thin">
            <div className="leftbar-small-menu-section">
              <House /> <span>Home</span>
            </div>
            <div className="leftbar-small-menu-section">
              <TvMinimalPlay /> <span>Shorts</span>
            </div>
            <div className="leftbar-small-menu-section">
              <CalendarCheck /> <span>Subscriptions</span>
            </div>
          </section>

          {/*  Your channels */}
          <section className="border-b border-slate-600 my-4 pb-6 flex flex-col gap-2 pl-4 ">
            <h2 className="text-xl">You &nbsp; &gt;</h2>
            <div className="leftbar-small-menu-section" onClick={()=>navigate(`/yourChannel/${userid}`)}>
              <TvMinimalPlay /> <span>Your Channel</span>
            </div>
            <div className="leftbar-small-menu-section">
              <History /> <span>History</span>
            </div>
            <div className="leftbar-small-menu-section">
              <ListVideo /> <span>Playlists</span>
            </div>
            <div className="leftbar-small-menu-section">
              <Clapperboard /> <span>Your videos</span>
            </div>
            <div className="leftbar-small-menu-section">
              <ThumbsUp /> <span>Liked videos</span>
            </div>
            <div className="leftbar-small-menu-section">
              <FileClock /> <span>Watch later</span>
            </div>
          </section>

          {/* More from youtube */}
          <section className="border-b border-slate-600 my-4 pb-6 flex flex-col gap-1 pl-4 ">
            <h2 className="text-xl">Subscriptions &nbsp; &gt;</h2>
            <div className="leftbar-small-menu-section">
              <img
                className="rounded-full size-8 object-cover"
                src="https://media.licdn.com/dms/image/D4D03AQH8CXRHAKQd6Q/profile-displayphoto-shrink_200_200/0/1693777638244?e=2147483647&v=beta&t=ePGc7C1QqUhqk5hc3fAhawpk7DF0IGkTGftGappaXaw"
                alt=""
              />
              <span>Chai aur code</span>
            </div>
            <div className="leftbar-small-menu-section">
              <img
                className="rounded-full size-8 object-cover"
                src="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <span>Freecodecamp.org</span>
            </div>
            <div className="leftbar-small-menu-section">
              <img
                className="rounded-full size-8 object-cover"
                src="https://yt3.googleusercontent.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <span>Javascript Mastery</span>
            </div>
            <div className="leftbar-small-menu-section">
              <img
                className="rounded-full size-8 object-cover"
                src="https://yt3.googleusercontent.com/H3djB_hVq1Ka1auGf5eCi-wUfwI-kctMW-skVqrXnJwAvqQxI8XSw_ErmyUMNEQmMIxcQgNhNGU=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <span>Piyush Garg</span>
            </div>
          </section>
        </section>
      ) : (
        <section className="flex flex-col items-center gap-10 my-14 p-2 ">
         
        <section className="flex flex-col gap-8">
        <div className="leftbar-small-menu-section-not-expanded">
              <House /> <span className="text-xs">Home</span>
            </div>
            <div className="leftbar-small-menu-section-not-expanded">
              <TvMinimalPlay /> <span className="text-xs">Shorts</span>
            </div>
            <div className="leftbar-small-menu-section-not-expanded">
              <CalendarCheck /> <span className="text-xs">Subscriptions</span>
            </div>
        </section>
        </section>
      )}
    </>
  )
}
export default Leftbar
