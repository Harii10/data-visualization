import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SiAlwaysdata } from "react-icons/si";

function Getstarted() {
  return (
    <>
      <div className="text-white">
        <div class="flex justify-center items-center h-lvh w-lvw bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
          <div className="flex flex-col justify-center items-center w-full">
            <SiAlwaysdata
              className="h-24 w-24 text-main-30
         lg:w-72 lg:h-72"
            />
            <div>
              <Link to="dashboard">
                <button className="text-2xl font-semibold m-3 p-5 rounded-full bg-gray-700 text-white lg:w-56 lg:hover:bg-main-50">
                  <span className=" tracking-widest">Explore</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Getstarted;
