import { followLink } from "../constants"
const Sidepanel = () => {
  return (
    <div>
      {followLink.map((link) => (
        <div
          key={link}
          className="max-xl:hidden text-primary font-gilroy z-10 absolute rotate-90 flex top-[420px] w-[173px] justify-between"
        >
          <div>
            <a className="mr-[10px]" href="/">
              {link.follow}
            </a>
          </div>
          <div>
            <a href="/" className="mr-[10px]">
              <img className="-rotate-90" src={link.instagram} alt="" />
            </a>
          </div>
          <div>
            <a href="/" className="mr-[10px]">
              <img className="-rotate-90" src={link.twitter} alt="" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidepanel
