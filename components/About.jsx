export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
        {/* Left: about prose */}
        <div className="space-y-6">
          <h2 className="headline section-title">About Me</h2>
          <h3 className="text-brand-aqua font-semibold">
            Full-Stack Web Developer | Software Engineer | AI/ML & Data Analytics
          </h3>
          <p className="text-neutral-300">
            I'm a full-stack developer with a solid track record of building and shipping production-ready web apps. My work centers on the MERN stack (MongoDB, Express.js, React, Node.js) and modern tools such as Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL. I deploy to Vercel and AWS, use CI/CD pipelines, and design for scalability from day one. Several of my projects—PromptPilot, NovaDraft, SyncSlate, and FinSight-AI—showcase this range: AI-powered chat platforms, content-creation suites, scheduling systems, and finance apps that blend polished UX with real-time data and cloud-native architecture. I also work at the intersection of AI/ML and data analytics, integrating OpenAI/Gemini APIs and leveraging SQL, Power BI, Tableau, and Google Data Analytics to turn raw data into actionable insights. During my Software Engineer Internship at Softmaque Consulting, I built key features for an enterprise-grade Defect Tracking and Workflow Management System using ASP.NET, SQL Server, jQuery, and AJAX. I implemented role-based UI, dynamic notifications, and Excel ingestion that improved QA speed and accuracy across the company.
          </p>
          <p className="text-neutral-300">
            I love designing high-impact SaaS products that save people time and make data useful—clean code, strong architecture, and real business value in every release.
          </p>

          {/* Education */}
          <div className="card">
            <h4 className="font-semibold mb-2">Education</h4>
            <p className="text-neutral-200">
              Vishwakarma Institute of Technology (VIT), Pune — B.Tech, Electronics and Telecommunications Engineering
              <br />
              <span className="text-sm text-neutral-400">Jan 2022 – May 2025</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Data Analysis","Full-Stack Development","Python","JavaScript","MongoDB","Express.js","React.js","Node.js"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-neutral-200">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Core skills card */}
        <aside className="card h-fit">
          <h3 className="font-semibold text-lg mb-3">Core Skills & Focus Areas</h3>
          <div className="grid gap-3 text-sm">
            <div>
              <p className="text-neutral-400 mb-1">Full-Stack Development</p>
              <p className="text-neutral-200">JavaScript/TypeScript, MERN, Next.js, React, Node.js</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">Cloud & DevOps</p>
              <p className="text-neutral-200">AWS, Docker, Vercel, CI/CD, REST & GraphQL</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">Databases</p>
              <p className="text-neutral-200">PostgreSQL, MongoDB, Prisma, Neon, SQL</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">AI/ML & Analytics</p>
              <p className="text-neutral-200">OpenAI/Gemini, Python, Power BI, Tableau</p>
            </div>
            <div>
              <p className="text-neutral-400 mb-1">Practices</p>
              <p className="text-neutral-200">Scalable Architecture, Microservices, Agile, TDD</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
