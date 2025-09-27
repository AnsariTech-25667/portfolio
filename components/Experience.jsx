import { me } from '@/data/profile';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            {me.education?.map((edu, index) => (
              <article key={index} className="card">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">GPA: {edu.gpa}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Publications Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Publications</h3>
            {me.publications?.map((pub, index) => (
              <article key={index} className="card">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-semibold">{pub.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{pub.venue}</p>
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 lg:mt-0">
                    {pub.year}
                  </span>
                </div>
                {pub.link && pub.link !== '#' && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    View Publication →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}