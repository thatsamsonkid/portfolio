import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  z-index: 10;
  width: 100%;
  color: white;
  box-shadow: var(--shadow1);

  .header-wrapper {
    max-width: 120rem;
  }

  .site-logo-wrapper {
    position: relative;

    & > div {
      position: unset !important;
    }
  }

  .custom-img {
    object-fit: contain;
    width: 7.2rem !important;
    position: relative !important;
    height: unset !important;
  }

  .site-logo img {
    height: 6rem;
  }
`;

function Header() {
  return (
    <HeaderWrapper className="py-3 px-4">
      <div className="header-wrapper d-flex mx-auto">
        <div className="site-logo">
          <Link href="/">
            <a className="hidden-text">
              Go to Home Page
              <div className="site-logo-wrapper">
                <img
                  src="/images/am-logo-header.png"
                  alt=""
                  className="custom-img"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="ms-auto text-right">
          <h1 className="sm-overline">Ahmed Mohamed</h1>
          <a className="d-block sm-subline mb-0" href="tel:+(571)-278-0960">
            (571)-278-0960
          </a>
          <a
            className="d-block sm-subline mb-0"
            href="mailto:homesmdva@gmail.com"
          >
            homesmdva@gmail.com
          </a>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
