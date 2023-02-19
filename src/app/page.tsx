// "use client";

import Image from "next/image";
import ContactForm from "./features/contact-form/Contact-Form";
import AboutMe from "./content-sections/AboutMe";
import Professional from "./content-sections/Professional";
import Skills from "./content-sections/Skills";

export default function Home() {
  return (
    <main>
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
        {/* <Navigation></Navigation> */}
      </section>

      <section
        id="about"
        className="max-content-width mx-auto min-h-screen px-5"
      >
        <AboutMe></AboutMe>
      </section>
      <section
        id="professional"
        className="max-content-width mx-auto min-h-screen px-5"
      >
        <Professional></Professional>
      </section>
      {/* <section id="professional">
           <div className="container">
             <div className="row">
               <div className="col-12">
                 <h1>Professional Experience</h1>
                 <Tabs scrollable={true}>
                   <CustomTab label="Full-Time">
                     <TabContent>
                       <ExperienceCard className="experience-card mt-5">
                         <div className="experience-card__heading d-flex justify-content-center align-items-center">
                           <div className="flex-grow-1">
                             <h2 className="font-light">
                               Amtrak -{" "}
                               <span className="color-ocean-blue font-bold">
                                 <i>Senior Software Engineer</i>
                               </span>
                             </h2>
                           </div>
                           <div className="flex-grow-1">
                             <span>Aug 2018 - Present</span>
                           </div>
                         </div>
                         <div className="experience-card__content">
                           <CustomList>
                             <li>
                               Developing new sites and migrating existing sites
                               to the AEM platform
                             </li>
                             <li>
                               Created technical diagrams to aid visualization of
                               architecture and complex flows
                             </li>
                             <li>
                               Developed web components and applications in
                               Angular
                             </li>
                             <li>
                               Co-lead Angular development efforts for Amtrak’s
                               Style Guide and Component Library
                             </li>
                             <li>
                               Working on the new version of Amtrak’s $4 billion
                               booking site
                             </li>
                             <li>
                               Developed and provided support for several Amtrak
                               micro-sites
                             </li>
                             <li>
                               {" "}
                               Debugged and upgraded existing applications
                             </li>
                             <li>
                               Provided development support for Amtrak’s Alexa
                               App
                             </li>
                             <li>
                               Recommended and executed both design and
                               performance improvements on various Amtrak
                               applications
                             </li>
                             <li>
                               Worked closely with developers, UX designers, and
                               stakeholders to accomplish project goals
                             </li>
                           </CustomList>
                         </div>
                       </ExperienceCard>
                     </TabContent>
                   </CustomTab>
                   <CustomTab label="Contractor">
                     <TabContent>
                       <ExperienceCard className="experience-card mt-5">
                         <div className="experience-card__heading d-flex justify-content-center align-items-center">
                           <div className="flex-grow-1">
                             <h2 className="font-light">
                               Anheuser Busch InBev -{" "}
                               <span className="color-ocean-blue font-bold">
                                 <i>Software Engineer</i>
                               </span>
                             </h2>
                           </div>
                           <div className="flex-grow-1">
                             <span>Sept 2020 - Oct 2021</span>
                           </div>
                         </div>
                         <div className="experience-card__content">
                           <CustomList>
                             <li>
                               Lead development work to migrate brands sites in
                               single mono-repo
                             </li>
                             <li>
                               Lead development work to improve code base to pass
                               Adobe Security testing and Cloud compatibility on
                               Adobe Cloud.
                             </li>
                             <li>
                               Created technical documents and process workflows
                               to define Adobe Cloud development
                             </li>
                             <li>
                               Developed several surveys to collect customer
                               feedback and improve MyCooler experience for
                               customers. (New Customer and Rewards Redemption)
                             </li>
                           </CustomList>
                         </div>
                       </ExperienceCard>

                       <ExperienceCard className="experience-card mt-5">
                         <div className="experience-card__heading d-flex justify-content-center align-items-center">
                           <div className="flex-grow-1">
                             <h2 className="font-light">
                               Stantec -{" "}
                               <span className="color-ocean-blue font-bold">
                                 <i>Software Engineer</i>
                               </span>
                             </h2>
                           </div>
                           <div className="flex-grow-1">
                             <span>Apr 2021 - May 2021</span>
                           </div>
                         </div>
                         <div className="experience-card__content">
                           <CustomList>
                             <li>
                               Lead development work to resolve over 20k ADA
                               issues site wide to up hold ADA compliance in
                               accordance to Canadian regulations
                             </li>
                           </CustomList>
                         </div>
                       </ExperienceCard>
                     </TabContent>
                   </CustomTab>
                   <CustomTab label="Internship">
                     <TabContent>
                       <ExperienceCard className="experience-card mt-5">
                         <div className="experience-card__heading d-flex justify-content-center align-items-center">
                           <div className="flex-grow-1">
                             <h2 className="font-light">
                               Amtrak -{" "}
                               <span className="color-ocean-blue font-bold">
                                 <i>Web Developer Intern</i>
                               </span>
                             </h2>
                           </div>
                           <div className="flex-grow-1">
                             <span>Dec 2017 - Aug 2018</span>
                           </div>
                         </div>
                         <div className="experience-card__content">
                           <CustomList>
                             <li>
                               Developing new sites and migrating existing sites
                               to the AEM platform
                             </li>
                             <li>
                               Created technical diagrams to aid visualization of
                               architecture and complex flows
                             </li>
                             <li>
                               Developed and provided support for several Amtrak
                               micro-sites
                             </li>
                             <li>
                               {" "}
                               Debugged and upgraded existing applications
                             </li>
                             <li>
                               Recommended and executed both design and
                               performance improvements on various Amtrak
                               applications
                             </li>
                             <li>
                               Worked closely with developers, UX designers, and
                               stakeholders to accomplish project goals
                             </li>
                           </CustomList>
                         </div>
                       </ExperienceCard>
                     </TabContent>
                   </CustomTab>
                 </Tabs>
               </div>
             </div>
           </div>
         </section> */}
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
