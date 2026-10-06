import { AppShell } from "@/components/layout/app-shell";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return <AppShell>{children}</AppShell>;
}
