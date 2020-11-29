import styled from 'styled-components'
import { H2, H3 } from './styled/elements'

const QouteWrapper = styled.div`
    ${({bgColor})=>`
    background-color: ${bgColor};
    `}
    display: flex;
    justify-content: center;
    min-height: 500px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px 0;
`

export const Quote = ({title, author, color, size, bgColor}) =>{
    return (
    <QouteWrapper bgColor={bgColor}>
        <H2 color={color} size={size}> {title}</H2>
        <H3> {author}</H3>
    </QouteWrapper>
    )
}