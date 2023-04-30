import React from 'react';

const Footer = () => {
  const current = new Date();

  return (
    <div className='bg-dark mx-auto text-center bottom-0'>
      {/* <p className="text-gray-100 font-syne tracking-widest leading-1 font-bold" alt="Matteo Macri" style={{ fontSize: 11 }}>MATTEO MACRI'</p>
      <p className="text-gray-100 font-syne tracking-widest leading-1 font-bold" alt="SWE" style={{ fontSize: 9 }}>SOFTWARE ENGINEER</p> */}
      <p className="text-gray-500" alt="RIGHTS" style={{ paddingTop: 100, marginBottom: 30, fontSize: 12 }}>
        © {current.getFullYear()} Matteo Macri. All Rights Reserved.</p>
    </div>
  )
}

export default Footer