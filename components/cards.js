import styled from 'styled-components';
import {useState, useEffect} from 'react'

export const FormWrapper = styled.div`
height: 500px;
`

const GameIcon = styled.img`
    border-radius: 10px;
    width: 100%;  

    @media screen and (max-width: 600px){
        height:100%;
    }
`

const Description = styled.h3`
color: black;
text-shadow: 0.1px 0.1px ${YELLOW};
`

const GameWrapper = styled.div`
    max-width: 30%;
    margin: 30px 10px;    

    @media screen and (max-width: 600px){
        max-width: 100%;
        height:200px;
    }
`

const GameListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px){
        display: block;
    }
`


const RevealImageMobile = ({img, desc}) => {
    const [description, setDescription] = useState('')
    return description ? <Description onMouseOut={() => setDescription('')} >{description}</Description> :
                 <GameIcon src={img} onMouseEnter={() => setDescription(desc)} />
        
}

const GameList = () => {
    const imagesID = 'xyOvx3O275UVS0Pl5pD0t'
    const [images, setImages] = useState([])
    const [screenWidth, setWidth] = useState([])
    const [desc, setDescription] = useState('');

    useEffect(() => {
        async function getGamesImages() {
            const images = await fetchEntry(imagesID);
            setImages(images.items[0].fields.images)
        }
        setWidth(window.innerWidth)
        getGamesImages();
    }, []);

    return (<>
        <GameListWrapper>
            {images.length && images.map(({ fields }, key) => (
                <GameWrapper key ={key}>
                    {screenWidth < 600 ? 
                        <RevealImageMobile img = {fields.image.fields.file.url} desc = {fields.description}/>
                    :   <GameIcon key={key} src={fields.image.fields.file.url} onMouseOut={() => setDescription('')} onMouseEnter={() => setDescription(fields.description)} />}
                </GameWrapper>
            ))}
        </GameListWrapper>
            {desc && <Description>{desc}</Description>}
    </>)
}