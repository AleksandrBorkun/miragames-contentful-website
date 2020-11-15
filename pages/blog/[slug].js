import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import ReactMarkdown  from 'react-markdown'
import { Card, Image, Icon, Input, Button, Grid, GridColumn, Checkbox} from "semantic-ui-react"


import { fetchEntry } from '../../utils/contentful.server'

const ImageWrapper = {
    width: '80%',
    margin: 'auto'
}
const ContentHolder = {
    width: '90%',
    margin: 'auto'
}

const BlogArticle = () => {
    const router = useRouter()
    const { slug } = router.query
    const [article, setArticle] = useState({})

    useEffect(()=>{
        console.log(typeof slug)
        async function getArticle(){
            const entry = await fetchEntry(slug)
            setArticle(entry.fields)
        }
        getArticle();
    },[])

return (
    <>      
    <Head>
        <title>Learn GameDev with MiraGames blog</title>
        <meta name="description" content={article?.description} />

        <link 
          rel = "stylesheet" 
          href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css" 
          type="text/css"/>
    </Head> 
    {article ? <ArticleContent {...article}/> : <NotFound/>}
  </>
    )
}

const ArticleContent = ({title, description, content, cover}) => ( <main>
    <h1>{title}</h1>
    <h3>{description}</h3>
    {/* <div style={ImageWrapper}>
        <Image  src={cover ? cover.fields.file.url : ''}  fluid={true} />
    </div> */}
    {console.log(content)}
    {content && <div style={ContentHolder}>
        {content.map((block, key) => {
            return block.sys.contentType.sys.id === 'paragraph' ?
            <ReactMarkdown key = {key} source={block.fields.content}/>
            :
            <Image key={key} src={block.fields.image.fields.file.url}  fluid={true} />
        })}
    </div>}


</main>)


const NotFound = () => (<div>
    Not Found
</div>)


export default BlogArticle;