import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import NewTrails from "@/components/NewTrails";
import TestimonialTwo from "@/components/TestimonialTwo";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Testimonial />
    <NewTrails />
    <TestimonialTwo />
    <Footer />
    </>
  );
}
