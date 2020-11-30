import { ImageWithLogo, MediaHolder } from "../components/images"
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
        // return ""
    }
}