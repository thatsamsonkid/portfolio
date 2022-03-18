import React, { useState } from "react";
import NavItem, { NavItemWrapper } from "./Nav-Item";
import styled from "styled-components";
import { device } from "@unbyte-io/react-fuego";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  left: 2rem;
  bottom: 10rem;
  z-index: 10;

  &::before {
    content: "";
    opacity: 0;
    width: 4.5rem;
    height: 29rem;
    position: absolute;
    bottom: 3.5rem;
    left: 0;
    background-color: rgba(355, 355, 355, 0.9);
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    transition: opacity 0.4s;
  }

  ${NavItemWrapper} {
    opacity: 0;
    transform-origin: 0 0;
    transform: translate(0, 3rem);
    transition: opacity 0.35s, transform 0.5s;

    @media ${device.tabletAndAbove} {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  &.expanded {
    ${NavItemWrapper} {
      opacity: 1;
      transform: translate(0, 0);
    }

    &::before {
      opacity: 1;
    }
  }

  @media ${device.tabletAndAbove} {
    left: 3rem;
  }
`;

const NavAccent = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 0.2rem;
    height: 12rem;
    background-color: var(--ocean-blue);
  }
`;

const FAB = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 3rem;
  border: none;
  z-index: 12;
  opacity: 0.75;
  transform: translate(0, 4rem);

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media ${device.tabletAndAbove} {
    display: none;
  }
`;

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  function toggleNav() {
    console.log("Lol");
    setExpanded(!expanded);
  }

  return (
    <NavWrapper className={expanded ? "expanded" : ""}>
      <NavItem type="home" link="#home"></NavItem>
      <NavItem type="about" link="#home"></NavItem>
      <NavItem type="projects" link="#home"></NavItem>
      <NavItem type="skills" link="#home"></NavItem>
      <NavItem type="contact" link="#home"></NavItem>
      <NavAccent className="d-none d-md-flex">
        <div></div>
      </NavAccent>
      <FAB className="" onClick={() => toggleNav()}></FAB>
    </NavWrapper>
  );
};

export default Navigation;
