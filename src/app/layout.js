"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
require("@/styles/globals.css");
var sans_1 = require("geist/font/sans");
// fr-FR locale is imported as frFR
var localizations_1 = require("@clerk/localizations");
var nextjs_1 = require("@clerk/nextjs");
var TopNav_1 = require("./_components/TopNav");
exports.metadata = {
    title: "Gallery test",
    description: "This is a test",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};
function RootLayout(_a) {
    var children = _a.children;
    return (<nextjs_1.ClerkProvider localization={localizations_1.esES}>
      <html lang="en" className={"".concat(sans_1.GeistSans.variable)}>
        <body className="flex flex-col gap-4">
          <TopNav_1.TopNav />
          {children}
        </body>
      </html>
    </nextjs_1.ClerkProvider>);
}
exports.default = RootLayout;
