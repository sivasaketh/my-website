import { personal } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-16 xl:px-24">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
        <p>
          Built by{' '}
          <span className="text-indigo-400 font-medium">{personal.shortName}</span>
          {' '}— React · Tailwind · Redux
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
