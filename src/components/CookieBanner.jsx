import { useState, useEffect } from 'react';

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
            Questo sito utilizza i cookie per migliorare l'esperienza dell'utente.{" "}
            <a href="/privacy-policy" className="underline">
              Leggi la nostra privacy policy
            </a>{" "}
            per maggiori informazioni.
          </p>
          <button
            onClick={handleConsent}
            className="ml-4 bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300 ease-in-out"
          >
            Accetto
          </button>
        </div>
      )}
    </>
  );
};

export default CookieBanner;