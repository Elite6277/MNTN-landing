import { blogs } from "../constants"

const Blogs = () => {
  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={blog.digit} className="mt-[200px]">
          <div
            className={`flex justify-center max-xl:flex-col max-xl:items-center ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <div className="max-w-[632px] py-[140px]">
              <div className="flex items-center">
                <div className="w-[72px] h-[2px] bg-accent mr-8 max-sm:hidden"></div>
                <p className="text-accent tracking-[10px] leading-none font-gilroy uppercase text-[18px] max-sm:text-[10px]">
                  {blog.title}
                </p>
              </div>
              <h2 className="mt-[27px] leading-none font-Chronicle text-[64px] text-primary max-w-[555px]">
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
            <div
              className={`${
                index % 2 === 0 ? "ml-[114px]" : "mr-[114px]"
              } max-md:ml-[0px] max-xl:mr-[0px]`}
            >
              <img src={blog.image} width={566} height={720} alt="" />
            </div>
          </div>
        </div>
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