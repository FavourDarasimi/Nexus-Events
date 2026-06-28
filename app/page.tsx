import Hero from "@/components/sections/home/Hero";
import Marquee from "@/components/sections/home/Marquee";
import FeaturedEvents from "@/components/sections/home/FeaturedEvents";
import WhyNexus from "@/components/sections/home/WhyNexus";
import Philosophy from "@/components/sections/home/Philosophy";
import Testimonials from "@/components/sections/home/Testimonials";
import CTABanner from "@/components/sections/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedEvents />
      <WhyNexus />
      <Philosophy />
      <Testimonials />
      <CTABanner />
    </>
  );
}
