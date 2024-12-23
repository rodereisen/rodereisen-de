import * as React from "react"
import { useEffect, useState } from "react"
import ModalBooking from "./modal-booking"

const Header = ({siteTitle = ""}) => {
  const [isTransparent, setTransparent] = useState(true)
  const [isOpen, setOpen] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [browserIsSafari, setBrowserIsSafari] = useState(false)
  const offset = 5

  useEffect(() => {
    const isSafari =
      navigator.userAgent.search("Safari") >= 0 &&
      navigator.userAgent.search("Chrome") < 0

    if (browserIsSafari !== isSafari) {
      setBrowserIsSafari(isSafari)
    }
  })

  const handleScroll = () => {
    if (window.pageYOffset > offset) {
      if (isTransparent) {
        setTransparent(false)
      }
    } else {
      if (!isTransparent) {
        setTransparent(true)
      }
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <header
      className={`w-full h-24 fixed top-0 left-0 right-0 transition-colors ease-in-out duration-500 ${
        isTransparent
          ? "bg-white lg:bg-transparent z-40"
          : "bg-white bg-opacity-80 shadow-2xl z-50"
      }`}
    >
      <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
        <a href="/" className="relative flex flex-col font-black leading-none">
          <span className="text-2xl text-blue-900">
            <span className="font-light">reisebüro</span>
            <span className="font-bold">rode</span>
            <span className="text-pink-600">.</span>
          </span>
          <span className="font-light text-xs text-blue-900">
            wir kümmern uns. um sie.
          </span>
        </a>

        <nav
          id="nav"
          className={`absolute top-0 left-0 flex flex-col items-center justify-between w-full h-64 pt-5 mt-24 text-sm text-blue-900 bg-white border-t border-gray-200 lg:w-auto lg:flex-row lg:h-24 lg:text-base lg:bg-transparent lg:mt-0 lg:border-none lg:py-0 lg:flex lg:relative ${
            isOpen ? null : "hidden"
          }`}
        >
          <a
            href="/"
            className="ml-0 mr-0 pt-5 pb-5 block font-bold duration-100 lg:ml-12 lg:mr-8 transition-color hover:text-pink-600"
          >
            Home<span className="text-pink-600">.</span>
          </a>
          <a
            href="/experten"
            className="ml-0 mr-0 pt-5 pb-5 block font-bold duration-100 lg:ml-12 lg:mr-8 transition-color hover:text-pink-600"
          >
            Experten<span className="text-pink-600">.</span>
          </a>
          <a
            href="/standorte"
            className="ml-0 mr-0 pt-5 pb-5 block font-bold duration-100 lg:ml-12 lg:mr-8 transition-color hover:text-pink-600"
          >
            Standorte<span className="text-pink-600">.</span>
          </a>
          <div className="flex flex-col w-full font-medium border-t border-gray-200 lg:hidden">
            <a
              href="/angebote"
              className="w-full py-2 pt-3 pb-3 font-bold text-center text-pink-600"
            >
              Angebote
            </a>
            <a
              href="tel:0049706294990"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-yellow-600 fold-bold"
            >
              {" "}
              <div className="flex flex-col">
                <small className="">Beilstein</small>
                <span className="font-semibold">07062 94990</span>
              </div>
            </a>
            <a
              href="tel:0049714481550"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-yellow-600 fold-bold"
            >
              {" "}
              <div className="flex flex-col">
                <small className="">Steinheim</small>
                <span className="font-semibold">07144 81550</span>
              </div>
            </a>
            <a
              href="mailto:info@rodereisen.de"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-yellow-600 fold-bold"
            >
              {" "}
              <div className="flex flex-col">
                <small className="">E-Mail</small>
                <span className="font-semibold">info@rodereisen.de</span>
              </div>
            </a>
            {browserIsSafari === null || browserIsSafari === true ? (
              <a
                href="https://outlook.office365.com/owa/calendar/ReisebroRodeGmbH2@rodereisen.de/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative hover:text-blue-900 cursor-pointer inline-block w-auto h-full px-5 py-4 lg:text-base text-sm font-bold leading-none text-white transition-all duration-100 bg-indigo-700 text-center shadow-md fold-bold lg:bg-pink-500 lg:text-white sm:w-full lg:shadow-none hover:shadow-xl"
              >
                Termin vereinbaren
              </a>
            ) : null}
            {browserIsSafari === false ? (
              <a
                className="relative hover:text-blue-900 cursor-pointer inline-block w-auto h-full px-5 py-4 lg:text-base text-sm font-bold leading-none text-white transition-all duration-100 bg-indigo-700 text-center shadow-md fold-bold lg:bg-pink-500 lg:text-white sm:w-full lg:shadow-none hover:shadow-xl"
                onClick={() => setIsOpen(true)}
              >
                Termin vereinbaren
              </a>
            ) : null}
          </div>
        </nav>

        <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 lg:relative lg:w-auto lg:bg-transparent lg:border-none lg:mt-0 lg:flex-row lg:p-0 lg:items-end lg:flex lg:justify-between">
          <a
            href="/angebote"
            className="relative py-4 mr-0 text-sm font-bold text-pink-600 lg:px-5 sm:mr-3 lg:mt-0 hover:text-blue-900 lg:text-base"
          >
            Angebote
          </a>
          {browserIsSafari === null || browserIsSafari === true ? (
            <a
              href="https://outlook.office365.com/owa/calendar/ReisebroRodeGmbH2@rodereisen.de/bookings/"
              target="_blank"
              className="relative hover:text-blue-900 cursor-pointer inline-block w-auto h-full px-5 py-4 lg:text-base text-sm font-bold leading-none text-white transition-all duration-100 bg-indigo-700 rounded shadow-md fold-bold lg:bg-pink-500 lg:text-white sm:w-full lg:shadow-none hover:shadow-xl"
            >
              Termin vereinbaren
            </a>
          ) : null}
          {browserIsSafari === false ? (
            <a
              className="relative hover:text-blue-900 cursor-pointer inline-block w-auto h-full px-5 py-4 lg:text-base text-sm font-bold leading-none text-white transition-all duration-100 bg-indigo-700 rounded shadow-md fold-bold lg:bg-pink-500 lg:text-white sm:w-full lg:shadow-none hover:shadow-xl"
              onClick={() => setIsOpen(true)}
            >
              Termin vereinbaren
            </a>
          ) : null}
        </div>

        <div
          id="nav-mobile-btn"
          className={`absolute top-0 right-0 block w-6 mt-8 mr-10 cursor-pointer select-none lg:hidden sm:mt-10 ${
            isOpen ? null : "close"
          }`}
          onClick={() => setOpen(!isOpen)}
        >
          <span
            className={`bg-blue-900 block w-full h-1 mt-2 duration-200 transform rounded-full sm:mt-1`}
            style={{
              transform: isOpen ? "rotate(45deg)" : null,
              top: isOpen ? "4px" : null,
              position: "relative",
            }}
          ></span>
          <span
            className={`bg-blue-900 block w-full h-1 mt-1 duration-200 transform rounded-full`}
            style={{
              transform: isOpen ? "rotate(-45deg)" : null,
              marginTop: isOpen ? "0px" : null,
            }}
          ></span>
        </div>
      </div>
      {modalIsOpen ? <ModalBooking onClose={() => setIsOpen(false)} /> : null}
    </header>
  )
}

interface HeaderProps {
  siteTitle?: string
}

export default Header
