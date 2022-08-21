import Body from "./Body";
import Header from "./component/Header";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import { motion, useScroll, Variants } from "framer-motion";
import { useEffect } from "react";
import Creator from "./component/Creator";
import Share from "./component/Share";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import ContactUs from "./component/ContactUs";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Hero />
        <AboutUs />
        <Creator />
        <Share />
        <Faq />
        <ContactUs />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
