"use client";

import { TextImage } from "@fuego-ui/react";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <TextImage
      className="mt-3"
      textColClassName="flex-1"
      imgColClassName="flex-1 text-center lol"
      imgChild={
        <Image
          width={402}
          height={531}
          src="/images/new-sammy.png"
          alt="Sammy Mohamed Portrait"
        />
      }
    >
      <h1 className="text-5xl font-bold text-left mb-6 text-ocean-blue">
        About Me
      </h1>
      <p className="mb-3">Hi there,</p>
      <p className="mb-8">
        A little bit about me, I'm currently a Web Developer at Amtrak since
        2016. My experience has largely consisted of developing web-applications
        within AEM (Versions 6.2 - 6.4) working both in the front-end and
        back-end of these applications. n AEM I have built new applications and
        migrated existing web-apps from their previous platform.
      </p>
      <p className="mb-8">
        Lately, I have been working more within the Angular Framework. I am
        building Angular applications and web-components for micro-frontends
        both in my professional work and personal projects (such as this very
        site.) I've also worked in Vue and enjoyed working in this framework.
        Though my education largely focused on networking and
        telecommunications, I have started to enjoy working in web development
        with a passion for the front-end aspect of applications rather than the
        back-end.
      </p>
      <p className="mb-8">
        I definitely want to continue working within Angular and AEM, so that I
        can further hone my knowledge and skills within these technologies. I
        also have an interest in mobile app development, specifically utilizing
        the Flutter framework.
      </p>
    </TextImage>
  );
};

export default AboutMe;
