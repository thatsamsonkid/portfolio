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

  ${NavItemWrapper} {
    opacity: 0;
    transform-origin: 0 0;
    transform: translate(0, 3rem);
    transition: opacity 0.35s, transform 0.5s;
  }

  &.expanded {
    ${NavItemWrapper} {
      opacity: 100;
      transform: translate(0, 0);
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
  transform: translate(0, 4rem);
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
