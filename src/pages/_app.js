import "@/styles/globals.css";
import "../styles/Navbar.css";
import { Foldit, Krona_One } from "next/font/google";

const foldit = Foldit({ variable: "--font-foldit", subsets: ["latin"], weight: "300" });
const kronaone = Krona_One({ variable: "--font-kronaone", subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${foldit.variable} ${kronaone.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
