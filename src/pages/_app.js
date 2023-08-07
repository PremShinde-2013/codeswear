import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
