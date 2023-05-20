import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    setShowBanner(!hasConsent);
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', true);
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-2 px-4">
          <p className="text-sm">
            This site uses cookies to improve the user experience.{" "}
            <Link to={'/policy'} className='hover: underline'>
              Read our privacy policy{" "}
            </Link>
            for more information.
          </p>
          <button
            onClick={handleConsent}
            className="ml-4 bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300 ease-in-out"
          >
            Agree
          </button>
        </div>
      )}
    </>
  );
};

export default CookieBanner;