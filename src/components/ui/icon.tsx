import {
  ArrowLeftRight,
  Armchair,
  AudioLines,
  Ban,
  CalendarDays,
  Check,
  CircleAlert,
  CircleDot,
  ClipboardList,
  Clock,
  Disc3,
  DoorOpen,
  Drum,
  GlassWater,
  Guitar,
  Info,
  Landmark,
  Layers,
  Mail,
  Megaphone,
  Mic,
  Moon,
  Music,
  Piano,
  Receipt,
  Signpost,
  SlidersVertical,
  Sparkles,
  Speaker,
  Stamp,
  Sun,
  Ticket,
  Users,
  Wallet,
  Wine,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

const icons: Record<IconName, LucideIcon> = {
  alert: CircleAlert,
  arrival: DoorOpen,
  audience: Users,
  ban: Ban,
  bass: AudioLines,
  building: Landmark,
  calendar: CalendarDays,
  check: Check,
  clock: Clock,
  cymbal: Disc3,
  drinks: GlassWater,
  drum: Drum,
  formats: Layers,
  gema: Stamp,
  guestlist: ClipboardList,
  guitar: Guitar,
  hospitality: Wine,
  info: Info,
  invoice: Receipt,
  mail: Mail,
  megaphone: Megaphone,
  monitor: Speaker,
  moon: Moon,
  music: Music,
  next: Signpost,
  payout: Wallet,
  piano: Piano,
  seats: Armchair,
  session: Mic,
  sparkles: Sparkles,
  stage: CircleDot,
  sun: Sun,
  technical: SlidersVertical,
  ticket: Ticket,
  transfer: ArrowLeftRight,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = icons[name];
  return (
    <Component
      aria-hidden="true"
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
