import { Card, Image, Icon, Input, Button, Grid, GridColumn, Checkbox} from "semantic-ui-react"
import React, { Component, useState } from 'react'
import ReactMarkdown  from 'react-markdown'
import { AddToWishlist } from '../utils/fb_init'
import DonateButton from "./donateButton";


function  Game (prop){
        const [email, setEmail] = useState("");
        const [donation, setDonation] = useState("");
        const [isEmailPresent, setCheckboxVisability] = useState(false);
        const [isChecked, setDecision] = useState(false);
        

        const onEmailChanged = async (event) =>{
            setEmail(event.target.value)
            if(email && email.length > 0){
                setCheckboxVisability(true);
            }
        }

        const onWishlisted = async (event) =>{

            const regexAllowedEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if(!email.match(regexAllowedEmail)){
                alert("Wrong Email Format\nPlease Try AGAIN!");
                return;
            }
            if(!isChecked){
                alert("Sorry, we cann't add your email wo wishlist without your permission :)");
                setCheckboxVisability(true);
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
            <h1>{prop.title}</h1>
            <Card.Meta>
            <span className='date'>Expected Release Date {prop.releaseDate.split('T')[0]}</span>
            </Card.Meta>
            <Card.Description>
                <ReactMarkdown source={prop.desc}/>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>

            

            <Grid columns={2}>
                <GridColumn>
            <Input style={{ verticalAlign: "middle" }} iconPosition='left' placeholder='Email'>
            <Icon name='at' />
            <input onChange={onEmailChanged} value={email}/>
            </Input>
            <Button animated onClick={onWishlisted}>
            <Button.Content visible>Wishlist</Button.Content>
            <Button.Content hidden>
                <Icon name='bell' />
            </Button.Content>
            </Button>
            {isEmailPresent ? <Checkbox checked={isChecked} onChange={(event)=>setDecision(!isChecked)}label={`I agree that my email ${email} will be stored and used to share info about ${prop.title} releases`} />: ""}


            </GridColumn>
            <GridColumn>
            {donation ? <div>
            <Icon name='money'/>
            {donation}$ will be contributed
            </div> : "" }
            <Input type="number" step="0.01" style={{ verticalAlign: "middle" }} iconPosition='left' placeholder='Set Your Price'>
            <Icon name='dollar sign' />
            <input onChange={(event)=>setDonation(event.target.value)}/>
            </Input>
            <DonateButton slug = {prop.slug} donation = {donation}/>
            </GridColumn>
            </Grid>
            <span style={{marginLeft:'20px', marginRight: "20px"}}>
            <Button onClick = {()=>window.location.href = `game/${prop.slug}`}animated="fade">
            <Button.Content visible>Show More!</Button.Content>
            <Button.Content hidden>
                <Icon style={{ verticalAlign: "middle" , marginBottom: "10px"}} name='eye' size="big" />
            </Button.Content>
            </Button>
            </span>
        </Card.Content>
        </Card>)
}

export default Game