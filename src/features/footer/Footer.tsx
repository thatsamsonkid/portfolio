import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { device } from "@unbyte-io/react-fuego";

const FooterEl = styled.footer`
  background-color: var(--ocean-blue);
  z-index: 10;
  color: var(--black) !important;

  .footer-inner-wrapper {
    max-width: 120rem;
  }

  .footer-bottom {
    text-align: center;

    p {
      color: var(--black);
    }
  }
`;

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <FooterEl className="footer-sm pt-4 px-3 pb-3">
      <div className="footer-inner-wrapper mx-auto">
        <div className="footer-bottom d-flex flex-column justify-content-between">
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
    </FooterEl>
  );
}

export default Footer;
