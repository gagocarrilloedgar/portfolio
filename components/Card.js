import Link from './Link'

const Card = ({ title, description, href, technologies }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60  hover:border-gradient-100  hover:border-opacity-100 dark:border-gray-700 hover:dark:border-primary-900`}
    >
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 ">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {technologies ? (
          <div className="mb-4">
            <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="m-1 mr-1 inline-flex items-center rounded-full bg-gradient-100 px-2.5 py-0.5 text-xs font-medium leading-5 text-gray-800 dark:bg-primary-900 dark:text-gray-100"
                >
                  {tech}
                </span>
              ))}
            </p>
          </div>
        ) : null}
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium  text-primary-400 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
