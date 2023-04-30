import React from 'react'
import Navbar from '../components/Navbar';
import { useNavigate, Link } from "react-router-dom";
import ReactGA from 'react-ga';

const TRAKING_ID = "G-X2SJDWTRTV";
ReactGA.initialize(TRAKING_ID);

const Contacts = () => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
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