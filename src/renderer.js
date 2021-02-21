import ReactMarkdown from "react-markdown"
import { ImageWithDescription, ImageWithLogo, MediaHolder } from "../components/images"
import { Quote } from "../components/textBlock"

export const renderContentElement = (contentBlock)=>{
    if(contentBlock.fields.image && contentBlock.fields.title === 'Logo'){
        return (<ImageWithLogo {...contentBlock.fields}/>)
    }
    else if(contentBlock.sys.contentType.sys.id === 'quote'){
        console.log(contentBlock.fields)
        return <Quote {...contentBlock.fields}/>
    }else if(contentBlock.sys.contentType.sys.id === 'imagesHolder'){
        return <MediaHolder id = {contentBlock.sys.id}/>
    }else if(contentBlock.sys.contentType.sys.id  === "imageWithDescription"){
        return <ImageWithDescription 
                src={contentBlock.fields.image.fields.file.url} 
                description={contentBlock.fields.description} 
                alt = {contentBlock.fields.title}/>
    }
    else if(contentBlock.sys.contentType.sys.id  === "paragraph"){ //TODO: remove this
        return <ReactMarkdown source={contentBlock.fields.content} />
    }
    else{
        console.log(contentBlock)
        return <div>Not here yet</div>
    }
}