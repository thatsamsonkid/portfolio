// "use client";

import Image from "next/image";
// import ContactForm from "./features/contact-form/Contact-Form";
import AboutMe from "./content-sections/AboutMe";
import Professional from "./content-sections/Professional";
import Skills from "./content-sections/Skills";
import Navigation from "./shared/components/navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Projects from "./content-sections/Projects";

export default function Home() {
  return (
    <main className="">
      <section
        className="flex flex-col content-center items-center min-h-screen"
        id="home"
      >
        <div className="pb-40 mt-40">
          <h1 className="mt-0 text-3xl leading-7 tracking-wide text-center text-white md:text-6xl md:tracking-widest">
            Sammy Mohamed
          </h1>
          <p className="mt-0 text-3xl italic tracking-wide text-center text-ocean-blue">
            Just a Dev
          </p>
        </div>
        <Navigation></Navigation>
      </section>

      <section
        id="about"
        className="max-content-width mx-auto min-h-screen px-5 md:px-12 mb-20"
      >
        <AboutMe></AboutMe>
      </section>
      <section
        id="professional"
        className="max-content-width mx-auto min-h-screen px-5 md:px-12"
      >
        <Professional></Professional>
      </section>
      {/* <section
        id="projects"
        className="max-content-width mx-auto min-h-screen px-5 md:px-12"
      >
        <Projects></Projects>
      </section> */}
      <section
        id="skills"
        className="max-content-width mx-auto my-20 min-h-screen px-5 md:px-12"
      >
        <Skills></Skills>
      </section>
      <section
        id="contact"
        className="max-content-width mx-auto mt-20 mb-40 px-3"
      >
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mx-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
              Get In Touch!
            </h1>
            <div className="text-center mt-12">
              <ul className="space-y-2 md:space-y-4 mb-4 inline-block text-center">
                <li className="flex items-center">
                  <a
                    className="link link-hover md:text-xl"
                    href="https://www.linkedin.com/in/sammymohamed12/"
                  >
                    <FontAwesomeIcon
                      className="w-[13.5px] md:w-[16.5px]  inline-block mr-2 mb-1 md:mb-2"
                      icon={faLinkedinIn}
                    />
                    <span>Connect with me on LinkedIn</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="link link-hover md:text-xl"
                    href="https://twitter.com/SammyMohamed_"
                  >
                    <FontAwesomeIcon
                      className="inline-block w-[13.5px] md:w-[16.5px] mr-2 mb-1"
                      icon={faTwitter}
                    />
                    <span>Follow me on Twitter</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="md:mt-12">
              <Image
                style={{ margin: "0 auto" }}
                src="/images/SAM_1.svg"
                width={364}
                height={186}
                alt="Quetzal Bird Flying over the the Pyramids of Egypt illustrated to refer to Sammy's background"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
