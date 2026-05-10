import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-white/5">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
          Technical Skills
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="bg-gray-900 border border-white/5 rounded-xl p-5 sm:p-6 hover:border-indigo-500/30 transition-colors"
            >
              <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm bg-gray-800 border border-white/5 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {skill}
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
