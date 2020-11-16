import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Image, Container } from "semantic-ui-react"

import styled from 'styled-components'
import { fetchEntry } from '../../utils/contentful.server'
import TopBar from '../../components/topbar'

const ImageWrapper = styled.div`
    width: 80%,
    margin: 'auto'
`
const ContentHolder = styled.div`
    width: 80%;
    margin: auto;`

const BlogArticle = () => {
    const router = useRouter()
    const { slug } = router.query
    const [article, setArticle] = useState({})

    useEffect(() => {
        console.log(slug)
        async function getArticle() {
            const entry = await fetchEntry(slug)
            console.log(entry)
            setArticle(entry.items[0].fields)
        }
        if(slug)getArticle();
    },[slug])

    return article ? (
        <>
            <Head>
                <title>Learn game development with MiraGames blog</title>
                <meta name="description" content={article?.description} />
                <meta property="og:title" content={article?.title} />
                <meta property="og:description" content={article?.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://miragamesstudio.com/blog/${slug}`} />
                <meta property="og:image" content={article?.cover?.fields.file.url} />

                <link rel="shortcut icon" href="/icon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"
                    type="text/css" />
            </Head>
            <Container style={{ margin: 20 }}>
            <TopBar breadcrumb={article.title || "Article"}/>
            <ArticleContent {...article} />
            </Container>
        </>
    )
        : <NotFound />
}

const ArticleContent = ({ title, description, content, cover }) => (<main>
    <h1>{title}</h1>
    <h3>{description}</h3>
    {/* <ImageWrapper>
        <Image  src={cover ? cover.fields.file.url : ''}  fluid={true} />
    </ImageWrapper> */}
    {content && <ContentHolder>
        {content?.map((block, key) => {
            return block.sys.contentType.sys.id === 'paragraph' ?
                <ReactMarkdown key={key} source={block.fields.content} />
                :
                <Image key={key} src={block.fields.image.fields.file.url} fluid={true} />
        })}
    </ContentHolder>}


</main>)


const NotFound = () => (<div>
    Not Found
</div>)


export default BlogArticle;