import "./globals.css";
import Starfield from "@/components/Starfield";
import { me } from "@/data/profile";

export const metadata = {
  title: { default: "Maaz Ansari — Portfolio", template: "%s  Maaz Ansari" },
  description: "Personal portfolio of Maaz Ansari.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.example"),
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", title: "Maaz Ansari — Portfolio", description: "Personal portfolio of Maaz Ansari.", siteName: "Maaz Ansari" },
  twitter: { card: "summary_large_image", title: "Maaz Ansari — Portfolio", description: "Personal portfolio of Maaz Ansari." },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-[#05070d] text-neutral-100 antialiased selection:bg-cyan-400/30 selection:text-white">
        {/* Global galaxy background */}
        <Starfield />
        <div className="nebula" />
        <div className="vignette" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: me?.name,
              email: me?.socials?.email?.replace("mailto:", ""),
              sameAs: [me?.socials?.github, me?.socials?.linkedin, me?.socials?.instagram].filter(Boolean),
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.example",
            }),
          }}
        />
      </body>
    </html>
  );
}
