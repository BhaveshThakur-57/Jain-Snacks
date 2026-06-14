import "./globals.css";

export const metadata = {
  title: "Jainacks — Snack Better. Not Harder.",
  description: "Premium Jain snacks. High Protein. Plant Based. No Onion. No Garlic. Clean Ingredients for Modern Lifestyle.",
  keywords: "Jainacks, Jain snacks, high protein snacks, plant based, no onion no garlic, vacuum fried, healthy snacks, Bhopal",
  openGraph: {
    title: "Jainacks — Snack Better. Not Harder.",
    description: "Premium Jain snacks. High Protein. Plant Based. No Onion. No Garlic.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-jakarta antialiased">
        {children}
      </body>
    </html>
  );
}
