// app/page.tsx
import BigCta from "@/components/BigCta/BigCta";
import Faq from "@/components/Landing/FAQ/Faq";
import Featured from "@/components/Landing/Featured/Featured";
import Footer from "@/components/Shared/Footer/Footer";
import Guidelines from "@/components/Landing/Guidelines/Guidelines";
import Header from "@/components/Shared/Header/Header";
import Hero from "@/components/Landing/Hero/Hero";
import HowItWorks from "@/components/Landing/HowItWorks/HowItWorks";
import SafetyAndTrust from "@/components/Landing/SafetyAndTrust/SafetyAndTrust";

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

export default function Page() {
  return (
    <main>
      <Landing />
    </main>
  );
}
