import { me } from '@/data/profile';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Phone, Download } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: me.socials.email, icon: Mail, label: 'Email' },
    { href: me.socials.github, icon: Github, label: 'GitHub' },
    { href: me.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: me.socials.instagram, icon: Instagram, label: 'Instagram' },
    { href: me.socials.postman, icon: ExternalLink, label: 'Postman' },
    { href: me.socials.phone, icon: Phone, label: 'Phone' }
  ];

  const quickLinks = [
    { href: '/certifications', label: 'Certifications' },
    { href: '/publications', label: 'Publications' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{me.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {me.tagline}
            </p>
            <a 
              href="/sample-resume.pdf"
              download="Maaz_Ansari_Resume.pdf"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              © {currentYear} {me.name}. All rights reserved.
            </p>
            <p className="text-neutral-500 dark:text-neutral-500 text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
