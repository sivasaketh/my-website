import { useState } from 'react'
import { experience } from '../data/resume'

const PREVIEW_COUNT = 2

export default function Experience() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const toggle = (i: number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section id="experience" className="section-padding border-t border-gray-200 dark:border-white/5">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Experience
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />

        <div className="relative">
          <div className="hidden sm:block absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/30 to-transparent" />

          <div className="flex flex-col gap-10 sm:gap-12">
            {experience.map((job, i) => {
              const isExpanded = expanded.has(i)
              const visibleBullets = isExpanded ? job.bullets : job.bullets.slice(0, PREVIEW_COUNT)
              const hiddenCount = job.bullets.length - PREVIEW_COUNT

              return (
                <div key={i} className="sm:pl-14 relative">
                  <div className="hidden sm:flex absolute left-0 top-1.5 w-8 h-8 bg-indigo-600 border-4 border-gray-50 dark:border-gray-950 rounded-full items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/5 rounded-xl p-5 sm:p-7 hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                      <span className="text-xs sm:text-sm font-mono text-indigo-600 dark:text-indigo-400 whitespace-nowrap shrink-0">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-indigo-500 dark:text-indigo-300 font-medium text-sm sm:text-base mb-5">
                      {job.company}
                    </p>
                    <ul className="space-y-3">
                      {visibleBullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                          <span className="text-indigo-500 mt-1 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    {hiddenCount > 0 && (
                      <button
                        onClick={() => toggle(i)}
                        className="mt-4 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            Show less
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            Show {hiddenCount} more
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
