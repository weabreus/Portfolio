import React from "react";

const Sidebar = () => {
  return (
    <div className="relative">
      <div className="w-10 fixed bottom-0 left-2.5 right-auto z-10 text-light-slate">
        <ul className="flex flex-col items-center m-0 p-0 list-none ">
          {/* Github */}
          <li>
            <a
              className="p-2.5"
              href="https://github.com/weabreus"
              target={"_blank"}
              aria-label="Github"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-github w-4 h-4"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              className=" p-2.5 "
              href="https://www.linkedin.com/in/wellingtonabreu/"
              target={"_blank"}
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-linkedin w-4 h-4"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>

          {/* Email */}
          <li className=" mb-5">
            <a
              className="p-2.5"
              href="mailto:wellington.abreu@gmail.com"
              target={"_blank"}
              aria-label="Email"
              rel="noreferrer"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </li>

          <span className="after:content-none after:block w-px h-[90px] my-0 mx-auto bg-light-slate"></span>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
