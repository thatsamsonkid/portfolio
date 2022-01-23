import { Button, TextImage, Field } from "@unbyte-io/react-fuego";
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
        <section id="professional"></section>
        <section id="projects"></section>
        <section id="skills"></section>
        <section id="contact">
          <ContactForm></ContactForm>
        </section>
      </PageWrapper>
    </>
  );
}
