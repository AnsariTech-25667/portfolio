import "./globals.css";
import SimpleStarfield from "@/components/SimpleStarfield";
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
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-transparent text-neutral-100 antialiased selection:bg-cyan-400/30 selection:text-white">
        {/* LEGENDARY GALAXY CLUSTER BACKGROUND SYSTEM - PROFESSIONAL */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -50 }}>
          {/* Primary Galaxy Systems */}
          <div className="galaxy-system-alpha" />
          <div className="galaxy-system-beta" />
          <div className="galaxy-system-gamma" />
          
          {/* Stellar Formations */}
          <div className="stellar-formation-1" />
          <div className="stellar-formation-2" />
          <div className="stellar-formation-3" />
          
          {/* Elite Pulsar Stars */}
          <div className="pulsar-alpha" />
          <div className="pulsar-beta" />
          <div className="pulsar-gamma" />
          
          {/* Legendary Comet & Meteor Systems */}
          <div className="comet-trail-epic" />
          <div className="meteor-shower-legendary" />
          
          {/* Signature Nebula Wisps */}
          <div className="nebula-wisp-1" />
          <div className="nebula-wisp-2" />
          
          {/* Multi-Layer Star Systems */}
          <div className="stars-layer-2" />
          <div className="stars-layer-3" />
          <div className="stars-layer-bright" />
          <div className="stars-layer-ultra" />
          <div className="stars-layer-mega" />
          
          {/* Moving Galaxy Clusters */}
          <div className="galaxy-cluster-1" />
          <div className="galaxy-cluster-2" />
          <div className="galaxy-cluster-3" />
          
          {/* Shooting Star Layers */}
          <div className="stars-layer-shooting" />
          <div className="shooting-fast" />
          <div className="shooting-slow" />
          
          {/* Base Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-purple-950/30" />
        </div>

        {/* ATMOSPHERIC EFFECTS */}
        <SimpleStarfield />
        <div className="nebula pointer-events-none" aria-hidden />
        <div className="vignette" />
        
        {/* CONTENT ABOVE ALL */}
        <div className="relative z-10">
          {children}
        </div>
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
