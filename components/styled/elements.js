import styled from 'styled-components'

export const Title = styled.h1
`
font-family: Rockwell, Arial,Helvetica,sans-serif;
width:100%;
text-align: center;
font-weight: 100;
padding-top: 30px;
`

export const H1 = styled.h1`
font-family: Rockwell, Arial,Helvetica,sans-serif;
`

export const H2 = styled.h2`
    font-weight: 100;
    font-family: Rockwell, Arial,Helvetica,sans-serif;
    ${({size})=>`
    font-size: ${size}rem;`}
    ${({color})=> color && `
    color: ${color};`}
    ${({center})=>center &&
    `text-align: center;`
} 
`

export const H3 = styled.h3`
    margin: 2px;
    line-height: 2px;
    font-weight: 100;
    ${({center})=>center &&
    `text-align: center`
} 
`

export const CopyrightTxt = styled.h4`

font-family: Rockwell, Arial,Helvetica,sans-serif;
font-weight: 100;
width: 100%;
text-align: center;
margin: auto;

`