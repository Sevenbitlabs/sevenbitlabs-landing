import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
