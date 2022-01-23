import styled from "styled-components";
import device from "../utils/breakpoints";
import Head from "next/head";
import Script from "next/script";
import getConfig from "next/config";
import Footer from "../../features/footer/Footer";
import Header from "../../features/header/Header";
import EnvBanner from "../components/banner/Env-Banner";
import useScrollPosition from "@react-hook/window-scroll";
import { useRef } from "react";

const { publicRuntimeConfig } = getConfig();

const MainWrapper = styled.main`
  &.elevated {
    padding-top: 5rem;
  }
`;

export default function MainPageLayout({ children }) {
  const envBanner = !publicRuntimeConfig.production && (
    <EnvBanner>Environment is: DEV</EnvBanner>
  );

  const headerEl = useRef(null);

  const headerOffset =
    headerEl && headerEl.current ? headerEl.current.offsetTop : 0;

  let stickyHeader = "";
  const scrollPosition = useScrollPosition();
  if (scrollPosition > headerOffset) {
    stickyHeader = "elevated";
  } else {
    stickyHeader = "";
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Ahmed specializes in helping clients in the sale and purchase of residential real estate in the Washington DC, Maryland and Northern Virginia areas"
        />
        <meta
          name="keywords"
          content="Ahmed, Mohamed, Real Estate, Ahmed Mohamed, Homes for Sale, REALTOR"
        />
        <meta name="author" content="Ahmed Mohamed" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ahmed Mohamed - Washington D.C Real Estate, Maryland Real Estate, Northern Virginia Real Estate, Apartments, Condos, Town Houses &amp; Single Family Homes"
        />
        <meta
          property="og:description"
          content="Ahmed specializes in helping clients in the sale and purchase of residential real estate in the Washington DC, Maryland and Northern Virginia areas"
        />
        <meta
          property="og:url"
          content={`https://${publicRuntimeConfig.host}/`}
        />
        <meta property="og:site_name" content="Homesmdva" />
        <meta
          property="og:image"
          content={`https://${publicRuntimeConfig.host}/images/home-3.jpeg`}
        />
        <meta
          property="og:image:alt"
          content="Beautiful Single Family Home for Sale"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FF7VXFRL06"
        strategy="lazyOnload"
        onLoad={() => {
          /* @ts-ignore */
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            /* @ts-ignore */
            dataLayer.push(arguments);
          }
          /* @ts-ignore */
          gtag("js", new Date());
          /* @ts-ignore */
          gtag("config", "GA_MEASUREMENT_ID", {
            cookie_prefix: "Homesmdva",
            cookie_domain: `${publicRuntimeConfig.host}`,
            cookie_expires: 28 * 24 * 60 * 60, // 28 days, in seconds
          });

          /* @ts-ignore */
          gtag("config", "G-FF7VXFRL06");
        }}
      />
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LfgLpgbAAAAAFehepwcZFGF3mOV6GtAL-90oRcu"
        strategy="lazyOnload"
      />{" "}
      {envBanner}
      <Header></Header>
      <MainWrapper className={`${stickyHeader}`}>{children}</MainWrapper>
      <Footer></Footer>
    </>
  );
}

export const PageContain = styled.div`
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
`;

export const OneToTwoColumn = styled.div.attrs((props) => ({}))`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "main";
  max-width: 120rem;
  margin: auto;

  @media ${device.tabletAndAbove} {
    grid-template-columns: ${(props) =>
      props.columnSplit === "1/2" ? "1fr 2fr" : "1fr 1fr"};
    grid-template-areas: "sidebar main";
  }
`;
