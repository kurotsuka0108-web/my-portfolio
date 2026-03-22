import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Header />
      <Hero />
      <BentoGrid />
      <Contact />
      <Footer />
    </main>
  );
}
