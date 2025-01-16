// app/page.tsx
import Featured from "@/components/Featured/Featured";
import Guidelines from "@/components/Guidelines/Guidelines";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import SafetyAndTrust from "@/components/SafetyAndTrust/SafetyAndTrust";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <HowItWorks />
      <Guidelines />
      <SafetyAndTrust />
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
