import type { Metadata } from "next";
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
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
