import { Card, Image, Icon, Input, Button, Grid, GridColumn, Checkbox} from "semantic-ui-react"
import React from 'react'
import ReactMarkdown  from 'react-markdown'

const BlogArticlesPreview = (props) => (
    <Card fluid >
    <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
        <span className='date'>Expected Release Date {props.publishDate.split('T')[0]}</span>
        </Card.Meta>
        <Card.Description>
            <Image src={props.cover} size={'large'} />
            <ReactMarkdown source={props.desc}/>
        </Card.Description>
    </Card.Content>
    <Card.Content extra>

        <span style={{marginLeft:'20px', marginRight: "20px"}}>
        <Button onClick = {()=>window.location.href = `blog/${props.slug}`}animated="fade">
        <Button.Content middle visible>Show More!</Button.Content>
        <Button.Content hidden>
            <Icon style={{ verticalAlign: "middle" , marginBottom: "10px"}} name='eye' size="big" />
        </Button.Content>
        </Button>
        </span>
    </Card.Content>
    </Card>)

export default BlogArticlesPreview;