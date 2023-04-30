import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pic from '../assets/pic.jpg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-dark lg:py-24 md:pb-20 2xl:py-36'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-18 2xl:gap-24 mx-auto xl:pl-40 xl:pe-40 md:pl-20 md:pe-20 pl-10 pe-10">
          <div className="p-10 2xl:ml-40 lg:pl-36">
            <div className="container mx-auto">
              <h1 className="text-3xl text-gray-100 font-syne tracking-widest leading-1 font-bold" alt="Matteo Macri">MATTEO MACRI'</h1>
              <h4 className="text-1xl text-gray-100 font-syne tracking-widest leading-1 font-bold" alt="SWE">SOFTWARE ENGINEER</h4>
              <h5 className="text-1xl text-gray-100 font-syne tracking-widest leading-1 font-bold" alt="bio" style={{ marginTop: 50 }}>
                Hello, I’m a Mobile Application Developer,
                specializing in Android Development but
                i’ve worked with Cross-platform tools. <br />
                I like learning new things but I also like breaks :)
              </h5>
              <div className="py-20 grid grid-cols-4 gap-4 md:gap-8 lg:gap-12 mx-auto">
                <a href="https://www.linkedin.com/in/matteo-macr%C3%AD-997060193/" target="_blank">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="#F3F4F6"
                    width="2rem"
                  >
                    <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" />
                  </svg>
                </a>
                <a href="https://github.com/matteomacri18" target="_blank">
                  <svg
                    viewBox="0 0 920 1000"
                    fill="#F3F4F6"
                    width="2rem"
                  >
                    <path d="M620 564c17.333 0 32.333 8.667 45 26 12.667 17.333 19 38.667 19 64s-6.333 46.667-19 64-27.667 26-45 26c-18.667 0-34.333-8.667-47-26-12.667-17.333-19-38.667-19-64s6.333-46.667 19-64 28.333-26 47-26m226-234c49.333 53.333 74 118 74 194 0 49.333-5.667 93.667-17 133s-25.667 71.333-43 96-38.667 46.333-64 65-48.667 32.333-70 41c-21.333 8.667-45.667 15.333-73 20s-48 7.333-62 8c-14 .667-29 1-45 1-4 0-16 .333-36 1s-36.667 1-50 1c-13.333 0-30-.333-50-1s-32-1-36-1c-16 0-31-.333-45-1s-34.667-3.333-62-8-51.667-11.333-73-20-44.667-22.333-70-41-46.667-40.333-64-65-31.667-56.667-43-96C5.667 617.667 0 573.333 0 524c0-76 24.667-140.667 74-194-5.333-2.667-5.667-29.333-1-80s15.667-97.333 33-140c61.333 6.667 137.333 41.333 228 104 30.667-8 72.667-12 126-12 56 0 98 4 126 12 41.333-28 81-50.667 119-68s65.667-27.333 83-30l26-6c17.333 42.667 28.333 89.333 33 140 4.667 50.667 4.333 77.333-1 80M462 844c110.667 0 194.333-13.333 251-40s85-81.333 85-164c0-48-18-88-54-120-18.667-17.333-40.333-28-65-32s-62.333-4-113 0-85.333 6-104 6h-2-2c-21.333 0-49-1.333-83-4s-60.667-4.333-80-5c-19.333-.667-40.333 1.667-63 7s-41.333 14.667-56 28c-34.667 30.667-52 70.667-52 120 0 82.667 28 137.333 84 164s139.333 40 250 40h4M302 564c17.333 0 32.333 8.667 45 26 12.667 17.333 19 38.667 19 64s-6.333 46.667-19 64-27.667 26-45 26c-18.667 0-34.333-8.667-47-26-12.667-17.333-19-38.667-19-64s6.333-46.667 19-64 28.333-26 47-26" />
                  </svg>
                </a>
                <a href="https://devlibrary.withgoogle.com/authors/matteomacri18" target="_blank">
                  <svg
                    viewBox="0 0 640 512"
                    fill="#F3F4F6"
                    width="2rem"
                  >
                    <path d="M180.5 74.262C80.813 74.262 0 155.633 0 256s80.819 181.738 180.5 181.738S361 356.373 361 256 280.191 74.262 180.5 74.262zm288.25 10.646c-49.845 0-90.245 76.619-90.245 171.095s40.406 171.1 90.251 171.1 90.251-76.619 90.251-171.1H559c0-94.503-40.4-171.095-90.248-171.095zm139.506 17.821c-17.526 0-31.735 68.628-31.735 153.274s14.2 153.274 31.735 153.274S640 340.631 640 256c0-84.649-14.215-153.271-31.742-153.271z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="2xl:me-40 lg:pl-12 2xl:pt-6 lg:pt-6">
            <section className="hero container max-w-screen-lg rounded-lg">
              <img className="mx-auto" src={pic} style={{ width: 300, borderRadius: 300 }} />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home