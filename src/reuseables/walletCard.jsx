import React from 'react'
import styled from 'styled-components'
import card from "../images/card.svg"
import ReactCountryFlag from 'react-country-flag'
import { Carousel } from '@arco-design/web-react';

function walletCard({ country, currency }) {
  const flagSrc = `https://www.countryflags.io/${'us'}/shiny/64.png`;

  return (
      <Card>
         <div className="card">
      <img src={flagSrc} alt={`${country} Flag`} className="flag" />
      <div className="content">
        <div className="currency">{currency || "ee"}</div>
        <div className="wallet">
          <i className="fas fa-wallet"></i>
        </div>
      </div>
    </div>
       </Card>
  )
}

const Card = styled.div`
/* Card.css */
.card {
  width: 200px;
  height: 150px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.flag {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.currency {
  font-size: 24px;
  font-weight: bold;
  color: #333;
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