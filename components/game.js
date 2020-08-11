import { Card, Image, Icon, Input, Button} from "semantic-ui-react"
import React, { Component, useState } from 'react'
import ReactMarkdown  from 'react-markdown'
import { AddToWishlist } from '../utils/fb_init'


function  Game (prop){
        const [email, setEmail] = useState("");
        const onWishlisted = async (event) =>{

            const regexAllowedEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if(!email.match(regexAllowedEmail)){
                alert("Wrong Email Format\nPlease Try AGAIN!");
                return;
            }
            setEmail("");
            alert(`Thanks!\nNow your email: ${email}. Was submitted for wishlist.\nYou'll Get a notification as soon as game will be published!`);
            await AddToWishlist(prop.slug, email);
        }

        return (
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
            <input onChange={(event)=>setEmail(event.target.value)} value={email}/>
            </Input>
            <Button animated onClick={onWishlisted}>
            <Button.Content visible>Wishlist</Button.Content>
            <Button.Content hidden>
                <Icon name='bell' />
            </Button.Content>
            </Button>

            <span style={{marginLeft:'20px', marginRight: "20px"}}>
            <Button onClick = {()=>window.location.href = `game/${prop.slug}`}animated="fade">
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
        </Card>)
}

export default Game