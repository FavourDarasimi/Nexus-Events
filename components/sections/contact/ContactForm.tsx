"use client";

import { useState, type FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import * as Select from "@radix-ui/react-select";
import { EVENT_TYPES } from "@/lib/constants";
import ConfettiBurst from "@/components/animations/ConfettiBurst";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

const inputClass =
  "w-full bg-white/5 border-b border-white/10  px-4 py-3 font-inter text-sm text-white placeholder-white-muted/50 focus:border-gold focus:outline-none transition-colors duration-300";

const labelClass =
  "font-cormorant text-xs tracking-widest uppercase text-gold italic mb-1.5 block";

function SelectIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div ref={formRef} className="relative bg-white/5 p-7 rounded-xl">
      <ConfettiBurst isActive={submitted} />

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
          <h3 className="font-playfair text-2xl text-white mb-2">
            Thank You!
          </h3>
          <p className="font-inter text-sm text-white-muted max-w-xs">
            Your message has been received. We&apos;ll be in touch within 24 hours.
          </p>
        </motion.div>
      ) : (
        <>
          <div className="mb-2">
            <h3 className="font-playfair text-xl text-white mb-1">
              Send Us a Message
            </h3>
            <p className="font-inter text-sm text-white-muted">
              Tell us about your event and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className={labelClass}>
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClass}
                placeholder="Jane Doe"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="flex flex-col">
              <label className={labelClass}>Event Type</label>
              <Select.Root
                value={form.eventType}
                onValueChange={(value) => handleChange("eventType", value)}
              >
                <Select.Trigger
                  className={`${inputClass} flex items-center justify-between cursor-pointer`}
                  aria-label="Event Type"
                >
                  <Select.Value placeholder="Select type" />
                  <Select.Icon>
                    <SelectIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="bg-charcoal border border-white/10 rounded-md shadow-xl z-50 overflow-hidden">
                    <Select.Viewport className="p-1">
                      {EVENT_TYPES.map((type) => (
                        <Select.Item
                          key={type}
                          value={type}
                          className="font-inter text-sm text-white-muted px-4 py-2.5 rounded-sm cursor-pointer hover:bg-white/5 hover:text-gold outline-none transition-colors duration-200 data-[highlighted]:bg-white/5 data-[highlighted]:text-gold"
                        >
                          <Select.ItemText>{type}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="eventDate" className={labelClass}>
                Event Date
              </label>
              <input
                id="eventDate"
                type="date"
                value={form.eventDate}
                onChange={(e) => handleChange("eventDate", e.target.value)}
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guestCount" className={labelClass}>
                Estimated Guest Count
              </label>
              <input
                id="guestCount"
                type="number"
                min="1"
                value={form.guestCount}
                onChange={(e) => handleChange("guestCount", e.target.value)}
                className={inputClass}
                placeholder="e.g. 150"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className={labelClass}>
              Message / Vision
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your vision, preferred style, and any special requirements..."
            />
          </div>

          <motion.button
            type="submit"
            className="self-start bg-gold text-black font-inter font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        </>
      )}
    </div>
  );
}
