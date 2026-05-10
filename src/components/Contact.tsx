import { personal } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-white/5">
      <div className="container-max">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
          Get In Touch
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-4 bg-gray-900 border border-white/5 rounded-xl p-5 sm:p-6 hover:border-indigo-500/40 transition-colors group"
          >
            <div className="w-11 h-11 bg-indigo-600/20 border border-indigo-500/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-600/30 transition-colors">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-white text-sm font-medium truncate group-hover:text-indigo-300 transition-colors">
                {personal.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-4 bg-gray-900 border border-white/5 rounded-xl p-5 sm:p-6 hover:border-indigo-500/40 transition-colors group"
          >
            <div className="w-11 h-11 bg-indigo-600/20 border border-indigo-500/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-600/30 transition-colors">
              <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Phone</p>
              <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                {personal.phone}
              </p>
            </div>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900 border border-white/5 rounded-xl p-5 sm:p-6 hover:border-indigo-500/40 transition-colors group"
          >
            <div className="w-11 h-11 bg-indigo-600/20 border border-indigo-500/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-600/30 transition-colors">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
              <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                https://www.linkedin.com/in/narasimha-siva-saketh-emani-4943067b/
              </p>
            </div>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900 border border-white/5 rounded-xl p-5 sm:p-6 hover:border-indigo-500/40 transition-colors group"
          >
            <div className="w-11 h-11 bg-indigo-600/20 border border-indigo-500/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-600/30 transition-colors">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">GitHub</p>
              <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                github.com/sivasaketh
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
