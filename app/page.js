import About from '@/components/About'
import Advertise from '@/components/Advertise'
import Cards from '@/components/Cards'
import Chat from '@/components/Chat'
import ContactForm from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Advertise />
      <Cards />
      <ContactForm />
      <Footer />
      <Chat />
    </>
  )
}
