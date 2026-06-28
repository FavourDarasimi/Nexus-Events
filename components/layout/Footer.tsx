import Link from "next/link";
import { SITE, NAV_LINKS, CONTACT_INFO, SERVICES } from "@/lib/constants";
import { InstagramIcon, PinterestIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/30">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-playfair text-2xl tracking-wider text-white">
                {SITE.name.split(" ")[0]}
              </span>
              <span className="font-cormorant text-[10px] tracking-[0.3em] text-gold uppercase -mt-1">
                {SITE.name.split(" ")[1]}
              </span>
            </Link>
            <p className="font-inter text-sm text-white-muted leading-relaxed max-w-xs">
              {SITE.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-cormorant text-sm tracking-widest uppercase text-gold italic">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-cormorant text-sm tracking-widest uppercase text-gold italic">
              What We Do
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.slice(0,5).map((service) => (
                <li key={service.id}>
                  <span className="font-inter text-sm text-white-muted">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-cormorant text-sm tracking-widest uppercase text-gold italic">
              Contact
            </h3>
            <div className="flex flex-col gap-2 font-inter text-sm text-white-muted">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hover:text-gold transition-colors duration-300"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-gold transition-colors duration-300"
              >
                {CONTACT_INFO.email}
              </a>
              <p className="whitespace-pre-line">{CONTACT_INFO.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-muted hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={CONTACT_INFO.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-muted hover:text-gold transition-colors duration-300"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-muted hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="font-inter text-xs text-white-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
