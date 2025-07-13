import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "@audrey.an | links",
  description: "links, links, kegul, kegul"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased gradient-bg">
        {children}
      </body>
    </html>
  );
}
