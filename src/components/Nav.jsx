import { hamburger } from "../assets/icons"
import { profile } from "../assets/icons"
import { navLinks } from "../constants"
import DropdownMenu from "./DropdownMenu"
import { motion } from "framer-motion"
const Nav = () => {
  return (
    <header className="relative  text-primary  px-[80px] py-[64px] pb-0">
      <nav className="flex sm:justify-between max-sm:justify-between">
        <a href="/">
          <img
            src="/Logo.png"
            alt="logo"
            width={108}
            height={24}
            className="m-0 w-[108px] h-[24px] "
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-gilroy text-[18px]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex max-md:">
          <div className="flex mr-5 max-md:hidden text-[17px] font-gilroy">
            <img src={profile} alt="account" />
            <a className="ml-[8px]" href="/">
              Account
            </a>
          </div>
          {/* <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </div> */}
          <DropdownMenu />
        </div>
      </nav>
    </header>
  )
}

export default Nav
