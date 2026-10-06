import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.productName,
    template: `%s · ${site.productName}`,
  },
  description: `${site.productName} — ${site.venueName}`,
  applicationName: site.productName,
};

export const viewport: Viewport = {
  themeColor: "#28463f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${fontVariables} h-full antialiased`} lang="en">
      <body className="flex min-h-full flex-col bg-jk-background text-jk-primary">
        {children}
      </body>
    </html>
  );
}
