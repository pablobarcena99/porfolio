import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar.jsx'
import Hero from '@/components/Hero.jsx'
import Project from '@/components/Project.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { Main } from 'next/document.js'
import ContactSection from '@/components/ContactSection.jsx'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionTitle title='Projects' />
      <Project
        title='eCommerce'
        desc={[
          "This is an eCommerce project based on Next.js and Sanity.io as the content manager.",
          // <br />,
          // <br />
        ]}
        tecnologies={["Next.js", "Styled Components", "Sanity.io", "Bootstrap"]}
        img='https://res.cloudinary.com/dygvieuns/image/upload/v1683731852/screely-1683731801128_ip6iio.png'
        link='https://ecommerce-sanity-pablobarcena99.vercel.app/'
        repo='https://github.com/pablobarcena99/ecommerce_sanity'
      />
      <Project
        title='menda lerenda'
        desc={["This is a press kit webpage of rock music band based on Next.js."]}
        tecnologies={["Next.js", "Styled Components", "Bootstrap"]}
        img='https://res.cloudinary.com/dygvieuns/image/upload/v1683731845/screely-1683731822926_svzunb.png'
        link='https://mendalerendaoficial.com'
        repo='https://github.com/pablobarcena99/mendalerenda'
      />

      <Project
        title='toDoList'
        tecnologies={["React", "Styled Components", "Sanity.io"]}
        img='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
      />
      <ContactSection />
    </div>
  );
}
