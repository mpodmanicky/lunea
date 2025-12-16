"use client";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const languages = ["EN", "SK"];
  const [globalLanguage, setGlobalLanguage] = useState("");
  return (
    <>
      <nav className="bg-charcoal fixed top-0 left-0 right-0 z-50">
        <div className="h-16 relative items-center flex">
          <div className="px-4">
            <Logo title="" className="w-36 h-auto" />
          </div>
          {/*Desktop buttons */}
          <div className="hidden sm:block">
            <a
              href=""
              className="text-gunmetal text-lg px-4 hover:text-goldAccent duration-700"
            >
              LINK 1
            </a>
            <a
              href=""
              className="text-gunmetal text-lg px-4 hover:text-goldAccent duration-700"
            >
              LINK 2
            </a>
            <a
              href=""
              className="text-gunmetal text-lg px-4 hover:text-goldAccent duration-700"
            >
              LINK 3
            </a>
            <a
              href=""
              className="text-gunmetal text-lg px-4 hover:text-goldAccent duration-700"
            >
              LINK 4
            </a>
          </div>
          {/*icons */}
          <div className="absolute right-2">
            {/* hamburger menu icon */}
            <button
              className="sm:hidden p-2 rounded-md text-gunmetal hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CiMenuBurger size={24} className="text-goldAccent" />
            </button>
            {/* Language (globe) */}
            <button
              type="button"
              aria-label="Change language"
              title="Language"
              className="p-2 rounded-md text-gunmetal hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => {
                setLanguageMenu(!languageMenu);
                /* handle language change */
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                  stroke="#E5D89D"
                  strokeWidth="2"
                />
                <path d="M2.5 15H27.5" stroke="#E5D89D" strokeWidth="2" />
                <path
                  d="M15 2.5C18.1266 5.92294 19.9034 10.365 20 15C19.9034 19.635 18.1266 24.0771 15 27.5C11.8734 24.0771 10.0966 19.635 10 15C10.0966 10.365 11.8734 5.92294 15 2.5Z"
                  stroke="#E5D89D"
                  strokeWidth="2"
                />
              </svg>
            </button>
            {/* Profile (user) */}
            <button
              type="button"
              aria-label="Profile"
              title="Profile"
              className="p-2 rounded-md text-gunmetal hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => {
                /* handle profile open */
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 15C17.7614 15 20 12.7614 20 10C20 7.23858 17.7614 5 15 5C12.2386 5 10 7.23858 10 10C10 12.7614 12.2386 15 15 15Z"
                  stroke="#E5D89D"
                  strokeWidth="2"
                />
                <path
                  d="M6.25 26.25C6.25 20.0375 10.7275 15 16.25 15C21.7725 15 26.25 20.0375 26.25 26.25"
                  stroke="#E5D89D"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* Cart (shopping cart) */}
            <button
              type="button"
              aria-label="Cart"
              title="Cart"
              className="p-2 rounded-md text-gunmetal hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => {
                /* handle cart open */
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 27.5C11.9404 27.5 12.5 26.9404 12.5 26.25C12.5 25.5596 11.9404 25 11.25 25C10.5596 25 10 25.5596 10 26.25C10 26.9404 10.5596 27.5 11.25 27.5Z"
                  stroke="#E5D89D"
                  strokeWidth="2"
                />
                <path
                  d="M25 27.5C25.6904 27.5 26.25 26.9404 26.25 26.25C26.25 25.5596 25.6904 25 25 25C24.3096 25 23.75 25.5596 23.75 26.25C23.75 26.9404 24.3096 27.5 25 27.5Z"
                  stroke="#E5D89D"
                  strokeWidth="2"
                />
                <path
                  d="M1.25 1.25H6.25L9.6 17.9875C9.71431 18.563 10.0274 19.0799 10.4844 19.4479C10.9415 19.8158 11.5134 20.0112 12.1 20H24.25C24.8366 20.0112 25.4085 19.8158 25.8656 19.4479C26.3226 19.0799 26.6357 18.563 26.75 17.9875L28.75 7.5H7.5"
                  stroke="#E5D89D"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${languageMenu ? "block" : "hidden"} text-goldAccent`}>
          <button
            className="p-2 rounded hover:cursor-pointer m-auto focus:bg-white/10 active:bg-white/10"
            onClick={() => {
              console.log("Setting language to", languages[0]);
              setGlobalLanguage(languages[0]);
              console.log(globalLanguage);
            }}
          >
            {languages[0]}
          </button>
          <br></br>
          <button
            className="p-2 rounded hover:cursor-pointer m-auto focus:bg-white/10 active:bg-white/10"
            onClick={() => {
              console.log("Setting language to", languages[1]);
              setGlobalLanguage(languages[1]);
              console.log(globalLanguage);
            }}
          >
            {languages[1]}
          </button>
        </div>
        {/*mobile buttons */}
        <div
          className={`${isOpen ? "block" : "hidden"} sm:hidden space-y-2 text-left`}
        >
          <a href="" className="text-gunmetal text-lg px-4 block">
            LINK 1
          </a>
          <a href="" className="text-gunmetal text-lg px-4 block">
            LINK 2
          </a>
          <a href="" className="text-gunmetal text-lg px-4 block">
            LINK 3
          </a>
          <a href="" className="text-gunmetal text-lg px-4 block">
            LINK 4
          </a>
        </div>
      </nav>
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
