import React, { useState } from "react"
import Snackbar from "@mui/material/Snackbar"

function Contact() {
  const [successAlert, setSuccessAlert] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)

  const message = (event) => {
    event.preventDefault()
    const name = document.getElementById("Name")
    const lName = document.getElementById("lName")
    const email = document.getElementById("Email")
    const msg = document.getElementById("OrderNotes")

    if (
      name.value === "" ||
      lName.value === "" ||
      email.value === "" ||
      msg.value === ""
    ) {
      setErrorAlert(true)
    } else {
      setSuccessAlert(true)
      name.value = ""
      lName.value = ""
      email.value = ""
      msg.value = ""
    }
  };
  return (
    <div>
      <div className="m-0 mx-2 w-96 lg:ml-80 my-10 lg:mx-14 p-5 lg:w-97 shadow-lg rounded-xl border border-gray-300 bg-white">
        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Contact Us
        </h1>
        <form
          action=""
          className="mt-8 grid grid-cols-6 gap-6"
          onSubmit={message}
        >
          <div>
            <Snackbar
              open={errorAlert}
              autoHideDuration={5000}
              onClose={message}
              message="Fill out the Fields."
            />
          </div>
          <div className="flex gap-12 w-fit -ml-44">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                type="text"
                id="Name"
                name="first_name"
                className="mt-1 w-96 rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-gray-700"
                id="lName"
              >
                Last Name
              </label>

              <input
                type="text"
                id="LastName"
                name="last_name"
                className="mt-1 w-96 rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
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
          <button
            className="flex justify-center items-center mt-64 w-96 rounded-md bg-main-30 text-white shadow-sm h-10 ml-40 hover:border hover:border-main-30 hover:bg-white hover:text-black"
            onClick={message}
          >
            Send
          </button>
          <div>
            <Snackbar
              open={successAlert}
              autoHideDuration={5000}
              onClose={message}
              message="Message Sent!"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact
