import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container } from "semantic-ui-react"

import styled from 'styled-components'
import { fetchEntry } from '../../src/contentful.server'
import TopBar from '../../components/topbar'
import { renderContentElement } from '../../src/renderer'
import { H2 } from '../../components/styled/elements'

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
                <title>Learn game development with Mira Games blog</title>
                <meta name="description" content={article?.description} />
                <meta property="og:title" content={article?.title} />
                <meta property="og:description" content={article?.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://miragamesstudio.com/blog/${slug}`} />
                <meta property="og:image" content={article?.cover?.fields.file.url} />
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
    <H2 center>{title}</H2>
    {content && <ContentHolder>
        {content?.map((block, key) => {
            return renderContentElement(block);
        })}
    </ContentHolder>}
</main>)


const NotFound = () => (<div>
    Not Found
</div>)


export default BlogArticle;