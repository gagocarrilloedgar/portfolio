import SocialIcon from '@/components/social-icons'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`My curated learning list.`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Learning resources
          </h1>
        </div>
        <div className="items-start space-y-2 whitespace-normal xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">
          <div>
            <p className="prose max-w-none pt-8 pb-8 dark:prose-dark">
              This is my curated list of resources that I've used or currently used when I'm working
              or just trying to create something. Here, you can expect to find different kind o
              levels of knowledge and topics. Event duplicated ones that could help you have a wider
              picture of the technology or simply have more resources.
              <br />
              <br />
              During my whole student and professional life I've been saving my learning resources,
              creating templates and making projects. I hope some of them are useful to you.
            </p>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
          <div className="flex flex-col items-center pt-8">
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
