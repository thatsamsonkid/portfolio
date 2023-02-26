"use client";

import React, { useEffect, useState } from "react";
import NavItem from "./Nav-Item";
import styles from "./navigation.module.css";
import useScrollPosition from "@react-hook/window-scroll";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [bottomReached, setBottomReached] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const footerBuffer = 50;
    if (scrollY + footerBuffer + clientHeight >= document.body.clientHeight) {
      setBottomReached(true);
    } else {
      setBottomReached(false);
    }
  }, [scrollY]);

  function toggleNav() {
    setExpanded(!expanded);
  }

  return (
    <div
      className={`flex md:hidden rounded-3xl ${styles.navigation} ${
        expanded ? `expanded ${styles.expanded}` : ""
      } ${bottomReached ? styles.bottomBuffer : ""}`}
    >
      <ul className={`${styles.menuItems}`}>
        <li>
          <NavItem type="home" link="#home"></NavItem>
        </li>
        <li>
          <NavItem type="about" link="#home"></NavItem>
        </li>
        <li>
          <NavItem type="projects" link="#home"></NavItem>
        </li>
        <li>
          <NavItem type="skills" link="#home"></NavItem>
        </li>
        <li>
          <NavItem type="contact" link="#home"></NavItem>
        </li>
      </ul>
      <div className="hidden md:flex w-[45px] h-[45px] min-h-[45px] justify-center items-center">
        <div className="w-[2px] h-[12px] bg-ocean-blue"></div>
      </div>
      <button
        className="btn w-[45px] h-[45px] min-h-[45px] rounded-full border-0 z-20 opacity-75 hover:focus:opacity-100 md:hidden"
        onClick={() => toggleNav()}
      >
        <div
          className={`${styles.hamburgler} ${expanded ? styles.active : ""}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
  );
};

export default Navigation;
