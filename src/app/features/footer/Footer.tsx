import React from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-primary z-10 text-black pt-4 px-3 pb-3">
      <div className="max-content-width mx-auto">
        <div className="d-flex flex-column justify-content-between text-center">
          <div>
            <p className="copyright mb-2 font-semi">
              Built by Sammy Mohamed &amp; designed by Alex Law
            </p>
          </div>
          <div>
            <p className="copyright mb-2">
              &copy; {currentYear} Sammy Mohamed | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
