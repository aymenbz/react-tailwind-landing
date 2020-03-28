import React from "react";
import Logo from "../assets/images/logo.svg";

function Navigation() {
  return (
    <div className="container mx-auto px-6">
      <nav
        className="flex items-center justify-between flex-wrap "
        style={{ paddingTop: "4rem" }}
      >
        <div
          className="flex items-center flex-shrink-0 "
          style={{ marginRight: "3rem" }}
        >
          <img src={Logo} alt="" />
        </div>
        <div className="block lg:hidden">
          <button className="hamburger-menu flex items-center px-3 py-2 rounded text-primary ">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              className="fill-current h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1Z"
                fill="#64748B"
              />
              <path
                d="M0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7Z"
                fill="#64748B"
              />
              <path
                d="M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H8C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12H1Z"
                fill="#64748B"
              />
            </svg>
          </button>
        </div>

        <div className="main-menu w-full flex-grow block lg:flex lg:w-auto lg:items-center hidden lg:block">
          <div className="text-sm lg:flex-grow">
            <a
              href="#"
              className="mr-4 mt-4 block lg:inline-block lg:mt-0 text-base text-secondary"
            >
              Changelog
            </a>
            <a
              href="#"
              className="mr-4 mt-4 block lg:inline-block lg:mt-0 text-base text-secondary"
            >
              About
            </a>
            <a
              href="#"
              className="mr-4 mt-4 block lg:inline-block lg:mt-0 text-base text-secondary"
            >
              Partners
            </a>
            <a
              href="#"
              className="mr-4 mt-4 block lg:inline-block lg:mt-0 text-base text-secondary"
            >
              News
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block bg-white rounded-md p-3 px-6 shadow-md text-indigo text-base font-medium mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
