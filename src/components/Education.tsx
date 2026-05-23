import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="section-padding border-t border-gray-200 dark:border-white/5">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Education
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/5 rounded-xl p-5 sm:p-7 hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-600/20 border border-indigo-300 dark:border-indigo-500/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-500 dark:text-indigo-300 text-sm mt-0.5">{edu.school}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-medium">
                  GPA: {edu.gpa}
                </span>
              </div>

              {edu.courses.length > 0 && (
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Relevant Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="text-xs bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 px-2.5 py-0.5 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
