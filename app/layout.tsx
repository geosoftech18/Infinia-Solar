import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/container";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Infinia Solar",
  description:
    "Infinia Solar is a solar energy company that provides clean and renewable energy solutions to residential and commercial customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {/* <Script>simplemaps_countrymap_mapdata.main_settings.auto_load = 'no';</Script> */}
        <Container>{children}</Container>
      </body>
    </html>
  );
}
