import "@/styles/globals.css";
import "@uploadthing/react/styles.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
// fr-FR locale is imported as frFR
import { esES } from "@clerk/localizations";

import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/TopNav";
import React from "react";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "@/app/_analytics/providers";

export const metadata: Metadata = {
  title: "Gallery test",
  description: "This is a test",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider localization={esES}>
      <NextSSRPlugin
        /**
         * The `extractRouterConfig` will extract **only** the route configs
         * from the router to prevent additional information from being
         * leaked to the client. The data passed to the client is the same
         * as if you were to fetch `/api/uploadthing` directly.
         */
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="">
          <CSPostHogProvider>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
          </CSPostHogProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
