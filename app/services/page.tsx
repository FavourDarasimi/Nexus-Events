import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceCards from "@/components/sections/services/ServiceCards";
import ProcessTimeline from "@/components/sections/services/ProcessTimeline";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <ProcessTimeline />
      <ServicesCTA />
    </>
  );
}
