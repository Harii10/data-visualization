import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SiAlwaysdata } from "react-icons/si";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { RiDashboardFill } from "react-icons/ri";
import { LiaTableSolid } from "react-icons/lia";
import { PiContactlessPayment } from "react-icons/pi";

function Header() {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
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
                  <NavLink
                    to="dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "block rounded-lg bg-blue-500 text-sm font-medium text-white "
                        : "block rounded-lg bg-transparent text-sm font-medium"
                    }
                  >
                    <li className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white">
                      Dashboard
                    </li>
                  </NavLink>

                  <NavLink
                    to="tsection"
                    className={({ isActive }) =>
                      isActive
                        ? "block rounded-lg bg-blue-500 text-sm font-medium text-white "
                        : "block rounded-lg bg-transparent text-sm font-medium"
                    }
                  >
                    <li className="block rounded-lg p-4 text-sm font-medium text-white hover:bg-main-40 hover:text-white">
                      Tables
                    </li>
                  </NavLink>

                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      isActive
                        ? "block rounded-lg bg-blue-500 text-sm font-medium text-white "
                        : "block rounded-lg bg-transparent text-sm font-medium"
                    }
                  >
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
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-lg text-blue-500 text-sm font-medi"
                  : "block rounded-lg bg-transparent text-sm font-medium"
              }
            >
              <BottomNavigationAction
                className="border border-black"
                label="Dashboard"
                value="Dashboard"
                icon={<RiDashboardFill className="text-2xl" />}
              />
            </NavLink>
            <NavLink
              to="tsection"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-lg text-blue-500 text-sm font-medi"
                  : "block rounded-lg bg-transparent text-sm font-medium"
              }
            >
              <BottomNavigationAction
                className="border border-black"
                label="Table"
                value="Table"
                icon={<LiaTableSolid className="text-2xl" />}
              />
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-lg text-sm font-medium text-blue-500 "
                  : "block rounded-lg bg-transparent text-sm font-medium"
              }
            >
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

export default Header