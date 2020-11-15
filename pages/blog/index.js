import { useEffect, useState } from 'react'
import {Container} from 'semantic-ui-react'
import Head from 'next/head'
import TopBar from '../../components/topbar'
import BlogArticlesPreview from '../../components/blogAriclesPreview'
import GamesPagination from '../../components/gamesPagination'
import { fetchEntries } from '../../utils/contentful.server'


function HomePage() {

  const [articles, setArticles] = useState([])
  const [page=1, setPage] = useState(1)

  useEffect(() => {
    async function getBlogArticles() {
      const allArticles = await fetchEntries({content_type: 'blogArticle', select: 'fields.title,fields.cover,fields.description,fields.date,sys.id'}); //contentTypes.items.filter(item => item.name.toLowerCase() === 'postwithimage')[0].sys.id}) //{content_type: id}
      setArticles([...allArticles])
    }
    getBlogArticles()
  }, [])

  return (
    <>
      <Head>
        <title>MiraGames - Blog</title>
        <link 
          rel = "stylesheet" 
          href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css" 
          type="text/css"/>
      </Head>  
      <Container  style={{ margin: 20 }}>
      <TopBar activeItem='blog'/>
      {articles.length > 0 ?

        <>
              {console.log(articles)}
          <BlogArticlesPreview 
            title = {articles[page - 1].fields.title} 
            desc = {articles[page - 1].fields.description} 
            cover = {articles[page - 1].fields.cover.fields.file.url} 
            publishDate = {articles[page - 1].fields.date}
            slug = {articles[page - 1].sys.id}
                />      
          <GamesPagination count = {articles.length} activePage = {page} setPage = {setPage}/>
        </>: ""
      }
      </Container>
    </>
  )
}

export default HomePage