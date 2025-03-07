"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Telechargement from "@/components/Telechargement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Add mobile menu functionality (this used to be done via vanilla JS)
  useEffect(() => {
    // Add scrolling to anchor links with smooth behavior
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    // Apply smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Telechargement />
      <Contact />
      <Footer />
    </main>
  );
}
