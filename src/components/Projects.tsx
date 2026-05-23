import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-gray-200 dark:border-white/5">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Projects
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/5 rounded-xl p-5 sm:p-7 flex flex-col hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {project.name}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors shrink-0"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-300 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
