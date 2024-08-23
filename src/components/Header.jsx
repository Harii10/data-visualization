import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import Search from "./Search";

function Header() {
  const[isScrolled, setIsScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 10){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // return ()=> window.removeEventListener('scroll', handleScroll)
  },[])
  return (
    <>
      <header className="hidden lg:block xl:block 2xl:block ">
        <div className="flex">
          <div className="flex h-screen flex-col justify-between border-e bg-main-20 w-72 fixed top-0">
            <div className="px-4 py-6">
              <span className="grid h-10 w-32 place-content-center rounded-lg bg-main-30 text-xs text-white">
                Logo
              </span>

              <ul className="mt-12 space-y-3">
                <NavLink
                  to="dashboard"
                >
                  <li className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white">
                    Dashboard
                  </li>
                </NavLink>

                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg p-4 text-white hover:bg-main-40 hover:text-white">
                      <span className="text-sm font-medium"> Teams </span>

                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul className="mt-2 space-y-1 p-4">
                      <li>
                        <a
                          href="#"
                          className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white"
                        >
                          Banned Users
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white"
                        >
                          Calendar
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white"
                  >
                    Billing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white"
                  >
                    Invoices
                  </a>
                </li>

                <NavLink to="contact">
                  <li className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white">
                    Contact Us
                  </li>
                </NavLink>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="flex gap-2 w-full rounded-lg p-4 text-sm font-medium [text-align:_inherit] text-white hover:bg-main-40 hover:text-white"
                    >
                      <TbLogout2 className="mt-1" />
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 bg-main-20">
              <a
                href="https://harii10.github.io/myportfolio/"
                className="flex items-center gap-2 bg-main-20 text-white p-4"
              >
                <img
                  alt=""
                  src="https://harii10.github.io/myportfolio/images/hari.png"
                  className="size-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs">
                    <strong className="block font-medium">Admin</strong>

                    <span> hariharachandru30@gmail.com </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className={`flex justify-between items-center transition-all duration-100 ease-in w-full m-4 ml-80 p-4 ${isScrolled ? " sticky top-0 w-3/4 bg-white shadow-lg rounded-xl border border-gray-300" : "bg-transparent"}`}>
            <div>
              <span>Dashboard</span>
            </div>
            <div>
              <Search/>
              </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
