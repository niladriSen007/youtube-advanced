const YourChannel = () => {
  return (
    <section className="flex flex-col space-y-2">
      <div>
        <div className="flex items-center gap-6">
          <img
            src="https://yt3.googleusercontent.com/Uq6fG-2bE7itgU0fVhTPBoLgTNq5terSINwSUs0z09_l3ej2JTX-_wCRmGSWtFU_72IU9wFhxQ=s160-c-k-c0x00ffffff-no-rj"
            alt=""
            className="rounded-full size-40"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl">Hustler</h1>
            <p>@hustler546 • 432k subscribers • 222 videos</p>
            <p>More about this channel <span className="cursor-pointer">...</span></p>
            {/*  Subscribe button */}
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </section>
  )
}
export default YourChannel
