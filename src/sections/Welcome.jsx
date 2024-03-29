import { welcomeSection } from "../constants"
import "animate.css"

const Welcome = () => {
  return (
    <>
      {welcomeSection.map((item) => (
        <div key={item} className="flex justify-center items-center">
          <div className=" max-w-[950px] max-sm:max-w-[100%]">
            <div className="flex items-center text-lg">
              <div className="w-[72px] h-[2px]  bg-accent mr-8 max-sm:hidden"></div>
              <h2 className="text-accent tracking-[10px]  leading-none font-gilroy uppercase text-[18px] max-sm:text-[14px]">
                {item.title}
              </h2>
            </div>
            <p className="mt-8 leading-none font-Chronicle text-[88px] text-primary capitalize max-sm:text-[40px] ">
              {item.subtitle}
            </p>
            <div className="flex mt-[32px]">
              <p className=" mr-[16px] font-gilroy text-[18px] text-primary">
                {item.scroll}
              </p>
              <a
                href="#Blog"
                className="pointer animate__animated animate__bounce animate__infinite	animate__slower"
              >
                <img src={item.arrowDown} alt="" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Welcome
