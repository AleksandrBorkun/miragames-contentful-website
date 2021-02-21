import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import { fetchEntry } from '../src/contentful.server'
import { CREAMY } from './styled/colors'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DescriptionForImage } from './textBlock'

const LogoHolder = styled.div`
    display : flex;
    width: 100%;
    background-color: white;
    justify-content: center;
`

const ImageHolder = styled.div`
    width: 100%;
    background-color: white;
`

const Image = styled.img`
    height: 500px;
`

const MediaSlideHolder = styled.div`
    display: flex;
    height: 500px;
    align-items: center;
    div{
        width: 100%
    }

`
export const ImageWithDescription = ({description, src, alt})=>{
    console.log(src)
    return (
    <ImageHolder>
        <DescriptionForImage>{description}</DescriptionForImage>
        <Image src={src} alt={alt || description}/>
    </ImageHolder>
    )
}

export const ImageWithLogo =({image, description})=>(
<LogoHolder>
    <Image src={image.fields.file.url} alt={description}/>
</LogoHolder>)

export const MediaHolder = ({id}) => {
    const [images, setImages] = useState([])
    const opts = {
        height: 500-40,
        width: window.innerWidth,
        playerVars: {
          autoplay: 0,
        },
      };

    useEffect(() => {
        async function getGamesImages() {
            const images = await fetchEntry(id);
            setImages(images.items[0].fields.images)
        }
        getGamesImages();
    }, []);
    return (<Carousel showThumbs={false}>
        {images.length && images.map(({fields}) =>{
            return (<MediaSlideHolder>{fields.title.indexOf('youtube') !== -1 ?
                <YouTube videoId={fields.description} opts={opts}/> :
                <Image src = {fields.image.fields.file.url} alt={fields.description}/>}
            </MediaSlideHolder>)
        })}
    </Carousel>)
}