import Head from "next/head"
import TopBar from "../components/topbar"

import styled from 'styled-components'
import { renderContentElement } from '../src/renderer'
import { DARK, YELLOW } from "../components/styled/colors"
import { SocialMediaButtonList, WishListButton } from "../components/buttons"
import { useEffect, useState } from "react"
import { fetchEntry } from "../src/contentful.server"
import { CopyrightTxt, H2 } from "../components/styled/elements"
import { FormWrapper } from "../components/cards"

const Background = styled.div`
    color: ${DARK};
    background-color: white;
    font-family: Arial,Helvetica,sans-serif;
    width: 100%;
    @media only screen and (max-width: 768px){
        overflow-x:hidden;
    }
`
const ContentWrapper = styled.div`
    margin: 0 4px;
`

const From = styled.div`
    padding: 20px;
    width: 100%;
    float:right;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Landing = () => {
    const MetaDesc = "Learn more about our mobile games for android and ios. Play it and create games with us. Learn more about game development with Unity 3D and C#. Subscribe for new releases of our games and lessons."
    const [content, setContent] = useState([])
    const LandingPageId = "3FbipyucUazwSXrtEHO03n";
    useEffect(() => {
        async function getPageContent() {
            const resp = await fetchEntry(LandingPageId);
            setContent(resp.items[0].fields.content)
        }
        getPageContent();
    }, []);

    return (
        <>
            <Head>
                <title>Mira Games - Subscribe For The Favorite Games Such as: Isolation, Racing Tanks, Desert Runner and more</title>
                <meta property="og:title" content="Mira Games - Subscribe For The Favorite Games Such as: Isolation, Racing Tanks, Desert Runner and more" />
                <meta property="og:description"
                    content={MetaDesc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://miragamesstudio.com/" />
                <meta property="og:image" content="https://images.ctfassets.net/gmfhtos0wyy5/1l32ZJBXeT7emjFg6QY6qA/9acd456888f9f089b48c3f6e5e6c98d4/photo_2020-08-06_09-42-08.jpg" />
                <meta name="description" content={MetaDesc} />
                <meta name="google-site-verification" content="vecCZaVit4ZbfHtDB6Fm88WWHtOZ6Rs-zRCxEkYr2vs" />
            </Head>
            <Background>
                <TopBar />
                <ContentWrapper>
                    {content.length && content.map(item => {
                        // console.log(item)
                        return renderContentElement(item);
                    })}
                    <FormWrapper>
                        <From>
                            <H2 center color={YELLOW} size={'3'}>SUBSCRIBE</H2>
                            <WishListButton />
                        </From>
                    </FormWrapper>
                    {/* <GameList /> */}
                </ContentWrapper>
                <SocialMediaButtonList />
                <CopyrightTxt>©2020 MiraGamesStudio.</CopyrightTxt>
            </Background>
        </>
    )
}

export default Landing;

