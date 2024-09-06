import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer className="hidden lg:flex flex-col justify-center items-center ml-72 bg-gray-100 bottom-0 h-32">
        <div className=" mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600"></div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"></p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://drive.google.com/file/d/1E0QHH-GJ6ih7N2ld9QYH_kO5NW6PoCo3/view"
              >
                {" "}
                About{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.naukri.com/mnjuser/profile"
              >
                {" "}
                Naukri{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="tel:6379940593"
              >
                {" "}
                Call{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Services{" "}
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a href="https://api.whatsapp.com/send?phone=916379940593">
                <FaWhatsapp className="h-6 w-6 text-gray-700 hover:text-gray-700/75" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hariharachandru-front-end-developer/">
                <FaLinkedin className="h-6 w-6 text-gray-700 hover:text-gray-700/75" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Harii10">
                <IoLogoGithub className="h-6 w-6 text-gray-700 hover:text-gray-700/75" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="border border-gray-900"></hr>
        <div className="flex justify-center">
          <div className="m-1">
            <FaRegCopyright />
          </div>
          <p> 2024 | All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
