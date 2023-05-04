import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar.jsx'
import Hero from '@/components/Hero.jsx'
import MainSection from '@/components/MainSection.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionTitle title="Projects"/>
      <MainSection
        title='eCommerce'
        desc={[
          "This is an eCommerce project based on NextJs (ReactJS) and Sanity.io as content manager",
          <br />,
          <br />,
          "In this ecommerce the shop sells Polaroid photos",
        ]}
        tecnologies={["NextJS", "Styled Components", "Sanity.io", "Bootstrap"]}
        img='https://res.cloudinary.com/dygvieuns/image/upload/v1683208756/ecommerce_mjw2x3.png'
        link='https://ecommerce-sanity-pablobarcena99.vercel.app/'
      />
      <MainSection
        title='menda lerenda'
        desc={["This is ", <br />, "working.", "This is a project about a music band"]}
        tecnologies={["React", "Styled Components", "Bootstrap"]}
        img='https://res.cloudinary.com/dygvieuns/image/upload/v1683208756/menda_lerenda_xrsi4m.png'
        link='https://mendalerendaoficial.com'
      />

      <MainSection
        title='toDoList'
        tecnologies={["React", "Styled Components", "Sanity.io"]}
        img='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
      />
    </div>
  );
}
