import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-20 md:py-28 lg:py-32 bg-black">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
