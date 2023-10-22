/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import CountryFlag from 'react-country-flag';
import { styled } from 'styled-components'
import { useQuery } from '@tanstack/react-query';
import { countries } from '../services/Auth';
import {countryObjectsArray} from "../../config/CountryCodes"
const CountryDropdown = ({ value, onChange,style,defaultValue}) => {
  const [cList,setClist] = useState([])
  const { data,isLoading,refetch} = useQuery({
    queryKey: [],
    queryFn: countries,
    onSuccess:(data) => {
      const mapped = data?.data?.map(d => {
        return {
          value:d?.currencyCode,
          label:d?.name,
        }
      })
    setClist
    
    },
    // refetchInterval: 10000, // fetch data every 10 seconds
    onError: (err) => {
    //   setMessage(err.response.data.detail || err.message);
    //   setOpen(true);
    console.log(err)
    },
  })


  
  const options =  countryList().getData();
  console.log("🚀 ~ file: CountryList.jsx:13 ~ CountryDropdown ~ options:", options)
  // const newOptions = 
 const Userdata =  JSON.parse(localStorage.getItem("userDetails"))



  const wallets = Userdata?.data?.user?.wallet
  const optionsmap = wallets?.map(d => {
    return {
      value:countryObjectsArray(d?.country?.name),
      label:d?.country?.name
    }
  })
  const filteredUsers = wallets?.country?.filter(cname => optionsmap.includes(cname));




  return (
    <CountyCont>

    <Select
      value={value}
      onChange={onChange}
      options={optionsmap}
      defaultValue={defaultValue}
      getOptionLabel={(country) => (
        <div className='dropdown' style={{style} || {display:"inline-flex",gap:"2px",alignItems:"center", borderColor: '#dadada !important'}}>
          <CountryFlag className='flag' countryCode={country.value} svg /> &nbsp;
         <span className='countryName'  >{country.label}</span> 
        </div>
      )}
      styles={{
        option: (styles) => ({
          ...styles,
          display: 'flex',
          alignItems: 'center',
          color:"#000",
          fontSize:"30px", 
        //   border:"0.1px solid #d8d8d8",
        //   backgroundColor:"#e4e4e4",
        //   borerRadius:"18px"
        }),
        menuList:(styles) => ({
            ...styles,
            display: 'flex',
            backgroundColor:"#FFF",
            flexDirection:"column",
            // gap:"10px",
            color:"#FFF",
            borerRadius:"18px",
            alignItems: 'center',
          
        }),
        
        singleValue: (styles) => ({
            ...styles,
            display: 'flex',
            color:"#000",
            alignItems: 'center',
            '> svg': {
              marginRight: '8px',
              borderRadius: '50%',
            },
          }),
         
      }}
      
    />
  </CountyCont>
  );

};


const CountyCont = styled.div`



    .flag{

        @media screen and (max-width: 40em){
            font-size: 20px;
            
        }
        font-size: 30px;
        border-radius: 50% !important;
        margin-top: 5px;
        /* border: 1px solid rgba(5, 142, 78, 1); */
    }
    .countryName{
        /* font-weight: bold !important ; */

    }
    .dropdown:focus{
        color: black;
    }

`

export default CountryDropdown;
