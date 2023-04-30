import React from 'react'
import Navbar from '../components/Navbar';
import { useNavigate, Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <Link to={'/about'}>
      <p className='text-white'>WORKING PROGRESS</p>
      </Link>
    </div>
  )
}

export default Contacts