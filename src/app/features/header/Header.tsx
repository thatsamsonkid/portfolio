"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useScrollPosition from "@react-hook/window-scroll";
import styles from "./header.module.css";

function Header({ headerEl }: any) {
  const [elevated, setElevated] = useState(false);
  const scrollPosition = useScrollPosition();

  const headerOffset =
    headerEl && headerEl.current ? headerEl.current.offsetTop : 0;

  useEffect(() => {
    if (scrollPosition > headerOffset) {
      setElevated(true);
    } else {
      setElevated(false);
    }
  }, [scrollPosition]);

  return (
    <header
      ref={headerEl}
      className={`${
        styles["global-header"]
      } w-full z-10 text-white bg-black py-3 px-4 ${
        elevated ? styles.elevated : ""
      }`}
    >
      <div className="max-content-width d-flex mx-auto">
        <Image
          className={`${styles["site-logo"]} ml-auto`}
          width={elevated ? 40 : 80}
          height={elevated ? 40 : 80}
          src="/images/SM-LOGO.png"
          alt="Site Logo"
          style={{ transition: `${elevated ? "all 0.2s" : "all 0.6s"}` }}
        />
      </div>
    </header>
  );
}

export default Header;
