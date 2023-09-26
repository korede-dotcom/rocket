import React from 'react'
import Userlayout from '../../reuseables/Userlayout'
import WalletCard from '../../reuseables/walletCard'
import {styled} from 'styled-components'
function Wallet() {
  return (
      <Userlayout current="wallet" useBack={true}>
        <Content>
        <WalletCard/>
        </Content>
      </Userlayout>
)}


const Content = styled.div`
    width: 30vw;
    /* background-color: #fff; */
  padding-inline: 1em;
  margin: 0 auto;
  height: 100%;
  @media screen and (max-width:40em) {
    width: 90%;
  }
  `

export default Wallet