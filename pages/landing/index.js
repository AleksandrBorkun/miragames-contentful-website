import Head from "next/head"
import { Container, Icon, Image, Input,Button } from "semantic-ui-react"

import BaseLayout from '../../components/layout'
import TopBar from "../../components/topbar"

import styled from 'styled-components'
import { BLUE, CREAMY } from "../../components/styled/colors"
import { H1, H2 } from "../../components/styled/elements"

const Background = styled.div`
    background-color: ${BLUE};
    width: 100%;
`

const FormWrapper = styled.div`
background-image: url("https://images.ctfassets.net/gmfhtos0wyy5/YvCul8Y8JgcUimflTGSna/fea15fac1357393bec887ce7733ddc20/LandindTest.svg");
background-color: ${CREAMY};  
background-position: center; 
background-repeat: no-repeat;
background-size: cover; 
`

const From = styled.div`
    padding: 20px;
    text-align: right;
    width: 100%;
`

const Quote = styled.h2`

`


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
                                <FormWrapper>
                                    <Quote>Play, Create, Subscribe</Quote>
                                    {/* <Image src = 'https://images.ctfassets.net/gmfhtos0wyy5/YvCul8Y8JgcUimflTGSna/fea15fac1357393bec887ce7733ddc20/LandindTest.svg'/> */}
                                    <From>
                                        <Input style={{ verticalAlign: "middle" }} iconPosition='left' placeholder='Email'>
                                        <Icon name='at' />
                                        <input/>
                                        </Input>
                                        <Button animated>
                                        <Button.Content visible>Wishlist</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='bell' />
                                        </Button.Content>
                                        </Button>
                                    </From>

                                </FormWrapper>
                        </Container>
                    </Background>
            </>
)




export default Landing;






//YvCul8Y8JgcUimflTGSna

