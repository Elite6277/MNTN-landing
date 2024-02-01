import React, { useState, useRef, useEffect } from "react"
import { hamburger } from "../assets/icons"
import { menuNavLinks } from "../constants"
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleContainer = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        toggleContainer.current &&
        !toggleContainer.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [toggleContainer])

  return (
    <div className="relative" ref={toggleContainer}>
      <div onClick={() => setIsOpen(!isOpen)} className="hidden max-lg:block">
        {/* <img src={hamburger} alt="hamburger icon" width={25} height={25} /> */}
        <div
          className={`w-8 h-0.5 bg-primary transform transition duration-500 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-primary my-1.5 transform transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-primary transform transition duration-500 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
      {isOpen && (
        <div
          className="  lg:hidden origin-top-right absolute right-0 mt-6 w-56  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10"
          //   style={{
          //     transition: "transform .9s ease-out",
          //     transformOrigin: "top right",
          //   }}
        >
          {menuNavLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md ${
                index === menuNavLinks.length - 1 ? "md-block md:hidden" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
