import { useStoryblok, StoryblokComponent } from '@storyblok/react'

function App () {
  const slug =
    window.location.pathname === '/'
      ? 'home'
      : window.location.pathname.replace('/', '')

  const story = useStoryblok(slug, { version: 'published' })
  if (!story || !story.content) {
    return <div>Loading...</div>
  }

  return <StoryblokComponent blok={story.content} />
}
export default App
