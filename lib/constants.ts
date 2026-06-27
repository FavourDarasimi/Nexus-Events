export const SITE = {
  name: "Nexus Events",
  tagline: "We Don't Plan Events. We Craft Memories.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "wedding",
    title: "Wedding & Ceremony Planning",
    description:
      "From intimate elopements to grand celebrations, we craft every detail of your perfect day.",
    price: "from $8,500",
    icon: "rings",
    features: [
      "Venue selection & styling",
      "Vendor coordination",
      "Timeline management",
      "Rehearsal direction",
      "Day-of coordination",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Events & Conferences",
    description:
      "Impress clients and inspire teams with flawlessly executed corporate gatherings.",
    price: "from $12,000",
    icon: "building",
    features: [
      "Full production management",
      "AV & staging",
      "Catering & hospitality",
      "Speaker coordination",
      "Attendee management",
    ],
  },
  {
    id: "gala",
    title: "Gala & Award Nights",
    description:
      "Red-carpet experiences that celebrate achievement and leave lasting impressions.",
    price: "from $15,000",
    icon: "star",
    features: [
      "Venue transformation",
      "Entertainment booking",
      "Catering & bar service",
      "Awards production",
      "Guest management",
    ],
  },
  {
    id: "birthday",
    title: "Birthday & Social Celebrations",
    description:
      "Milestone birthdays and social events designed to be as unique as you are.",
    price: "from $4,500",
    icon: "cake",
    features: [
      "Theme development",
      "Venue & decor",
      "Catering & cake",
      "Entertainment",
      "Party favors",
    ],
  },
  {
    id: "product-launch",
    title: "Product Launches & Brand Events",
    description:
      "Make a statement with a launch that captures attention and drives buzz.",
    price: "from $18,000",
    icon: "rocket",
    features: [
      "Concept & branding",
      "Venue & set design",
      "Media & PR support",
      "Live demonstrations",
      "Guest experience",
    ],
  },
  {
    id: "destination",
    title: "Destination Events",
    description:
      "Extraordinary experiences in the world's most breathtaking locations.",
    price: "from $20,000",
    icon: "globe",
    features: [
      "Location scouting",
      "Travel coordination",
      "Local vendor management",
      "Cultural integration",
      "Guest concierge",
    ],
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Isabella Rossi",
    role: "Founder & Creative Director",
    bio: "With over 15 years in luxury event design, Isabella brings visionary concepts to life.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "James Chen",
    role: "Head of Operations",
    bio: "James ensures every event runs with military precision and seamless execution.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Amara Okafor",
    role: "Lead Designer",
    bio: "Amara transforms spaces into immersive environments that tell powerful stories.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Marcus Rivera",
    role: "Client Relations Director",
    bio: "Marcus guides clients through every step, ensuring their vision is realized beyond expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Grand Ballroom Wedding",
    category: "Weddings",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    id: 2,
    title: "Tech Conference Gala",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: 3,
    title: "Annual Charity Gala",
    category: "Galas",
    image:
      "https://images.unsplash.com/photo-1464369400601-45e8e7c5c561?w=600&q=80",
  },
  {
    id: 4,
    title: "Rooftop Birthday Celebration",
    category: "Social",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80",
  },
  {
    id: 5,
    title: "Lakeside Wedding",
    category: "Weddings",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
  },
  {
    id: 6,
    title: "Product Launch Event",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
  },
  {
    id: 7,
    title: "Black Tie Gala",
    category: "Galas",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80",
  },
  {
    id: 8,
    title: "Garden Party",
    category: "Social",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
  },
  {
    id: 9,
    title: "Beachfront Wedding",
    category: "Weddings",
    image:
      "https://images.unsplash.com/photo-1546195643-70f48f9c5b87?w=600&q=80",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Victoria & David",
    quote:
      "Nexus turned our wedding into something straight out of a dream. Every detail was perfect — we didn't have to worry about a thing.",
    rating: 5,
    event: "Wedding",
  },
  {
    name: "Michael Torres",
    quote:
      "Our annual conference has never run so smoothly. The team's attention to detail and professionalism is unmatched.",
    rating: 5,
    event: "Corporate Event",
  },
  {
    name: "Priya Sharma",
    quote:
      "The gala they planned for our foundation raised over $2M. The atmosphere was electric and every guest felt special.",
    rating: 5,
    event: "Charity Gala",
  },
] as const;

export const PHILOSOPHY_STATS = [
  { label: "Events Delivered", value: 500, suffix: "+" },
  { label: "Years of Excellence", value: 12, suffix: "" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
] as const;

export const STORY_BLOCKS = [
  {
    title: "Our Beginning",
    subtitle: "A vision born from passion",
    text: "Nexus Events was founded on a simple belief: that every gathering deserves to be extraordinary. What started as a small boutique operation in a rented studio has grown into one of the most sought-after event planning firms in the industry.",
    image:
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80",
  },
  {
    title: "Our Philosophy",
    subtitle: "Details make the difference",
    text: "We believe that luxury is in the details — the warmth of the lighting, the texture of the linens, the timing of the music. Every element is intentional, every moment choreographed to create an emotional journey for your guests.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
  },
  {
    title: "Our Vision",
    subtitle: "Redefining what's possible",
    text: "We're constantly pushing boundaries, embracing new technology, and seeking inspiration from around the world to deliver experiences that redefine what event planning can achieve.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
  },
] as const;

export const VALUES = [
  {
    number: 1,
    title: "Uncompromising Quality",
    description:
      "We never cut corners. Every event receives the same obsessive attention to detail, from the first consultation to the final farewell.",
  },
  {
    number: 2,
    title: "Personalized Service",
    description:
      "Every client is unique, and so is every event. We take the time to understand your vision, your style, and your story.",
  },
  {
    number: 3,
    title: "Stress-Free Experience",
    description:
      "Our end-to-end management means you can actually enjoy your event. We handle the logistics so you can focus on the moments.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consult",
    description:
      "We sit down, get to know you, and explore your vision in depth.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Our creative team crafts a detailed plan that brings your vision to life.",
  },
  {
    step: 3,
    title: "Coordinate",
    description:
      "We manage every vendor, timeline, and detail with military precision.",
  },
  {
    step: 4,
    title: "Celebrate",
    description:
      "You enjoy a flawless event while we handle everything behind the scenes.",
  },
] as const;

export const CONTACT_INFO = {
  phone: "+1 (555) 123-4567",
  email: "hello@nexusevents.com",
  address: "245 Park Avenue, Suite 1200\nNew York, NY 10167",
  social: {
    instagram: "https://instagram.com/nexusevents",
    pinterest: "https://pinterest.com/nexusevents",
    facebook: "https://facebook.com/nexusevents",
  },
} as const;

export const EVENT_TYPES = [
  "Wedding",
  "Corporate",
  "Gala",
  "Birthday",
  "Other",
] as const;

export const FEATURED_EVENTS = [
  {
    id: 1,
    title: "Grand Ballroom Wedding",
    category: "Weddings",
    description:
      "An opulent celebration featuring crystal chandeliers, floral installations, and a five-course dining experience for 300 guests.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    cta: "View Gallery",
    link: "/gallery",
  },
  {
    id: 2,
    title: "Annual Tech Summit",
    category: "Corporate",
    description:
      "A cutting-edge conference with immersive product demos, keynote speeches, and networking lounges for industry leaders.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    cta: "View Gallery",
    link: "/gallery",
  },
  {
    id: 3,
    title: "Sunset Charity Gala",
    category: "Galas",
    description:
      "A breathtaking evening of philanthropy under the stars, complete with live performances and a silent auction.",
    image:
      "https://images.unsplash.com/photo-1464369400601-45e8e7c5c561?w=800&q=80",
    cta: "View Gallery",
    link: "/gallery",
  },
] as const;

export const MARQUEE_WORDS =
  "Weddings · Galas · Conferences · Birthdays · Product Launches · Destination Events ·";
