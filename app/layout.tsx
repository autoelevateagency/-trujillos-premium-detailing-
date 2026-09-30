import type { Metadata, Viewport } from "next";
import { Cormorant, Jost } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";
import { getDictionary } from "@/lib/dictionary";
import "./globals.css";
import "./styles/site.css";

const display = Cormorant({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dictionary = getDictionary("EN");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
};

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider initialLocale="EN">{children}</LocaleProvider>
      </body>
    </html>
  );
}
