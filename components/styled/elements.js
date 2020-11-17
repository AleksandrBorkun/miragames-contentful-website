import styled from 'styled-components'

export const Title = styled.h1
`
width:100%;
text-align: center;
`


export const H1 = styled.h1``

export const H2 = styled.h2`
    ${({center})=>center &&
    `text-align: center`
} 
`