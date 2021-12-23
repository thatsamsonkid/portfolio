import React from "react";
import styled from "styled-components";
import Image from "next/image";
import device from "../../shared/utils/breakpoints";

const FooterEl = styled.footer`
  background-color: var(--royal-blue);
  z-index: 10;
  color: var(--white);

  .footer-logos {
    position: relative;
  }

  .footer-contact {
    text-align: center;
  }

  @media ${device.mobile} {
    .footer-images {
      justify-content: space-around;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media ${device.mobileAndAbove} {
    .footer-logos {
      height: 5rem;
    }
  }

  @media ${device.tabletAndAbove} {
    .footer-contact {
      text-align: left;
    }
  }

  .footer-inner-wrapper {
    max-width: 120rem;
  }

  //TODO: Move to global classes
  .sm-overline--white {
    color: var(--white);
    font-size: 1.4rem;
    font-weight: var(--bold);
  }

  .sm-subline--white {
    color: var(--white);
    font-size: 1.2rem;
    font-weight: var(--semi);
  }

  .footer-bottom {
    text-align: center;
  }
`;

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <FooterEl className="footer-sm pt-4 px-3 pb-3">
      <div className="footer-inner-wrapper mx-auto">
        <div className="d-flex justify-content-between flex-flow-col-to-row mb-3">
          <div className="footer-contact mb-4 mb-md-0">
            <p className="sm-overline--white mb-2">Ahmed Mohamed</p>
            <a
              href="tel:571-278-0960"
              className="d-block sm-subline--white mb-0"
            >
              (571)-278-0960
            </a>
            <a href="mailto:homesmdva@gmail.com" className="sm-subline--white">
              homesmdva@gmail.com
            </a>
          </div>
          <div className="footer-images d-flex justify-content-between align-items-center ms-md-auto">
            <div className="footer-logos">
              <Image
                src="/images/eho-white.png"
                alt=""
                width="46"
                height="50"
              />
            </div>
            <div className="footer-logos mx-3 mx-md-5">
              <Image src="/images/united.png" alt="" width="106" height="50" />
            </div>
            {/* </div> */}
            <div className="footer-logos">
              <Image src="/images/realtor.png" alt="" width="41" height="50" />
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between flex-column-reverse flex-md-row flex-md-row">
          <div>
            <p className="copyright mb-2">
              &copy; {currentYear} Ahmed Mohamed | All Rights Reserved
            </p>
          </div>
          <div className="mb-2 mb-md-0">
            <div className="d-md-inline">
              <a
                _ngcontent-yxf-c8=""
                rel="noopener"
                target="_blank"
                href="https://www.google.com/maps/search/?api=1&amp;query=10780%20Parkridge%20Blvd,%20Ste%2080,%20Reston,%20VA,%2020191"
                className="sm-subline--white"
              >
                {" "}
                10780 Parkridge Blvd, Ste 80, Reston, VA, 20191{" "}
              </a>
            </div>
            <span className="d-none d-md-inline">|</span>
            <div className="d-md-inline">
              <a
                _ngcontent-yxf-c8=""
                href="tel:+(703)-889-5347"
                className="sm-subline--white"
              >
                {" "}
                (703)-889-5347{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterEl>
  );
}

export default Footer;
