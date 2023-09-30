import React,{useEffect, useState} from 'react'
import Userlayout from '../../reuseables/Userlayout'
import WalletCard from '../../reuseables/walletCard'
import {styled} from 'styled-components'
import Kyc from '../../reuseables/Kyc'
import { Carousel } from '@arco-design/web-react';
import { useQuery } from '@tanstack/react-query'
import { GetDetails } from '../../services/Dashboard'
import AmountFormatter from '../../reuseables/AmountFormatter'
import {countryObjectsArray} from "../../../config/CountryCodes"

function Wallet() {

  const Userdata = JSON.parse(localStorage?.getItem("userDetails"))
  
  const [getWallet,setWallet] = useState(null)

  const { data:newDetails,isLoading:newDetailsloading,refetch:refetchnewDetails} = useQuery({
    queryKey: [Userdata?.data?.user?.userId],
    queryFn: GetDetails,
    onSuccess:(data) => {
      setWallet(data?.data?.wallet)
    },   // refetchInterval: 10000, // fetch data every 10 seconds
    onError: (err) => {
      // navigate("/")
    //   setMessage(err.response.data.detail || err.message);
    //   setOpen(true);
    },
  });
  


  return (
      <Userlayout current="wallet" useBack={true}>
        <Content>
          <div  className='cont' >
          {/* <WalletCard amount="30000"/>  */}
          <Carousel
      autoPlay
      animation='card'
      showArrow='line'
      indicatorPosition='never'
      style={{ width: '100%', color:"#000" }}
    >
      {getWallet?.map((d, index) => (
       
        <div
          key={index}
        >
          
                <WalletCard countryName={countryObjectsArray(d?.country?.name)} currency={d?.country?.name + " " + d?.country?.currencyCode} amount={<AmountFormatter currency={d?.country?.currencyCode} value={d?.balance} /> }/> 
        </div>
      ))}
    </Carousel>

          </div>

        {/* <Kyc/> */}
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