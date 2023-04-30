import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function onMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="bg-dark">
      <div className="mx-auto max-w-7xl py-4 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#2c2c2c] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={onMenuClick}>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex flex-shrink-0 items-center">
              <Link to={'/'}>
                <p className="block h-5 w-auto lg:hidden sm:hidden mx-auto text-gray-100 font-syne tracking-widest leading-1 font-bold">MATTEO MACRI</p>
              </Link>
            </div>
            <div className="hidden sm:ml-6 md:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link to={'/'}>
                  <img className="mx-auto" src={logo} style={{ width: 30, paddingTop: 6 }} />
                </Link>
                <Link to={'/about'}>
                  <p className="text-gray-100 hover:text-[#999999] block rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold whitespace-nowrap">ABOUT ME</p>
                </Link>
                <Link to={'/posts'}>
                  <p className="text-gray-100 hover:text-[#999999] rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold">POSTS</p>
                </Link>
                <Link to={'/projects'}>
                  <p className="text-gray-100 hover:text-[#999999] rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold">PROJECTS</p>
                </Link>
                <Link to={'/courses'}>
                  <p className="text-gray-100 hover:text-[#999999] rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold">COURSES</p>
                </Link>
                <Link to={'/contacts'}>
                  <p className="text-gray-100 hover:text-[#999999] rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold">CONTACTS</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={isMobileMenuOpen ? 'sm:hidden block' : 'hidden sm:hidden'} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <Link to={'/about'}>
            <p className="text-gray-100 hover:text-[#999999] block rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold" aria-current="page">ABOUT ME</p>
          </Link>
          <Link to={'/posts'}>
            <p className="text-gray-100 hover:text-[#999999] rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold">POSTS</p>
          </Link>
          <Link to={'/projects'}>
            <p className="text-gray-100 hover:text-[#999999] rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold">PROJECTS</p>
          </Link>
          <Link to={'/courses'}>
            <p className="text-gray-100 hover:text-[#999999] rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold">COURSES</p>
          </Link>
          <Link to={'/contacts'}>
            <p className="text-gray-100 hover:text-[#999999] rounded-md px-5 py-2 font-syne tracking-widest leading-1 font-bold">CONTACTS</p>
          </Link></div>
      </div>
    </nav>
  )
}

export default Navbar