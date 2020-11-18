import { Component } from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import { SaveDonateTransiction } from '../utils/fb_init';

import Router from 'next/router'

import styled from 'styled-components'
import { Input, Icon, Button} from 'semantic-ui-react';

const WishlistButtonWrapper = styled.div`
@media screen and (max-width: 600px){
  display: flex;
  flex-direction: column;
}
`

const SocialMediaHolder = styled.div`
display: flex;
justify-content: space-between;
margin: 20px;

@media screen and (max-width: 600px){
  flex-direction: column;
  height: 130px;
}
`

const CLIENT_ID = "AY8Alnpc8yHHSJZ1rIBRbFw7JN7t6FOrmgQ0Ieqj6OHs6u1ltAAJSDlKhwJi5B3DJ9Mxi-NvRErr9qlL";


export const DonateButton = (prop)=> {

  const sendRecieptToFirebase = async(details, data) => {
    alert("Transaction completed by " + details.payer.name.given_name);
    // OPTIONAL: Call your server to save the transaction
    await SaveDonateTransiction(prop.slug, data.orderID).promise().then(()=>{console.log('done')});
  } 
  return (
    <PayPalButton
      amount={prop.donation}
      options={{clientId : CLIENT_ID}}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={sendRecieptToFirebase}
    />
  );
}

export const WishListButton = ()=> ( 
        <WishlistButtonWrapper>
          <Input style={{ verticalAlign: "middle" }} iconPosition='left' placeholder='Email'>
            <Icon name='at' />
            <input/>
          </Input>
          <Button animated>
            <Button.Content visible>Wishlist</Button.Content>
            <Button.Content hidden>
            <Icon name='bell' />
            </Button.Content>
          </Button>
        </WishlistButtonWrapper>
)

export const SocialMediaButtonList = ()=> {
  const socialMediaConfig = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/mira.games.studio'
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/Shu_rix'
    },    
    {
      name: 'instagram',
      link: 'https://www.instagram.com/mira.games.studio/'
    }
  ]
  return(
  <SocialMediaHolder>
      {socialMediaConfig.map(({name, link}) => (    
      <Button key={name} color={name} onClick={()=>window.open(link, '_ blank')}>
        <Icon name={name} /> {name[0].toUpperCase() + name.substring(1)}
      </Button>
    ))}
  </SocialMediaHolder>
)}