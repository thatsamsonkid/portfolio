"use client";

import { TextImage } from "@fuego-ui/react";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <>
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
        <h1 className="text-5xl font-bold text-left mb-6">About Me</h1>
        <p className="mb-3">Hi there,</p>
        <p className="mb-8">
          I'm currently a Lead Software Engineer and have been at Amtrak since
          2016. My experience has largely consisted of developing
          web-applications within AEM (Versions 6.2 - 6.5) working both on the
          front-end and back-end of these applications. In AEM I have built new
          applications as well as migrated existing web-apps from their previous
          platform.
        </p>
        <p className="mb-8">
          I recently received the CEO Circle Award at Amtrak for my
          contributions to Amtrak's COVID-19 response. I worked on several
          projects with my team through out the year to help improve the
          customer's experience and safety while riding Amtrak during these
          uncertain times.
        </p>
        <p className="mb-8">
          Over the past few years, I've also had the opportunity to work as a
          contractor for AB Inbev and Stantec. I largely worked on some AEM
          migration work as well as quite a bit of front-end development such as
          creating customer survey experiences and improve site wide web
          accessibility.
        </p>
      </TextImage>
      <p className="mb-8">
        Today I largely work within the Angular Framework and have been building
        Angular applications and web-components for micro-frontends. I've also
        worked in React and NextJS mainly for personal projects and enjoyed
        working with these technologies as well. Although my education largely
        focused on networking and telecommunications, I have really enjoyed
        working in web development and I believe I have a gained a passion for
        working on the front-end aspect of applications.
      </p>
      <p className="mb-8">
        I definitely want to continue working within Angular/React and AEM as
        well, so that I can further hone my knowledge and skills within these
        technologies. I also have gained an interest in mobile app development,
        specifically utilizing Ionic/Capacitor framework but also interested in
        React Native given my experience with React thus far.
      </p>
    </>
  );
};

export default AboutMe;
