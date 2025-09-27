import { me } from '@/data/profile';
import { ExternalLink } from 'lucide-react';

const publicationDescriptions = {
  'AI-Powered Precision Robotic Arm: Real-Time Vision & Intelligent Control': 'Research on developing an intelligent robotic arm system using YOLOv4 for real-time object detection and precise control mechanisms. Achieved 91.78% accuracy with 120ms response time in real-world testing scenarios.'
};

export default function PublicationsPage() {
  return (
    <main className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Publications</h1>
        <div className="max-w-4xl mx-auto space-y-6">
          {me.publications.map((pub, index) => (
            <article key={index} className="card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{pub.title}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{pub.venue}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Published {pub.year}</p>
                  {publicationDescriptions[pub.title] && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {publicationDescriptions[pub.title]}
                    </p>
                  )}
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  {pub.link && pub.link !== '#' ? (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className="btn btn-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read Publication
                    </a>
                  ) : (
                    <button disabled className="btn opacity-50 cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      Coming Soon
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