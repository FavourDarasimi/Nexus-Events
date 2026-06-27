import Hero from "@/components/sections/home/Hero";
import Marquee from "@/components/sections/home/Marquee";
import FeaturedEvents from "@/components/sections/home/FeaturedEvents";
import Philosophy from "@/components/sections/home/Philosophy";
import Testimonials from "@/components/sections/home/Testimonials";
import CTABanner from "@/components/sections/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedEvents />
      <Philosophy />
      <Testimonials />
      <CTABanner />
    </>
  );
}
