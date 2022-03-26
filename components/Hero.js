import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="h-content sm:h-content-sm flex w-full flex-col justify-around">
      <h1 className="tracking-tightest my-28 select-none text-center text-6xl font-extrabold leading-none sm:my-10 lg:text-9xl">
        <span
          data-content="Discover."
          className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
            Discover.
          </span>
        </span>
        <span
          data-content="Learn."
          className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
            Learn.
          </span>
        </span>
        <span
          data-content="Create."
          className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
            Create.
          </span>
        </span>
      </h1>
      <div className="space-y-2 md:space-y-5">
        <PageTitle>
          Hey! Edgar here{' '}
          <span role="img" aria-label="waving hand" className="wave">
            👋
          </span>
        </PageTitle>
        <p className="prose max-w-none text-lg leading-7 text-gray-500 dark:text-gray-400">
          I am a heavey-front full stack software engineer with a strong focus in JS, TS, React and
          NextJS{' '}
          <Link href={`mailto:${siteMetadata.email}`}>
            <a
              className="font-medium leading-6 "
              aria-label={`Email to ${siteMetadata.email}`}
              title={`Email to ${siteMetadata.email}`}
            >
              Get in touch &rarr;
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}
