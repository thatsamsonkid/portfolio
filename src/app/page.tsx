// "use client";

import Image from "next/image";
import ContactForm from "./features/contact-form/Contact-Form";
import AboutMe from "./content-sections/AboutMe";
import Professional from "./content-sections/Professional";
import Skills from "./content-sections/Skills";
import Navigation from "./shared/components/navigation/Navigation";

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
        className="max-content-width mx-auto min-h-screen px-5 mb-20"
      >
        <AboutMe></AboutMe>
      </section>
      <section
        id="professional"
        className="max-content-width mx-auto min-h-screen px-5"
      >
        <Professional></Professional>
      </section>
      <section id="projects"></section>
      <section
        id="skills"
        className="max-content-width mx-auto my-20 px-3 min-h-screen"
      >
        <Skills></Skills>
      </section>
      <section
        id="contact"
        className="max-content-width mx-auto mt-20 mb-40 px-3"
      >
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
              Get In Touch!
            </h1>
            <ContactForm></ContactForm>
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
