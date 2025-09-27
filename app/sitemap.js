export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.example';
  
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/certifications`,
      lastModified: new Date(),
    },
    {
      url: `${base}/publications`,
      lastModified: new Date(),
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
    },
  ];
}