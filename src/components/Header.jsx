import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SiAlwaysdata } from "react-icons/si";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { RiDashboardFill } from "react-icons/ri";
import { LiaTableSolid } from "react-icons/lia";
import { PiContactlessPayment } from "react-icons/pi";

function Header() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <header>
        <div className="hidden lg:block xl:block 2xl:block ">
          <div className="flex">
            <div className="flex h-screen flex-col justify-between border-e bg-main-20 w-72 fixed top-0">
              <div className="px-4 py-6">
                <span className="flex justify-center items-center ml-20 text-6xl bg-main-30 rounded-full text-white w-fit p-2 ">
                  <SiAlwaysdata />
                </span>

                <ul className="mt-12 space-y-3">
                  <NavLink to="dashboard">
                    <li className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white">
                      Dashboard
                    </li>
                  </NavLink>

                  {/* <li>
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
                </li> */}

                  <NavLink to="tsection">
                    <li className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white">
                      Tables
                    </li>
                  </NavLink>

                  <NavLink to="contact">
                    <li className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white">
                      Contact Us
                    </li>
                  </NavLink>
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
          </div>
        </div>
        <div className="fixed bottom-0 shadow-2xl lg:hidden md:hidden xl:hidden 2xl:hidden ">
          <BottomNavigation
            sx={{ width: 400 }}
            value={value}
            onChange={handleChange}
            className="flex gap-10 sticky bottom-0"
          >
            <NavLink to='dashboard'>
            <BottomNavigationAction
              className="border border-black"
              label="Dashboard"
              value="Dashboard"
              icon={<RiDashboardFill className="text-2xl" />}
            />
            </NavLink>
            <NavLink to='tsection'>
            <BottomNavigationAction
              className="border border-black"
              label="Table"
              value="Table"
              icon={<LiaTableSolid className="text-2xl" />}
            />
            </NavLink>
            <NavLink to='contact'>
            <BottomNavigationAction
              label="Contact"
              value="Contact"
              icon={<PiContactlessPayment className="text-2xl" />}
            />
            </NavLink>
            
            {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
          </BottomNavigation>
        </div>
      </header>
    </>
  );
}

export default Header;
