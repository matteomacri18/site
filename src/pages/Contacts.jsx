import React from 'react'
import Navbar from '../components/Navbar';
import ReactGA from 'react-ga';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';

const TRAKING_ID = process.env.REACT_APP_GOOGLE_AN;
ReactGA.initialize(TRAKING_ID);

const Contacts = () => {
  const form = React.useRef();
  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE, 
      process.env.REACT_APP_TEMPLATE, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        //clear form
        form.current.reset();
        setShowAlert(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <Navbar />
      <section class="bg-dark">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl font-syne tracking-light leading-1 font-bold text-center text-gray-900 dark:text-white">
            Get in touch &#128075;
          </h2>
          <p class="mb-8 lg:mb-16 text-center sm:text-xl text-gray-100 font-syne tracking-widest leading-1 font-bold">
            Fill out the form to contact me or write me on <a href="https://www.linkedin.com/in/matteo-macr%C3%AD-997060193/"> <u>Linkedin</u></a>
          </p>
          <form action="#" class="space-y-8" ref={form} onSubmit={sendEmail}>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" name="user_email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@domain.com" required />
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how I can help you" required />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" name="message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."></textarea>
            </div>
            <div>
              <input type="checkbox" id="termini-cookie-privacy" name="termini-cookie-privacy" required />
              <label for="termini-cookie-privacy" class="ml-2 text-white">I accept the terms and conditions of privacy policy and cookie policy</label>
            </div>
            <button type="submit" id="submitBtn" class="py-3 px-5 text-sm font-medium text-center bg-slate-700 text-white rounded-lg sm:w-fit hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >Submit</button>
          </form>
          {showAlert && (
            <div style={{ position: 'absolute', top: 100, right: 80 }}>
              <Alert />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contacts;