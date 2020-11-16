import { useEffect, useState } from 'react'
import {Container} from 'semantic-ui-react'
import Head from 'next/head'
import Post from '../components/post'
import TopBar from '../components/topbar'
import Game from '../components/game'
import GamesPagination from '../components/gamesPagination'
import { fetchEntries } from '../utils/contentful.server'


function HomePage() {

  const [games, setPosts] = useState([])
  const [page=1, setPage] = useState(1)

  useEffect(() => {
    async function getGames() {
      const allGames = await fetchEntries({content_type: 'games'}); //contentTypes.items.filter(item => item.name.toLowerCase() === 'postwithimage')[0].sys.id}) //{content_type: id}
      setPosts([...allGames])
    }
    getGames()
  }, [])

  return (
    <>
      <Head>
        <title>MiraGames - create with love</title>
        <meta property="og:title" content="Mira Games Studio" />
        <meta property="og:description" 
            content="Welcome to MiraGames site. Here you can find all inforamtion about our games and how to create it. Such as Isolation: Don't touch me, Desert Runner, Racing Tanks. In our blog you'll find info how to use Unity, or any other game engine to work with sprites, materials, shaders, physics, logic, code to create games, how to work with animation and where to search for free assets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miragamesstudio.com/" />
        <meta property="og:image" content="https://images.ctfassets.net/gmfhtos0wyy5/1l32ZJBXeT7emjFg6QY6qA/9acd456888f9f089b48c3f6e5e6c98d4/photo_2020-08-06_09-42-08.jpg" />
        <meta name="google-site-verification" content="vecCZaVit4ZbfHtDB6Fm88WWHtOZ6Rs-zRCxEkYr2vs" />
        <meta name="description" content={`Welcome to MiraGames site. Here you can find all inforamtion about our games and how to create it. Such as Isolation: Don't touch me, Desert Runner, Racing Tanks. In our blog you'll find info how to use Unity, or any other game engine to work with sprites, materials, shaders, physics, logic, code to create games, how to work with animation and where to search for free assets.`} />
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
                slug = {games[page - 1].fields.slug}
                />      
          <GamesPagination count = {games.length} activePage = {page} setPage={setPage}/>
        </>: ""
      }
      </Container>
    </>
  )
}

export default HomePage