import "./globals.css";
import { me } from '@/data/profile';
import ParallaxCosmos from '@/components/background/ParallaxCosmos';
import ParticlesGalaxy from '@/components/background/ParticlesGalaxy';
import CosmicElements from '@/components/background/CosmicElements';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.example'),
  title: {
    default: 'Maaz Ansari — Portfolio',
    template: '%s · Maaz Ansari'
  },
  description: 'Personal portfolio of Maaz Ansari.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Maaz Ansari — Portfolio',
    description: 'Personal portfolio of Maaz Ansari.',
    siteName: 'Maaz Ansari'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maaz Ansari — Portfolio',
    description: 'Personal portfolio of Maaz Ansari.'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": me.name,
  "email": me.socials?.email?.replace('mailto:', ''),
  "sameAs": [me.socials?.github, me.socials?.linkedin, me.socials?.instagram].filter(Boolean),
  "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.example'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-black text-slate-100 antialiased">
        <ParallaxCosmos />
        <ParticlesGalaxy />
        <CosmicElements />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
