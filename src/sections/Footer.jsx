import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <div className="flex justify-between">
      <div className="flex  flex-col justify-between">
        <div className="max-w-[300px] font-gilroy text-primary leading-8">
          <img
            width={108}
            height={24}
            className="m-0 max-w-[108px] h-[24px] "
            src="/Logo.png"
          />
          <p className="mt-[24px]">
            Get out there & discover your next slope, mountain & destination!
          </p>
        </div>
        <div>
          <p className="font-gilroy text-primary/50">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>
      </div>
      <div className="flex justify-between w-[566px]">
        {footerLinks.map((section) => (
          <div className="last:mr-0" key={section.title}>
            <h4 className="text-accent font-gilroy text-[24px] ">
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li
                  className="mt-[16px] font-gilroy text-primary"
                  key={link.name}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
