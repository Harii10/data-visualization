import React from "react";

function Contact() {
  return (
    <div>
      <div className="ml-80 my-10 mx-12 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
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
            class="mt-2 w-97 h-56 rounded-lg border-gray-400 align-top shadow-sm sm:text-sm"
            placeholder=""
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
