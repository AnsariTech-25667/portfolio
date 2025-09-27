import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

// Icons components (using simple text for now, you can replace with actual icons)
const GithubIcon = () => <span>📧</span>;
const LinkedinIcon = () => <span>💼</span>;
const InstagramIcon = () => <span>📷</span>;
const PhoneIcon = () => <span>📱</span>;
const EmailIcon = () => <span>✉️</span>;
const DownloadIcon = () => <span>⬇️</span>;
const ExternalLinkIcon = () => <span>↗</span>;
const MenuIcon = () => <span>☰</span>;
const CloseIcon = () => <span>✕</span>;
const MoonIcon = () => <span>🌙</span>;
const SunIcon = () => <span>☀️</span>;

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "publications", label: "Publications", isPage: true, href: "/publications" },
    { id: "certifications", label: "Certifications", isPage: true, href: "/certifications" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="px-3 py-1 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 md:hidden"
          >
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              {me.name}
            </h1>
            <div className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              {me.shortIntro.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a
                href={`mailto:${me.email}`}
                className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                title="Email"
              >
                <EmailIcon />
              </a>
              <a
                href={me.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors"
                title="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href={me.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`https://instagram.com/${me.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={`tel:${me.phone}`}
                className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                title="Phone"
              >
                <PhoneIcon />
              </a>
            </div>

            {/* Explore Button */}
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
              <ExternalLinkIcon />
            </button>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
              <Image
                src={me.profilePic}
                alt={me.name}
                width={400}
                height={400}
                className="relative rounded-full shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{me.about.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {me.about.description}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium italic">
                {me.about.motto}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-xl font-semibold mb-4">Core Skills & Focus Areas</h4>
              <ul className="space-y-3">
                {me.about.coreSkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {me.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <h4 className="text-xl text-blue-600 dark:text-blue-400">{exp.company}</h4>
                  </div>
                  <div className="text-right text-gray-600 dark:text-gray-300">
                    <p>{exp.duration}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">▸</span>
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects + Education Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {me.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <div className="space-y-2 mb-4">
                  {project.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                      {desc}
                    </p>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors text-sm"
                  >
                    GitHub <ExternalLinkIcon />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm"
                    >
                      Demo <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {me.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-2">{edu.school}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.duration}</p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(me.skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Preview Section */}
      <section id="publications" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Publications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Peer-reviewed research in Computer Vision and AI-driven Robotics, published in internationally recognized journals.
            </p>
          </motion.div>

          {me.publications && me.publications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-full">
                      Scopus Indexed
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{me.publications[0].date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {me.publications[0].title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{me.publications[0].journal}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {me.publications[0].abstract.substring(0, 200)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {me.publications[0].tags.slice(0, 4).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-6 text-6xl">🤖</div>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/publications"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
                >
                  View All Publications
                  <ExternalLinkIcon />
                </Link>
                <Link
                  href={me.publications[0].doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 font-medium border border-gray-200 dark:border-gray-600"
                >
                  Read Paper
                  <ExternalLinkIcon />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Certifications Preview Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Industry-recognized certifications from Google, LinkedIn Learning, and leading tech platforms.
            </p>
          </motion.div>

          {me.certifications && me.certifications.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {me.certifications.slice(0, 3).map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{cert.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/certifications"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Certifications
              <ExternalLinkIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${me.email}`}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <EmailIcon />
                  <span>{me.email}</span>
                </a>
                
                <a
                  href={`tel:${me.phone}`}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <PhoneIcon />
                  <span>{me.phone}</span>
                </a>
                
                <a
                  href={me.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href={me.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
              </div>

              <a
                href={me.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                <DownloadIcon />
                Download Resume
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}