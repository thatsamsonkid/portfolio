import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import ContactForm from "./features/contact-form/Contact-Form";
// import "../../node_modules/@fuego-ui/react/index.css";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section
        className="d-flex flex-column justify-content-center align-items-center"
        id="home"
        style={{ minHeight: "calc(100vh - 102px)" }}
      >
        <div style={{ paddingBottom: "15rem" }}>
          <h1>Sammy Mohamed</h1>
          <p>Just a Dev</p>
        </div>
        {/* <Navigation></Navigation> */}
      </section>
      <section id="contact">
        <ContactForm></ContactForm>
      </section>
    </main>
  );
}
