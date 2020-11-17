import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import Head from 'next/head'
import TopBar from '../../components/topbar'
import BlogArticlesPreview from '../../components/blogAriclesPreview'
import GamesPagination from '../../components/gamesPagination'
import { fetchEntries } from '../../utils/contentful.server'


function HomePage() {

  const [articles, setArticles] = useState([])
  const [page = 1, setPage] = useState(1)

  useEffect(() => {
    async function getBlogArticles() {
      const allArticles = await fetchEntries({ content_type: 'blogArticle', select: 'fields.title,fields.cover,fields.description,fields.date,sys.id' }); //contentTypes.items.filter(item => item.name.toLowerCase() === 'postwithimage')[0].sys.id}) //{content_type: id}
      setArticles([...allArticles])
    }
    getBlogArticles()
  }, [])

  return (
    <>
      <Head>
        <title>Mira Games - Blog</title>
        <meta name="description" content="Learn game development with Mira Games blog" />
        <meta property="og:title" content="Game development blog" />
        <meta property="og:description" content="Learn game development with Mira Games blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://miragamesstudio.com/blog`} />
        <meta property="og:image" content={"https://images.ctfassets.net/gmfhtos0wyy5/1l32ZJBXeT7emjFg6QY6qA/9acd456888f9f089b48c3f6e5e6c98d4/photo_2020-08-06_09-42-08.jpg"} />
      </Head>
      <Container style={{ margin: 20 }}>
        <TopBar activeItem='blog' />
        {articles.length > 0 ?
          <>
            <BlogArticlesPreview
              title={articles[page - 1].fields.title}
              desc={articles[page - 1].fields.description}
              cover={articles[page - 1].fields.cover.fields.file.url}
              publishDate={articles[page - 1].fields.date}
              slug={articles[page - 1].sys.id}
            />
            <GamesPagination count={articles.length} activePage={page} setPage={setPage} />
          </> : ""
        }
      </Container>
    </>
  )
}

export default HomePage