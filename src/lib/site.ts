export const site = {
  productName: "JK Booking",
  venueName: "Jazzkeller Frankfurt",
  venueTagline: "Domicile du Jazz · est 1952",
  ecosystem: "JKOS",
  contacts: {
    booking: {
      label: "Booking",
      email: "booking@jazzkeller.com",
    },
    // Secondary operational contact (e.g. production / concert day) can be added here.
    operations: null as { label: string; email: string } | null,
  },
  links: {
    website: "https://jazzkeller.com",
    invoicePortal: "https://invoice.jazzkeller.com",
    privacy: "https://jazzkeller.com/datenschutz.html",
    imprint: "https://jazzkeller.com/impressum.html",
  },
} as const;

export function mailto(email: string, subject?: string) {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}
