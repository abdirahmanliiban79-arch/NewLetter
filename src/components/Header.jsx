import { useState } from "react";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Avatar_url = 
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D";

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Holds the parts of the header */}
        <div className="flex justify-between items-center">
          {/* left side */}
          <div className="flex items-center space-x-8 md:space-x-4">
            <Link
              to="/"
              className="text-xl font-bold md:text-3xl text-rose-500"
            >
              NewsLetter
            </Link>

            <nav className="mt-1">
              <Link
                to="/"
                className="hidden sm:p-1 sm:inline-block md:inline-block md:px-3 md:py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-b-2 border-rose-500"
              >
                Home
              </Link>
              <Link
                to="/articles"
                className="hidden sm:p-1 md:inline-block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-b-2 border-transparent"
              >
                Articles
              </Link>
              <Link
                to="/write"
                className="hidden sm:p-1 md:inline-block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-b-2 border-transparent"
              >
                Write
              </Link>
              <Link
                to="/articles"
                className="hidden sm:p-1 md:inline-block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-b-2 border-transparent"
              >
                Article
              </Link>
              <Link
                to="/article/:id"
                className="hidden sm:p-1 md:inline-block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-b-2 border-transparent"
              >
                My Articles
              </Link>
            </nav>
          </div>

          {/* right side */}
          <div className="flex items-center ">
            {isLoggedIn ? (
              <div className="flex items-center space-x-1.5">
                <div>
                  <span className="text-gray-900 font-semibold">
                    Hello Welcome
                  </span>
                </div>
                <div className="relative">
                  <button
                    className="w-10 h-10 bg-red-400 focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 rounded-full"
                    onMouseEnter={() => setIsDropdown(true)}
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    {Avatar_url ? (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={Avatar_url}
                        alt="avatar"
                      />
                    ) : (
                      <FaUser className="text-rose-300 w-8 h-8 ml-1 rounded-full" />
                    )}
                  </button>

                  {/* Dropdown */}
                  {isDropdown && (
                    <div
                      className="absolute top-12 right-5 w-30 bg-white shadow-md rounded px-2 py-1 z-10 h-27 overflow-hidden"
                      onMouseLeave={() => setIsDropdown(false)}
                    >
                      <Link className="block py-1 hover:bg-gray-100 font-semibold">
                        Profile
                      </Link>
                      <Link className="block py-1 hover:bg-gray-100 font-semibold">
                        My Articles
                      </Link>
                      <Link className="block py-1 hover:bg-gray-100 font-semibold">
                        Sign Out
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-x-2 sm:flex">
                <Link
                  to="signin"
                  className="hidden px-2 py-2 bg-rose-500 hover:bg-rose-550 border border-transparent focus-outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-rose-500 sm:inline-flex sm:flex-shrink-0 items-center rounded-md text-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="focus:outline-none focus:ring-2 focus:ring-rose-500 hover:bg-rose-300 px-2 py-2 border border-transparent hidden sm:inline-flex items-center sm:flex-shrink-0 text-black rounded-md border-none"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {/* Mobile menu */}
            <div className="md:hidden ml-2">
              <button
                className="flex flex-row items-center space-x-1.5 text-xl text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
              </button>
            </div>
            {/* registeration */}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className=" w-full bg-gray-50">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-l-2 border-rose-500"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-l-2 border-transparent"
            >
              Articles
            </Link>
          </div>

          {isLoggedIn && (
            <div className="sm:hidden">
              <Link
                to="/write"
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-l-2 border-transparent"
              >
                Write
              </Link>
              <Link
                to="/articles"
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-l-2 border-transparent"
              >
                Article
              </Link>
              <Link
                to="/article/:id"
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-l-2 border-transparent"
              >
                My Articles
              </Link>
              <Link className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-l-2 border-transparent">
                Profile
              </Link>
              <Link className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 md:ml-8 border-l-2 border-transparent">
                Sign Out
              </Link>
            </div>
          )}

          {!isLoggedIn && (
            <div className="sm:hidden">
              <Link
                to="signin"
                className="block px-2 py-2 bg-rose-500 hover:bg-rose-550 border border-transparent focus-outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-rose-500 sm:inline-flex items-center rounded-md text-white"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-rose-300 px-2 py-2 border border-transparent sm:inline-flex items-center rounded-md border-none"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
