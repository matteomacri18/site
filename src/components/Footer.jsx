import React from 'react';
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const current = new Date();

  return (
    <div className='pt-44 pb-10'>
      <footer className="bg-dark">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-600 sm:text-center">© {current.getFullYear()}
            <a href="https://flowbite.com/" className="hover:underline"> Matteo Macri</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to={'/'}>
                <p className="mr-4 hover:underline md:mr-6">Home</p>
              </Link>
            </li>
            <li>
              <Link to={'/policy'}>
                <p className="mr-4 hover:underline md:mr-6">Privacy Policy</p>
              </Link>
            </li>
            <li>
              <Link to={'/policy-cookie'}>
                <p className="mr-4 hover:underline md:mr-6">Cookie Policy</p>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer