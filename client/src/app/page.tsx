// app/page.tsx
import Featured from "@/components/Featured/Featured";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
    </>
  );
};

export default function Page() {
  return (
    <main className="relative">
      <Landing />
    </main>
  );
}
