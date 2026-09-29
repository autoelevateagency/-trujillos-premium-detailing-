import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Trujillo's Premium Detailing — Mobile Detailing, Milwaukee",
    description:
      "Premium mobile detailing brought directly to your vehicle in Milwaukee, Wisconsin.",
  },
  nav: {
    brand: "Trujillo's",
    brandFull: "Trujillo's Premium Detailing",
    services: "Services",
    work: "Work",
    about: "About",
    area: "Area",
    book: "Book via DM",
  },
  hero: {
    eyebrow: "Milwaukee / Mobile Detailing",
    line1: "Detailing,",
    line2: "refined.",
    sub: "Premium mobile detailing brought directly to your vehicle.",
    side: "Trujillo's Premium Detailing",
    cta: "Book your detail",
    location: "Milwaukee, Wisconsin  43.04° N  87.91° W",
  },
  services: {
    label: "The Treatments",
    title: "A considered menu for the vehicles we care for.",
    items: [
      {
        id: "exterior",
        number: "01",
        title: "Exterior Detailing",
        description: "Hand wash, decontamination and a sealed, deep finish.",
        panelClass: "p1",
      },
      {
        id: "interior",
        number: "02",
        title: "Interior Detailing",
        description: "Leather, trim and glass restored to showroom order.",
        panelClass: "p2",
      },
      {
        id: "paint",
        number: "03",
        title: "Paint Correction",
        description: "Swirls and haze removed. Clarity returned to the paint.",
        panelClass: "p3",
      },
      {
        id: "ceramic",
        number: "04",
        title: "Ceramic Coating",
        description: "Lasting gloss and protection, applied on site.",
        panelClass: "p4",
      },
    ],
  },
  work: {
    title: "Restored to reflection.",
    items: [
      {
        title: "Exterior",
        caption: "Deep gloss, hand finished",
        background:
          "radial-gradient(70% 60% at 30% 100%,#2e2e2f,#050505 70%)",
        showCar: true,
      },
      {
        title: "Paint correction",
        caption: "Clarity, restored",
        background:
          "conic-gradient(from 200deg at 70% 110%,#030303,#3c3c3d,#030303 25%,#7d7b7c 32%,#030303 42%)",
        showCar: false,
      },
      {
        title: "Wheels",
        caption: "Every spoke, every edge",
        background:
          "radial-gradient(50% 60% at 78% 60%,#3a3a3b,#050505 70%)",
        showCar: true,
      },
      {
        title: "Interior",
        caption: "Leather, cared for",
        background:
          "repeating-linear-gradient(90deg,#0d0d0d 0 22px,#151515 22px 23px),radial-gradient(#2a2520,#050505)",
        showCar: false,
      },
      {
        title: "Water on paint",
        caption: "Beaded, protected",
        background:
          "radial-gradient(circle at 30% 30%,rgba(228,228,228,.5) 0 2px,transparent 3px),radial-gradient(circle at 64% 44%,rgba(228,228,228,.4) 0 3px,transparent 4px),radial-gradient(circle at 46% 70%,rgba(228,228,228,.4) 0 2px,transparent 3px),linear-gradient(160deg,#242425,#040404 70%)",
        showCar: false,
      },
      {
        title: "The driveway",
        caption: "At your door, at dusk",
        background:
          "linear-gradient(180deg,#0b0b0c 0,#141415 62%,#050505 62.2%,#0a0a0a)",
        showCar: true,
      },
    ],
  },
  testimonials: {
    items: [
      {
        quote: "The finish speaks for itself.",
        by: "Client name  —  Ceramic Coating",
      },
      {
        quote: "He came to my driveway. The car left better than new.",
        by: "Client name  —  Paint Correction",
      },
      {
        quote: "Every panel, every seam. Nothing was rushed.",
        by: "Client name  —  Full Detail",
      },
    ],
  },
  about: {
    label: "About Trujillo's",
    line1: "Precision,",
    line2: "without noise.",
    p1: "Trujillo's Premium Detailing provides premium mobile detailing services in Milwaukee, Wisconsin, bringing professional vehicle care directly to the customer.",
    p2: "One vehicle at a time. Unhurried work, and a finish worth stopping to look at.",
    stats: [
      { value: "Precision", label: "In every panel" },
      { value: "Care", label: "For every owner" },
      { value: "Convenience", label: "At your door" },
      { value: "Premium finish", label: "Every time" },
    ],
  },
  area: {
    label: "Mobile detailing / Service area",
    line1: "We come",
    line2: "to you.",
    copy: "Your driveway. Your garage. Your location. Premium detailing, brought to you.",
    where: "Where",
    whereValue: "Milwaukee, Wisconsin",
    service: "Service",
    serviceValue: "Mobile Detailing",
    area: "Area",
    areaValue: "Milwaukee and surrounding suburbs",
  },
  contact: {
    label: "Contact",
    title: "Let's detail\nyour vehicle.",
    instagramCta: "Book via Instagram",
    location: "Location",
    locationValue: "Milwaukee, Wisconsin",
    hours: "Hours",
    hoursValue: "By appointment",
    phone: "Phone",
    phoneValue: "Add phone number",
    email: "Email",
    emailValue: "Add email address",
    booking: "Booking",
    bookingValue: "Instagram DM",
  },
  cta: {
    line1: "Your vehicle",
    line2: "deserves the",
    line3: "Trujillo's finish.",
    location: "Milwaukee, Wisconsin",
    book: "Book your detail",
  },
  footer: {
    location: "Milwaukee, Wisconsin",
    instagram: "Instagram",
    booking: "Booking",
    contact: "Contact",
  },
};
