import React from 'react'
import { Link } from 'react-router'
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* Nav */}
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <Link
            to="/"
            className="text-base text-gray-500 hover:text-gray-900 px-5 py-2"
          >
            Home
          </Link>
          <Link
            to="articles"
            className="text-base text-gray-500 hover:text-gray-900 px-5 py-2"
          >
            Articles
          </Link>
          <Link
            to="tags"
            className="text-base text-gray-500 hover:text-gray-900 px-5 py-2"
          >
            Tags
          </Link>
          <Link
            to="about"
            className="text-base text-gray-500 hover:text-gray-900 px-5 py-2"
          >
            About us
          </Link>
          <Link
            to="contact"
            className="text-base text-gray-500 hover:text-gray-900 px-5 py-2"
          >
            Contact
          </Link>
        </nav>
        {/* social icons */}
        <div className="mt-8 flex justify-center space-x-6 flex-wrap">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">X</span>
            <FaXTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instegram</span>
            <GrInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-gray-400">Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer