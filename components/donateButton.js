import { Component } from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import { SaveDonateTransiction } from '../utils/fb_init';

const CLIENT_ID = "AY8Alnpc8yHHSJZ1rIBRbFw7JN7t6FOrmgQ0Ieqj6OHs6u1ltAAJSDlKhwJi5B3DJ9Mxi-NvRErr9qlL";


export default function DonateButton(prop) {

  const sendRecieptToFirebase = async(details, data) => {
    alert("Transaction completed by " + details.payer.name.given_name);
    // OPTIONAL: Call your server to save the transaction
    await SaveDonateTransiction(prop.slug, data.orderID).promise().then(()=>{console.log('dione')});
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