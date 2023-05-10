import "@/styles/globals.css";
import "../styles/Navbar.css";
import { Foldit, Krona_One, Poppins ,Bebas_Neue} from "next/font/google";

const foldit = Foldit({ variable: "--font-foldit", subsets: ["latin"], weight: "300" });
const kronaone = Krona_One({ variable: "--font-kronaone", subsets: ["latin"], weight: "400" });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: "400" });
const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${foldit.variable} ${kronaone.variable} ${poppins.variable} ${bebas.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
