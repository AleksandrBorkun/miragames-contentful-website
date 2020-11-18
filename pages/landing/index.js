import Head from "next/head"
import { Container, Image} from "semantic-ui-react"

import TopBar from "../../components/topbar"

import styled from 'styled-components'
import { BLUE, CORAL, CREAMY, RED, YELLOW } from "../../components/styled/colors"
import { SocialMediaButtonList, WishListButton } from "../../components/buttons"
import { useContext, useEffect, useState } from "react"
import { fetchEntry } from "../../utils/contentful.server"

const Background = styled.div`
    background-color: ${BLUE};
    width: 100%;
    height: 100vh;
`
const ContentWrapper = styled.div`

`

const FormWrapper = styled.div`
background-image: url("https://images.ctfassets.net/gmfhtos0wyy5/YvCul8Y8JgcUimflTGSna/fea15fac1357393bec887ce7733ddc20/LandindTest.svg");
background-color: ${CREAMY};  
background-position: left; 
min-height: 300px;
background-repeat: no-repeat;
background-size: cover;
border-radius: 10px;
border-bottom-style: solid;
@media screen and (min-width: 1000px){
    min-height: 500px;
}
`

const From = styled.div`
    padding: 20px;
    width: 60%;
    float:right;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 600px){
        width: 100%;
        text-align: right;
        justify-content: space-between;
    }
    @media screen and (min-width: 1000px){
        height: 500px;
    }
`

const Quote = styled.h2`
    
    color: ${CORAL};
    text-shadow: 2px 2px ${YELLOW};
`
const GameIcon = styled.img`
    border-radius: 10px;
    width: 100%;

`

const Description = styled.div`
position: absolute;
display: none;
`

const GameHolder = styled.div`
    max-width: 30%;
    margin: 30px 10px;    
    
    &:hover ${Description} {
        margin: 40px auto;
        display: block;
        text-align: left;
    }
`

const GameListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`



const GameList = ()=> {
    const imagesID = 'xyOvx3O275UVS0Pl5pD0t'
    const [images, setImages] = useState([])

    useEffect(()=>{
        async function getGamesImages(){
            const images = await fetchEntry(imagesID);
            setImages(images.items[0].fields.images)
            console.log(images.items[0].fields.images[0])
        }
        getGamesImages();
    }, [])

    return (
    <GameListWrapper>
        {console.log(images.length)}
        {images.length && images.map(({fields}) => (
            <GameHolder>
                <GameIcon src={fields.image.fields.file.url}/>
                <Description>{fields.description}</Description>
            </GameHolder>
        ))}

    </GameListWrapper>)
}

const Landing = ()=> (    
            <>
                <Head>
                    <title>Mira Games - Subscribe For The Favorite Games Created With Love</title>
                    <meta property="og:title" content="Mira Games - Subscribe For The Favorite Games Created With Love " />
                    <meta property="og:description" 
                        content="Welcome to Mira Games Page. Learn more about our games. Play it and create games with us. Subscribe for new releases of our games and lessons." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://miragamesstudio.com/" />
                    <meta property="og:image" content="https://images.ctfassets.net/gmfhtos0wyy5/1l32ZJBXeT7emjFg6QY6qA/9acd456888f9f089b48c3f6e5e6c98d4/photo_2020-08-06_09-42-08.jpg" />
                    <meta name="description" content={`Welcome to Mira Games Page. Learn more about our games. Play it and create games with us. Subscribe for new releases of our games and lessons.`} />
                    <meta name="google-site-verification" content="vecCZaVit4ZbfHtDB6Fm88WWHtOZ6Rs-zRCxEkYr2vs" />
                </Head>
                    <Background>
                        <Container>
                                <TopBar/>
                                <ContentWrapper>
                                    <FormWrapper>
                                        <From>
                                            <Quote>Play, Create, Subscribe</Quote>
                                            <WishListButton/>
                                        </From>
                                    </FormWrapper>
                                    <SocialMediaButtonList/>
                                    <GameList/>
                                </ContentWrapper>
                        </Container>
                    </Background>
            </>
)




export default Landing;






//YvCul8Y8JgcUimflTGSna

