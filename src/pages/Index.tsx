import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Menu from "@/components/Menu"
import Swiper from "@/components/Swiper"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Swiper />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
