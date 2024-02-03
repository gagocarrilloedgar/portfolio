import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import NowPlaying from './NowPlaying'

export default function Footer() {
  return (
    <footer>
      <div className="mt-20 flex flex-col items-center">
        <nav className="mx-auto mt-4 flex w-full max-w-6xl flex-col justify-between gap-4 pb-8 sm:flex-row sm:gap-0 xl:max-w-full">
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Portfolio</p>
            <Link className="text-sm hover:text-primary-600 dark:hover:text-primary-400" href="/">
              Home
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/projects"
            >
              Projects
            </Link>
          </div>
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Writing</p>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="/tags"
            >
              Tags
            </Link>
          </div>
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Showcase</p>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="https://factorialhr.com/"
            >
              FactorialHR
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="https://nuwe.io/"
            >
              Nuwe
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href="https://joia.io/"
            >
              Joia
            </Link>
          </div>
          <div className="flex flex-col space-y-4 md:items-start">
            <p className="text-sm font-bold">Social</p>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.twitter}
            >
              Twitter
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.github}
            >
              GitHub
            </Link>
            <Link
              className="text-sm hover:text-primary-600 dark:hover:text-primary-400"
              href={siteMetadata.linkedin}
            >
              LinkedIn
            </Link>
          </div>
        </nav>
        <div className="flex w-full justify-between">
          <div className="w-full truncate">
            <NowPlaying />
            <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div>Copyright</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
              <Link
                className="text-black hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                href="/"
              >
                {siteMetadata.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
