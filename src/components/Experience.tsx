import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-white/5">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
          Experience
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />

        <div className="relative">
          {/* Timeline line — hidden on small screens */}
          <div className="hidden sm:block absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/30 to-transparent" />

          <div className="flex flex-col gap-10 sm:gap-12">
            {experience.map((job, i) => (
              <div key={i} className="sm:pl-14 relative">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1.5 w-8 h-8 bg-indigo-600 border-4 border-gray-950 rounded-full items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="bg-gray-900 border border-white/5 rounded-xl p-5 sm:p-7 hover:border-indigo-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{job.role}</h3>
                    <span className="text-xs sm:text-sm font-mono text-indigo-400 whitespace-nowrap shrink-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-indigo-300 font-medium text-sm sm:text-base mb-5">
                    {job.company}
                  </p>
                  <ul className="space-y-3">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                        <span className="text-indigo-500 mt-1 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
