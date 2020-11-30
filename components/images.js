import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import { fetchEntry } from '../src/contentful.server'
import { CREAMY } from './styled/colors'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageHolder = styled.div`
    display : flex;
    width: 100%;
    background-image: radial-gradient(white, ${CREAMY});
    justify-content: center;
`

const Image = styled.img`

`

const MediaSlideHolder = styled.div`
    display: flex;
    height: 500px;
    align-items: center;
    div{
        width: 100%
    }

`


export const ImageWithLogo =({image, description})=>(
<ImageHolder>
    <Image src={image.fields.file.url} alt={description}/>
</ImageHolder>)

export const MediaHolder = ({id}) => {
    const [images, setImages] = useState([])
    const opts = {
        height: 500-40,
        width: window.innerWidth,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
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