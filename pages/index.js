import { useEffect, useState } from 'react'
import {Container, Header, Button, Icon} from 'semantic-ui-react'
import Head from 'next/head'
import Post from '../components/post'
import TopBar from '../components/topbar'
import Game from '../components/game'
import GamesPagination from '../components/gamesPagination'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {

  async function fetchEntries(param = {}) {
    const entries = await client.getEntries(param)
    if (entries.items) return entries.items
  }

  function handlePaginationChange(index){
    if(index.target.text == '⟨') setPage(parseInt(page) - 1)
    else if(index.target.text == '⟩') setPage(parseInt(page) + 1)
    else setPage(index.target.text)
  }

  const [games, setPosts] = useState([])
  const [page=1, setPage] = useState(1)

  useEffect(() => {
    async function getGames() {
      //const contentTypes = await client.getContentTypes();
      const allGames = await fetchEntries({content_type: 'games'}); //contentTypes.items.filter(item => item.name.toLowerCase() === 'postwithimage')[0].sys.id}) //{content_type: id}
      setPosts([...allGames])
    }
    getGames()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link 
          rel = "stylesheet" 
          href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css" 
          type="text/css"/>
      </Head>  
      <Container  style={{ margin: 20 }}>
      <TopBar/>
      {games.length > 0 ?
        <>
          <Game title = {games[page - 1].fields.title} 
                image = {games[page - 1].fields.image.fields.file.url} 
                releaseDate = {games[page - 1].fields.releaseDate}
                url = {games[page - 1].fields.url}
                desc = {games[page - 1].fields.desc}
                />      
          <GamesPagination count = {games.length} activePage = {page} handlePaginationChange = {handlePaginationChange}/>
              
        </>: ""
      }
      </Container>
      {/* {posts.length > 0
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
        : null} */}
    </>
  )
}

export default HomePage