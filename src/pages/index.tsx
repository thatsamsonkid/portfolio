import { Button, TextImage, Field, Tabs, Tab } from "@unbyte-io/react-fuego";
import Header from "../features/header/Header";
import { PageContain } from "../shared/layouts/PageLayouts";
import styled from "styled-components";
import Navigation from "../shared/components/navigation/Navigation";
import { device } from "@unbyte-io/react-fuego";
import ContactForm from "../features/contact-form/Contact-Form";

const MegaHeading = styled.h1`
  font-size: 3rem;
  line-height: 4.6rem;
  letter-spacing: 1.06px;
  color: var(--white);
  text-align: center;

  @media ${device.tabletAndAbove} {
    font-size: 6rem;
    line-height: 8.6rem;
  }
`;

const JustADev = styled.p`
  color: var(--ocean-blue);
  font-size: 3rem;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 0.53px;
  line-height: 36px;
  text-align: center;
`;

const PageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TabContent = styled.div`
  min-height: 30rem;
`;

const ExperienceCard = styled.div`
  color: $light-purple-fax;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.4rem;
  /* min-height: 30rem; */
`;

const CustomList = styled.ul`
  padding-left: 1.5rem;
  font-size: 1.4rem;

  li {
    padding: 0.25rem 0;
  }
`;

export default function Home() {
  return (
    <>
      <section
        className="d-flex flex-column justify-content-center align-items-center"
        id="home"
        style={{ minHeight: "calc(100vh - 102px)" }}
      >
        <div style={{ paddingBottom: "15rem" }}>
          <MegaHeading className="mt-0">Sammy Mohamed</MegaHeading>
          <JustADev className="mt-0">Just a Dev</JustADev>
        </div>
        <Navigation></Navigation>
      </section>
      <PageWrapper>
        <section id="about">
          <TextImage
            img="/images/new-sammy.png"
            imgAlt="Sammy Mohamed Portrait"
          >
            <p>Hi there,</p>
            <p>
              A little bit about me, I'm currently a Web Developer at Amtrak
              since 2016. My experience has largely consisted of developing
              web-applications within AEM (Versions 6.2 - 6.4) working both in
              the front-end and back-end of these applications. n AEM I have
              built new applications and migrated existing web-apps from their
              previous platform.
            </p>
            <p>
              Lately, I have been working more within the Angular Framework. I
              am building Angular applications and web-components for
              micro-frontends both in my professional work and personal projects
              (such as this very site.) I've also worked in Vue and enjoyed
              working in this framework. Though my education largely focused on
              networking and telecommunications, I have started to enjoy working
              in web development with a passion for the front-end aspect of
              applications rather than the back-end.
            </p>
            <p>
              I definitely want to continue working within Angular and AEM, so
              that I can further hone my knowledge and skills within these
              technologies. I also have an interest in mobile app development,
              specifically utilizing the Flutter framework.
            </p>
          </TextImage>
        </section>
        <section id="professional">
          <h1>Professional Experience</h1>
          <Tabs fullWidth={true}>
            <Tab label="Full-Time" className="sm-tab">
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
                        Developing new sites and migrating existing sites to the
                        AEM platform
                      </li>
                      <li>
                        Created technical diagrams to aid visualization of
                        architecture and complex flows
                      </li>
                      <li>
                        Developed web components and applications in Angular
                      </li>
                      <li>
                        Co-lead Angular development efforts for Amtrak’s Style
                        Guide and Component Library
                      </li>
                      <li>
                        Working on the new version of Amtrak’s $4 billion
                        booking site
                      </li>
                      <li>
                        Developed and provided support for several Amtrak
                        micro-sites
                      </li>
                      <li> Debugged and upgraded existing applications</li>
                      <li>
                        Provided development support for Amtrak’s Alexa App
                      </li>
                      <li>
                        Recommended and executed both design and performance
                        improvements on various Amtrak applications
                      </li>
                      <li>
                        Worked closely with developers, UX designers, and
                        stakeholders to accomplish project goals
                      </li>
                    </CustomList>
                  </div>
                </ExperienceCard>
              </TabContent>
            </Tab>
            <Tab label="Contractor">
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
                        Lead development work to migrate brands sites in single
                        mono-repo
                      </li>
                      <li>
                        Lead development work to improve code base to pass Adobe
                        Security testing and Cloud compatibility on Adobe Cloud.
                      </li>
                      <li>
                        Created technical documents and process workflows to
                        define Adobe Cloud development
                      </li>
                      <li>
                        Developed several surveys to collect customer feedback
                        and improve MyCooler experience for customers. (New
                        Customer and Rewards Redemption)
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
                        Lead development work to resolve over 20k ADA issues
                        site wide to up hold ADA compliance in accordance to
                        Canadian regulations
                      </li>
                    </CustomList>
                  </div>
                </ExperienceCard>
              </TabContent>
            </Tab>
            <Tab label="Internship">
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
                        Developing new sites and migrating existing sites to the
                        AEM platform
                      </li>
                      <li>
                        Created technical diagrams to aid visualization of
                        architecture and complex flows
                      </li>
                      <li>
                        Developed and provided support for several Amtrak
                        micro-sites
                      </li>
                      <li> Debugged and upgraded existing applications</li>
                      <li>
                        Recommended and executed both design and performance
                        improvements on various Amtrak applications
                      </li>
                      <li>
                        Worked closely with developers, UX designers, and
                        stakeholders to accomplish project goals
                      </li>
                    </CustomList>
                  </div>
                </ExperienceCard>
              </TabContent>
            </Tab>
          </Tabs>
        </section>
        <section id="projects"></section>
        <section id="skills"></section>
        <section id="contact">
          <ContactForm></ContactForm>
        </section>
      </PageWrapper>
    </>
  );
}
