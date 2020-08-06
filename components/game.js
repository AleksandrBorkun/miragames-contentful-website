import { Card, Image, Icon, Input, Button} from "semantic-ui-react"
import React, { Component } from 'react'
import ReactMarkdown  from 'react-markdown'

const Game = (prop) => (
        <Card fluid >
        <Image src={prop.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{prop.title}</Card.Header>
            <Card.Meta>
            <span className='date'>Expected Release Date {prop.releaseDate.split('T')[0]}</span>
            </Card.Meta>
            <Card.Description>
                <ReactMarkdown source={prop.desc}/>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
            <Icon name='user' />
            22 wishlisted
            </a>

            

            <div>
            <Input style={{ verticalAlign: "middle" }} iconPosition='left' placeholder='Email'>
            <Icon name='at' />
            <input onChange={(event)=>console.log(event.target.value)}/>
            </Input>
            <Button animated>
            <Button.Content visible>Wishlist</Button.Content>
            <Button.Content hidden>
                <Icon name='bell' />
            </Button.Content>
            </Button>

            <span style={{marginLeft:'20px', marginRight: "20px"}}>
            <Button onClick = {()=>window.location.href = `${prop.slug}`}animated="fade">
            <Button.Content visible>Show More!</Button.Content>
            <Button.Content hidden>
                <Icon style={{ verticalAlign: "middle" , marginBottom: "10px"}} name='eye' size="big" />
            </Button.Content>
            </Button>
            </span>

            <span style={{float:'right'}}>
            <a style = { { position: "absolute", bottom: "50px"}}>
            <Icon name='money' />
            1,300.05 contributed
            </a>
            <Input style={{ verticalAlign: "middle" }} iconPosition='left' placeholder='Set Your Price'>
            <Icon name='dollar sign' />
            <input onChange={(event)=>console.log(event.target.value)}/>
            </Input>
            <Button animated="fade">
            <Button.Content visible>Buy Cofee For Devs</Button.Content>
            <Button.Content hidden>
                <Icon style={{ verticalAlign: "middle" }} name='coffee' size="big" />
            </Button.Content>
            </Button>
            </span>
            </div>
        </Card.Content>
        </Card>
  )

export default Game