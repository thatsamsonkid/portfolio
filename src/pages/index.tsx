import { Button } from "@unbyte-io/react-fuego";
import ContactForm from "../features/contact-form/Contact-Form";
import HeroSplit from "../shared/components/hero/HeroSplit";
import TextImage from "../shared/components/text-image/Text-Image";
import HorizontalLine from "../shared/components/horizontal-line/Horizontal-Line";
import Heading from "../shared/components/heading/Heading";
import { PageContain } from "../shared/layouts/PageLayouts";

export default function Home() {
  return (
    <>
      <HeroSplit img="./images/home-3.jpeg">
        <div
          style={{ height: "500px" }}
          className="split-hero-left-content bckgrd-royal-blue d-flex justify-content-center align-items-center"
        >
          <div className="mx-5">
            <h2
              className="text-white mb-4"
              style={{ fontSize: "3.2rem", fontWeight: 600 }}
            >
              Helping Families find their perfect homes
            </h2>
            <div className="mt-5">
              <Button
                level="primary"
                rel="noopener"
                href="https://ahmedmohamed.unitedrealestatewashingtondc.com/index.html"
              >
                Start Search
              </Button>
            </div>
          </div>
        </div>
      </HeroSplit>

      <HorizontalLine className="mt-7" />
      <PageContain>
        <TextImage
          imgSrc="/images/am.jpg"
          imgAlt=""
          className="mt-7 mb-7"
          enforcedHeight={true}
        >
          <Heading
            level="1"
            size="xl"
            className="font-semi text-light-blue mt-3 mt-md-0 mb-4"
          >
            About Ahmed Mohamed
          </Heading>
          <Heading level="2" size="lg" className="text-gray mb-4">
            Experienced Realtor working for you.
          </Heading>
          <p className="sm-body">
            Ahmed began his career as a REALTOR® in 2004 and for the last 17
            years has been passionate about helping people find the perfect
            place to call home. No matter of what size or kind of Real Estate
            you may be looking for - Ahmed has the vast experience to find
            exactly what you're looking for.
          </p>
          <p className="sm-body">
            Ahmed specializes in helping clients in the sale and purchase of
            residential real estate in the Washington DC, Maryland and Northern
            Virginia areas. If you, or your friends and family are looking to
            buy or sell, Ahmed has the market knowledge to provide you with
            outstanding service, advice and end results.
          </p>
        </TextImage>
      </PageContain>
      <ContactForm></ContactForm>
    </>
  );
}
