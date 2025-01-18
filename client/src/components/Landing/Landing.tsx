import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import BigCta from "./BigCta/BigCta";
import Faq from "./FAQ/Faq";
import Featured from "./Featured/Featured";
import Guidelines from "./Guidelines/Guidelines";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import SafetyAndTrust from "./SafetyAndTrust/SafetyAndTrust";

const Landing = () => {
  return (
    <>
      <Header isDark={true} />
      <Hero />
      <Featured />
      <HowItWorks />
      <Guidelines />
      <SafetyAndTrust />
      <Faq />
      <BigCta />
      <Footer />
    </>
  );
};

export default Landing;
