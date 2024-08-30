import React, { useState } from "react";

function Contact() {
  
  
  return (
    <div>
      <div className="m-0 mx-2 w-96 lg:ml-80 my-10 lg:mx-14 p-5 lg:w-97 shadow-lg rounded-xl border border-gray-300 bg-white">
      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Contact Us
        </h1>
        <form action="" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Email{" "}
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <textarea
            id="OrderNotes"
            class="w-94 lg:w-95 mt-2 h-56 rounded-lg border-gray-400 align-top shadow-sm sm:text-sm"
            placeholder=""
          ></textarea>
        </form>
        
        <button  className="mt-5 w-full rounded-md bg-main-30 text-white shadow-sm h-10">
          Send
        </button>
        
      </div>
    </div>
  )
}

export default Contact;
