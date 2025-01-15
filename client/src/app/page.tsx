// app/page.tsx
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
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
