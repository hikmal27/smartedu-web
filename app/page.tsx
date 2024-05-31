import About from "@/components/partials/about";
import Benefit from "@/components/partials/benefit";
import BlogSection from "@/components/partials/blog-section";
import Hero from "@/components/partials/hero";
import Recomendation from "@/components/partials/recomendation";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Hero />
        <Benefit />
        <About />
        <Recomendation />
        <BlogSection />
    </main>
  );
}
