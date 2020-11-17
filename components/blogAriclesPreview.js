import { Card, Image, Icon, Button} from "semantic-ui-react"
import React from 'react'
import ReactMarkdown  from 'react-markdown'

import {H2} from '../components/styled/elements'

const BlogArticlesPreview = (props) => (
    <Card fluid >
    <Card.Content>
        <H2 center>{props.title}</H2>
        <Card.Description>
            <ReactMarkdown source={props.desc}/>
            <Image src={props.cover} fluid/>
        </Card.Description>
        <Card.Meta  textAlign = {'right'}>
            <span className='date'>Published {props.publishDate.split('T')[0]}</span>
        </Card.Meta>
    </Card.Content>
    <Card.Content extra>

        <span style={{margin: '20px 40%'}}>
        <Button onClick = {()=>window.location.href = `blog/${props.slug}`}animated="fade">
        <Button.Content visible>Show More!</Button.Content>
        <Button.Content hidden>
            <Icon style={{ verticalAlign: "middle" , marginBottom: "10px"}} name='eye' size="big" />
        </Button.Content>
        </Button>
        </span>
    </Card.Content>
    </Card>)

export default BlogArticlesPreview;