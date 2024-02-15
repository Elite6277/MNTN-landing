import { blogs } from "../constants"
import FadeInWhenVisible from "./FadeInWhenVisible"
// import SlideInFromRight from "./SlideInFromRight"

const Blogs = () => {
  return (
    <div className="container">
      {blogs.map((blog, index) => (
        <FadeInWhenVisible>
          <div
            key={blog.id} // используем уникальный идентификатор в качестве ключа
            className="mt-[200px] max-sm:mt-[40px] max-sm:px-[20px]"
          >
            <div
              className={`flex justify-between ${
                index % 2 !== 0
                  ? "flex-row-reverse sm:ml-[0px]"
                  : "sm:ml-[150px]"
              } max-xl:flex-col max-xl:items-center max-xl:ml-[0px] max-2xl:px-[10px]`}
            >
              <div className="max-w-[632px] py-[140px] relative">
                <div className="flex items-center ">
                  <div
                    id={blog.id}
                    className="absolute top-[55px] -left-[142px] max-xl:left-[70px]"
                  >
                    <img src={blog.digit} alt="digit" />
                  </div>

                  <div className="w-[72px] h-[2px] bg-accent mr-8 max-sm:hidden"></div>
                  <p className="text-accent tracking-[10px] leading-none font-gilroy uppercase text-[18px]">
                    {blog.title}
                  </p>
                </div>
                <h2 className="mt-[27px] leading-none font-Chronicle text-[64px] max-sm:text-[40px] text-primary max-w-[555px]">
                  {blog.subtitle}
                </h2>
                <p className="text-primary mt-[27px] font-gilroy text-[18px]">
                  {blog.text}
                </p>
                <div className="flex mt-[27px]">
                  <p className="text-accent font-gilroy text-[18px] mr-[16px]">
                    {blog.readmore}
                  </p>
                  <img src={blog.arrowRight} alt="" />
                </div>
              </div>
              <div>
                <img src={blog.image} width={566} height={720} alt="" />
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      ))}
    </div>
  )
}

export default Blogs

{
  /* <div className=" max-w-[950px] max-sm:max-w-[100%]">
              <div className="flex items-center text-lg">
                <div className="w-[72px] h-[2px]  bg-accent mr-8 max-sm:hidden"></div>
                <h2 className="text-accent tracking-[10px]  leading-none font-gilroy uppercase text-[18px] max-sm:text-[10px]">
                  {blog.title}
                </h2>
              </div>
              <p className="mt-8 leading-none font-Chronicle text-[88px] text-primary capitalize max-xl:text-[60px] max-sm:text-[26px]">
                {blog.subtitle}
              </p>
              <div className="flex mt-[32px]">
                <p className=" mr-[16px] font-gilroy text-[18px] text-primary">
                  {blog.readmore}
                </p>
                <img src={blog.arrowRight} alt="" />
              </div>
            </div> */
}
