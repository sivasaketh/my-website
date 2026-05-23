import { personal } from '../data/resume'

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '250K+', label: 'API Requests / Day' },
  { value: '4', label: 'Microservices Built' },
  { value: '4.11', label: 'GPA at ASU' },
]

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-gray-200 dark:border-white/5">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          About Me
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              {personal.summary}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Previously built enterprise ETL pipelines for large-scale insurance and financial
              systems. Completed my M.S. at Arizona State University (2018–2020) during a
              career transition into modern software engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/5 rounded-xl p-5 sm:p-6 text-center hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-colors"
              >
                <p className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{value}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
