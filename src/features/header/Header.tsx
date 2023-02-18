import React, { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import siteLogoImg from "../../../public/images/SM-LOGO.png";
import useScrollPosition from "@react-hook/window-scroll";

const HeaderWrapper = styled.header`
  z-index: 10;
  width: 100%;
  color: var(--white);
  background-color: var(--black);
  height: 10.2rem;
  transition: height 0.6s, transform 0.6s;

  .header-wrapper {
    max-width: 120rem;
  }

  .site-logo {
    width: 8rem;
    height: 8rem;
    transition: all 0.6s;
  }

  &.elevated {
    box-shadow: var(--shadow1);
    position: fixed;
    top: 0;
    height: 6rem;

    .site-logo {
      width: 4rem;
      height: 4rem;
    }
  }
`;

function Header({ headerEl }) {
  // const headerEl = useRef(null);
  const scrollPosition = useScrollPosition();
  let elevationClass = "";

  const headerOffset =
    headerEl && headerEl.current ? headerEl.current.offsetTop : 0;

  if (scrollPosition > headerOffset) {
    elevationClass = "elevated";
  } else {
    elevationClass = "";
  }

  return (
    <HeaderWrapper ref={headerEl} className={`py-3 px-4 ${elevationClass}`}>
      <div className="header-wrapper d-flex">
        <div className="site-logo ms-auto position-relative">
          <Image layout="fill" src={siteLogoImg} />
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
