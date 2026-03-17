import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LinkedInInsight from "@/components/LinkedInInsight";
import MetaPixel from "@/components/MetaPixel";
import { siteContent } from "@/lib/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.metadata.baseUrl),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  openGraph: {
    title: siteContent.metadata.ogTitle,
    description: siteContent.metadata.description,
    images: [{ url: siteContent.metadata.ogImage, width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rbzud.share-na2.hsforms.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://static.hsappstatic.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://snap.licdn.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <GoogleAnalytics />
        <MetaPixel />
        <LinkedInInsight />
        {children}
      </body>
    </html>
  );
}
