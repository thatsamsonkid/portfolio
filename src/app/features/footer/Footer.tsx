import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="bg-primary z-10 text-black pt-4 px-3 pb-3">
      <div className="max-content-width mx-auto">
        <div className="flex flex-col justify-between text-center gap-2">
          <div>
            <p className="copyright font-semi">
              Built by Sammy Mohamed &amp; designed by{" "}
              <a className="link" href="https://alexandralaw.design/">
                Alex Law
              </a>
            </p>
          </div>
          <div className="flex max-h-[25px] justify-center items-center gap-5">
            <div className="w-[25px] max-w-[25px]">
              <a
                className="link link-hover"
                href="https://www.linkedin.com/in/sammymohamed12/"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                <span className="sr-only">LinkedIn Profile</span>
              </a>
            </div>
            <div className="w-[25px] max-w-[25px]">
              <a href="https://github.com/thatsamsonkid">
                <FontAwesomeIcon icon={faGithub} />
                <span className="sr-only">Github Profile</span>
              </a>
            </div>
            <div className="w-[25px] max-w-[25px]">
              <a href="https://twitter.com/SammyMohamed_">
                <FontAwesomeIcon icon={faTwitter} />
                <span className="sr-only">Twitter Profile</span>
              </a>
            </div>
          </div>
          <div>
            <p className="copyright">
              &copy; {currentYear} Sammy Mohamed | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
