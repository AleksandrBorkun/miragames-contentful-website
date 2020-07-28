import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
import TopBar from '../components/topbar'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
  async function fetchEntries(param = {}) {
    const entries = await client.getEntries(param)
    if (entries.items) return entries.items
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await client.getContentTypes();
      const allPosts = await fetchEntries({content_type: contentTypes.items.filter(item => item.name.toLowerCase() === 'postwithimage')[0].sys.id}) //{content_type: id}
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      <TopBar/>
      {posts.length > 0
        ? posts.map(p => (
            <Post
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image.fields.file.url}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
        : null}
    </>
  )
}

export default HomePage