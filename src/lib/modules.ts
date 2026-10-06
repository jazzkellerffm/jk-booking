/**
 * Registry of JK Booking modules.
 *
 * Every module is listed here even before it exists so navigation, access
 * rules and future dashboards can be driven from one place. Only modules with
 * status "live" are linked in the UI.
 */

export type ModuleAudience = "public" | "internal";
export type ModuleStatus = "live" | "planned";

export type BookingModule = {
  id: string;
  label: string;
  description: string;
  href: string;
  audience: ModuleAudience;
  status: ModuleStatus;
};

export const bookingModules = [
  {
    id: "artist-guide",
    label: "Artist Guide",
    description: "Playing at Jazzkeller Frankfurt — formats, conditions and concert-day basics.",
    href: "/",
    audience: "public",
    status: "live",
  },
  {
    id: "apply",
    label: "Apply",
    description: "Application flows for artists and projects.",
    href: "/apply",
    audience: "public",
    status: "planned",
  },
  {
    id: "invoice-guide",
    label: "Invoice Guide",
    description: "How to invoice Jazzkeller Frankfurt correctly.",
    href: "/invoice-guide",
    audience: "public",
    status: "planned",
  },
  {
    id: "confirmations",
    label: "Booking Details",
    description: "Personal confirmation and booking detail pages for artists.",
    href: "/booking",
    audience: "public",
    status: "planned",
  },
  {
    id: "desk",
    label: "Booking Desk",
    description: "Internal overview of requests, holds and confirmed bookings.",
    href: "/desk",
    audience: "internal",
    status: "planned",
  },
  {
    id: "calendar",
    label: "Booking Calendar",
    description: "Internal calendar of dates, formats and availability.",
    href: "/desk/calendar",
    audience: "internal",
    status: "planned",
  },
  {
    id: "artists",
    label: "Artists",
    description: "Artist and contact records.",
    href: "/desk/artists",
    audience: "internal",
    status: "planned",
  },
  {
    id: "projects",
    label: "Projects",
    description: "Bands and projects linked to artists.",
    href: "/desk/projects",
    audience: "internal",
    status: "planned",
  },
  {
    id: "events",
    label: "Events",
    description: "Booked events and their production details.",
    href: "/desk/events",
    audience: "internal",
    status: "planned",
  },
  {
    id: "payouts",
    label: "Payouts",
    description: "Payout calculation and settlement per event.",
    href: "/desk/payouts",
    audience: "internal",
    status: "planned",
  },
] as const satisfies readonly BookingModule[];

export type BookingModuleId = (typeof bookingModules)[number]["id"];

export function getModule(id: BookingModuleId): BookingModule {
  return bookingModules.find((module) => module.id === id)!;
}

export function getLiveModules(audience: ModuleAudience): BookingModule[] {
  return bookingModules.filter(
    (module) => module.audience === audience && module.status === "live",
  );
}
