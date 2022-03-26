const getLanguages = async (languages_url) => fetch(languages_url).then((r) => r.json())

// get all github projects from a user
async function getGithubProjects(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const data = await response.json()

  console.log(data)

  return data.map((d) => ({
    description: d.description,
    href: d.html_url,
    imgSrc: d.owner.avatar_url,
    title: d.name,
    language: d.language
  }))
}

export default getGithubProjects
