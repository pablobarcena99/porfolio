import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import Project from "@/components/Project.jsx";
import SectionTitle from "@/components/SectionTitle.jsx";
import { Main } from "next/document.js";
import ContactSection from "@/components/ContactSection.jsx";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionTitle title='Projects' />
      <Element id="polaroid">
        <Project
          title='eCommerce'
          desc={[
            "This is an exciting eCommerce project that I had the opportunity to work on, based on Next.js and powered by Sanity.io as the content management system.",
            // <br />,
            // <br />
          ]}
          tecnologies={["Next.js", "Styled Components", "Sanity.io", "Bootstrap"]}
          img='https://res.cloudinary.com/dygvieuns/image/upload/v1683731852/screely-1683731801128_ip6iio.png'
          link='https://ecommerce-sanity-pablobarcena99.vercel.app/'
          repo='https://github.com/pablobarcena99/ecommerce_sanity'
        />
      </Element>
      <Element id="menda_lerenda">
        <Project
          title='menda lerenda'
          desc={[
            "In this project, the music group Menda Lerenda asked me to create their website as a digital press kit to showcase their work.",
            <br key="line"/>,
            " With their input, I designed and developed a website that captures their style. The design is responsive, allowing for optimal viewing on any device.",
          ]}
          tecnologies={["Next.js", "Styled Components", "Bootstrap"]}
          img='https://res.cloudinary.com/dygvieuns/image/upload/v1683731845/screely-1683731822926_svzunb.png'
          link='https://mendalerendaoficial.com'
          repo='https://github.com/pablobarcena99/mendalerenda'
        />
      </Element>

      <Element>
        <Project
          title='toDoList'
          tecnologies={["React", "Styled Components", "Sanity.io"]}
          img='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
        />
      </Element>
      <ContactSection />
    </div>
  );
}
