'use client'
import React from "react"
import Header from '@/components/Header'
import About from "@/components/About"
import Advertise from "@/components/Advertise"
import Cards from "@/components/Cards"
import ContactForm from "@/components/ContactForm"
import FloatingChatbot from "@/components/FloatingChatbot"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <About />
      <Advertise />
      <Cards />
      <ContactForm />
      <FloatingChatbot />
      <Footer />
    </div>
  )
}
