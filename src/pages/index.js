import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import AppBar from "../components/AppBar.jsx";
import Hero from "@/components/Hero.jsx";
import Project from "@/components/Project.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";
import { Main } from "next/document.js";
import ContactSection from "@/components/ContactSection.jsx";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <AppBar />
      <Hero />
      <SectionTitle title='Projects' />
      <Element id='polaroid'>
        <Project
          title='Polaroid Shop'
          desc={[
            "This is an exciting eCommerce project that I had the opportunity to work on, based on Next.js and powered by Sanity.io as the content management system.",
            // <br />,
            // <br />
          ]}
          tecnologies={["Next.js", "Sanity.io", "Styled Components", "Bootstrap"]}
          img='https://res.cloudinary.com/dygvieuns/image/upload/v1683731852/screely-1683731801128_ip6iio.png'
          link='https://ecommerce-sanity-pablobarcena99.vercel.app/'
          repo='https://github.com/pablobarcena99/ecommerce_sanity'
        />
      </Element>
      <Element id='menda_lerenda'>
        <Project
          title='Menda Lerenda'
          desc={[
            "In this project, the music group Menda Lerenda asked me to create their website as a digital press kit to showcase their work.",
            <br key='line' />,
            " With their input, I designed and developed a website that captures their style. The design is responsive, allowing for optimal viewing on any device.",
          ]}
          tecnologies={["Next.js", "Styled Components", "Bootstrap"]}
          img='https://res.cloudinary.com/dygvieuns/image/upload/v1683731845/screely-1683731822926_svzunb.png'
          link='https://mendalerendaoficial.com'
          repo='https://github.com/pablobarcena99/mendalerenda'
        />
      </Element>

      <Element id='dear'>
        <Project
          title='dear:'
          desc='This is a project that I did for a client who wanted to create an online store for his clothing brand. I used Shopify as the CMS and Next.js as the frontend framework.'
          tecnologies={["NextJs", "Shopify", "Styled Components", "Bootstrap"]}
          img='https://res.cloudinary.com/dygvieuns/image/upload/v1688543793/screely-1688543749903_zmgo5w.png'
          link='https://shopify-dear.vercel.app'
          repo='https://github.com/pablobarcena99/shopify-dear'
        />
      </Element>
      <Element id='contact'>
        <ContactSection />
      </Element>
    </div>
  );
}
