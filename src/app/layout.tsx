import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

// fr-FR locale is imported as frFR
import { esES } from "@clerk/localizations";

import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/TopNav";

export const metadata: Metadata = {
  title: "Gallery test",
  description: "This is a test",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
