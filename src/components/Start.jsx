import { startLink } from "../constants"

const Start = () => {
  return (
    <div>
      {startLink.map(
        (
          link,
          index // Используйте index как ключ, если у вас нет другого уникального поля
        ) => (
          <div
            className=" absolute h-[240px] right-[90px] top-[326px]"
            key={index}
          >
            <ul className="py-[16px] pr-[32px] max-xl:hidden text-primary font-gilroy z-10   flex r-0  w-[95px] h-[240px]  items-end flex-col overflow-y-scroll">
              <li>
                <a className="" href="/">
                  {link.start}
                </a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.one}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.two}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.three}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
              <li className="mt-[40px]">
                <a href="/">{link.empty}</a>
              </li>
            </ul>
          </div>
        )
      )}
    </div>
  )
}

export default Start
