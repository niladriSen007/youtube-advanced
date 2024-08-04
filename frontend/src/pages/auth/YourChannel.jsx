import { useState } from "react"

import PlaylistTab from "../../components/profile/PlaylistTab"
import CommunityTab from "../../components/profile/CommunityTab"
import HomeTab from "../../components/profile/HomeTab"

const YourChannel = () => {
  const [homeTab, setHomeTab] = useState(true)
  const [playlistTab, setPlaylistTab] = useState(false)
  const [communityTab, setCommunityTab] = useState(false)

  const changeTab = (tab) => {
    switch (tab) {
      case "home":
        setHomeTab(true)
        setPlaylistTab(false)
        setCommunityTab(false)
        break
      case "playlist":
        setHomeTab(false)
        setPlaylistTab(true)
        setCommunityTab(false)
        break
      case "community":
        setHomeTab(false)
        setPlaylistTab(false)
        setCommunityTab(true)
        break
      default:
        setHomeTab(true)
        setPlaylistTab(false)
        setCommunityTab(false)
    }
  }
  return (
    <section className="flex flex-col gap-6 py-4">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-6 px-40">
          <img
            src="https://yt3.googleusercontent.com/Uq6fG-2bE7itgU0fVhTPBoLgTNq5terSINwSUs0z09_l3ej2JTX-_wCRmGSWtFU_72IU9wFhxQ=s160-c-k-c0x00ffffff-no-rj"
            alt=""
            className="rounded-full size-40"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl">Hustler</h1>
            <p>@hustler546 • 432k subscribers • 222 videos</p>
            <p>
              More about this channel{" "}
              <span className="cursor-pointer">...</span>
            </p>
            {/*  Subscribe button */}
          </div>
        </div>
        <div className="border-b border-gray-700 w-full flex gap-8 px-40">
          <span
            className={`cursor-pointer ${homeTab && "border-b-2 "}`}
            onClick={() => changeTab("home")}
          >
            Home
          </span>
          <span
            className={`cursor-pointer ${playlistTab && "border-b-2 "}`}
            onClick={() => changeTab("playlist")}
          >
            Playlist
          </span>
          <span
            className={`cursor-pointer ${communityTab && "border-b-2 "}`}
            onClick={() => changeTab("community")}
          >
            Community
          </span>
        </div>
      </div>
      <div className="px-40 pr-[284px]">
        {homeTab && <HomeTab />}
        {playlistTab && <PlaylistTab />}
        {communityTab && <CommunityTab />}
      </div>
    </section>
  )
}
export default YourChannel
