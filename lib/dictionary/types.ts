export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    brandFull: string;
    services: string;
    work: string;
    about: string;
    area: string;
    book: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    side: string;
    cta: string;
    location: string;
  };
  services: {
    label: string;
    title: string;
    items: Array<{
      id: string;
      number: string;
      title: string;
      description: string;
      panelClass: string;
    }>;
  };
  work: {
    title: string;
    items: Array<{
      title: string;
      caption: string;
      background: string;
      showCar: boolean;
    }>;
  };
  testimonials: {
    items: Array<{
      quote: string;
      by: string;
    }>;
  };
  about: {
    label: string;
    line1: string;
    line2: string;
    p1: string;
    p2: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  area: {
    label: string;
    line1: string;
    line2: string;
    copy: string;
    where: string;
    whereValue: string;
    service: string;
    serviceValue: string;
    area: string;
    areaValue: string;
  };
  contact: {
    label: string;
    title: string;
    instagramCta: string;
    location: string;
    locationValue: string;
    hours: string;
    hoursValue: string;
    phone: string;
    phoneValue: string;
    email: string;
    emailValue: string;
    booking: string;
    bookingValue: string;
  };
  cta: {
    line1: string;
    line2: string;
    line3: string;
    location: string;
    book: string;
  };
  footer: {
    location: string;
    instagram: string;
    booking: string;
    contact: string;
  };
};
