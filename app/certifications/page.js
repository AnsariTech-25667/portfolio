import { me } from '@/data/profile';
import { ExternalLink } from 'lucide-react';

const certificationSkills = {
  'Google Data Analytics Certificate': 'SQL, spreadsheets, dashboards, and storytelling with data.',
  'Data Analyst': 'Statistical analysis, data visualization, and business intelligence reporting.',
  'Learning Data Analytics Foundations': 'Data collection, cleaning, analysis methodologies, and insights generation.',
  'Power BI Desktop': 'DAX, data modeling, and report automation.',
  'Tableau Essential Training': 'Interactive dashboards, data connections, and visual analytics.'
};

export default function CertificationsPage() {
  return (
    <main className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Certifications</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {me.certifications.map((cert, index) => (
            <article key={index} className="card">
              <div className="flex flex-col h-full">
                <h2 className="text-lg font-semibold mb-2">{cert.name}</h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{cert.org}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{cert.year}</p>
                
                {certificationSkills[cert.name] && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {certificationSkills[cert.name]}
                  </p>
                )}
                
                <div className="mt-auto">
                  {cert.link && cert.link !== '#' ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className="btn w-full"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  ) : (
                    <button disabled className="btn w-full opacity-50 cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      Certificate Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}