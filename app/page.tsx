import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedHighlight from "./components/FeaturedHighlight";
import BentoGrid from "./components/BentoGrid";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Header />
      <Hero />
      <FeaturedHighlight />
      <BentoGrid />
      <SkillsSection />
      <Contact />
      <Footer />
    </main>
  );
}
