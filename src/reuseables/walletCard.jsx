import React from 'react'
import styled from 'styled-components'
import card from "../images/card.svg"
import wallet from "../images/Wallet.svg"
import ReactCountryFlag from 'react-country-flag'
import { Carousel } from '@arco-design/web-react';
import CountryFlag from 'react-country-flag';


function walletCard({ countryName, currency,amount }) {
 
  return (
      <Card>
         <div className="card">
          <div className='divcontent' style={{backgroundImage:`url(${card})`}}> 
        <div className="content">
          <div className='side1'>
            <div className='side1content'>
            <CountryFlag className='flag' countryCode={countryName} svg />
            <div className="currency">{currency || "ee"}</div>

            </div>

          <div className="wallet">
            <p className="fas fa-wallet">{amount}</p>
          </div>

          </div>
          <div className='side2'>
                <img src={wallet}/>
          </div>
          
        </div>

          </div>
    </div>
       </Card>
  )
}

const Card = styled.div`
.divcontent{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.flag{
 font-size: 30px;
 border-radius: 50%;
  
}
/* Card.css */
.card {
  width: 300px;
  height: 150px;
  /* background-color: #fff; */
  border-radius: 10px;
  /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 15px; */
}

.flag {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* flex-direction: column;
  align-items: center; */
  gap: 10px;
  height: 100%;

  .side1{
    padding: 20px;
    .side1content{
      display: flex;
      gap: 10px;
      align-items: center;

    }
    p{
      font-size: xx-large;
      color: #fff;
    }

  }


  .side2{
    display: inline-flex;
    height: 100%;
    align-items: end;
  }


}

.currency {
  font-size: 10px;
  font-weight: bold;
  color: #fff;
}

.wallet {
  font-size: 36px;
  color: #00a85a; /* Wallet icon color */
}


@media screen and (max-width:40em) {
  width: 100%;
  height: 100%;
}
/* width: 100%;  */

`

export default walletCard