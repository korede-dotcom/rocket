/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React, { useState,useEffect } from 'react'
import Userlayout from '../../reuseables/Userlayout';
import {styled} from 'styled-components';
import { Avatar, Typography } from '@arco-design/web-react';
import Checktrnx from "../../images/checktnx.svg"
import { useMutation,useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';
import { Tranx } from '../../services/Dashboard';

function TransactionDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Access the 'id' query parameter
    const id = queryParams.get('id');
    const Userdata = JSON.parse(localStorage.getItem("userDetails"));
    const [transactionList, setTransactionList] = useState(null);

    const { data: nameEnq, isLoading: nameEnqLoading, refetch: refetchNameEnq } = useQuery({
        queryKey: [Userdata?.data?.user?.userId],
        queryFn: Tranx,
        onSuccess: (data) => {
            setTransactionList(data?.data?.find(d => id.toString() === d?.sn?.toString()));
        },
        // refetchInterval: 10000, // fetch data every 10 seconds
        onError: (err) => {
            // Handle error logic
            console.error(err);
        },
    });

    // useEffect to run when the component mounts
    useEffect(() => {
        // Fetch data when the component mounts or 'id' changes
        refetchNameEnq();
    }, [id, refetchNameEnq]);

    if (nameEnqLoading) {
        return <div>Loading...</div>;
    }

    return ( 
    <Userlayout current="Transactions Details" useBack={true}>
        
        <Content>
           
            <div className='cont'>
            <Header>
                <p>{transactionList?.collectionDate}</p>

                <img src={Checktrnx}/>
                <p>Transaction {transactionList?.paymentStatus}</p>
                <small>{transactionList?.sn}</small>
                <small>{transactionList?.paymentDate}</small>
            </Header>
            <Details>
                <h3 className='detailsinfo'>Personal Details</h3>
                <div className='detailscont'>
                    <div className='details'>
                    <h5>Beneficiary Name</h5>
                    <p>{transactionList?.beneficiaryName}</p>
                    </div>
                    <div className='details'>
                    <h5>beneficiary Country</h5>
                    <p>{transactionList?.beneficiaryCountry}</p>
                    </div>
                    <div className='details'>
                    <h5>Sender Name</h5>
                    <p>{transactionList?.senderName}</p>
                    </div>
                    <div className='details'>
                    <h5>Mobile number</h5>
                    <p>{transactionList?.beneficiaryPhone}</p>
                    </div>
                    <div className='details'>
                    <h5>Collection Provider</h5>
                    <p>{transactionList?.collectionProvider}</p>
                    </div>
                    <div className='details'>
                    <h5>payment Type</h5>
                    <p>{transactionList?.paymentType}</p>
                    </div>
                    <div className='details'>
                    <h5>paymentRef</h5>
                    <p>{transactionList?.paymentRef}</p>
                    </div>
                    <div className='details'>
                    <h5>transaction Source</h5>
                    <p>{transactionList?.transactionSource}</p>
                    </div>
                </div>
                
                <h3 className='detailsinfo'>Bank Details</h3>
                <div className='detailscont'>
                    <div className='details'>
                    <h5>AccontName</h5>
                    <p>Bada Sulaimon</p>
                    </div>
                    <div className='details'>
                    <h5>AccontNumber</h5>
                    <p>000153835252</p>
                    </div>
                    <div className='details'>
                    <h5>Bank Name</h5>
                    <p>Unity Bank</p>
                    </div>
                    <div className='details'>
                    <h5>RefrenceNo</h5>
                    <p>555525 
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_382_1718)">
                            <path d="M16.667 7.49935H9.16699C8.24652 7.49935 7.50033 8.24554 7.50033 9.16602V16.666C7.50033 17.5865 8.24652 18.3327 9.16699 18.3327H16.667C17.5875 18.3327 18.3337 17.5865 18.3337 16.666V9.16602C18.3337 8.24554 17.5875 7.49935 16.667 7.49935Z" fill="#667085"/>
                            <path d="M4.98832 12.0112C4.54629 12.0112 3 12.0112 2.15515 12.0112C1.84259 11.6986 1.66699 11.2747 1.66699 10.8327V3.33268C1.66699 2.89065 1.84259 2.46673 2.15515 2.15417C2.46771 1.84161 2.89163 1.66602 3.33366 1.66602H10.8337C11.2757 1.66602 11.6996 1.84161 12.0122 2.15417C12.3247 2.46673 12.5003 2.89065 12.5003 3.33268V4.16602M9.16699 7.49935H16.667C17.5875 7.49935 18.3337 8.24554 18.3337 9.16602V16.666C18.3337 17.5865 17.5875 18.3327 16.667 18.3327H9.16699C8.24652 18.3327 7.50033 17.5865 7.50033 16.666V9.16602C7.50033 8.24554 8.24652 7.49935 9.16699 7.49935Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_382_1718">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </span>
                    </p>
                    </div>
                
                </div>

                {/* <div className='actionbtn'>
                     <button>Upload Id</button>
                     <button>Send Money</button>
                </div> */}


            </Details>
            </div>
        </Content>
    </Userlayout>
  )
}

const Content = styled.div`

width: 30vw;
    /* background-color: #fff; */
  padding-inline: 1em;
  margin: 0 auto;
  height: 100%; 
  overflow: hidden;

 

  @media screen and (max-width:40em){
    width: 100%;
  }

    .cont{
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 10px;
        /* width: 30vw;
        border: 1px solid green;
         margin: 0 auto; */

    }

`

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding-block: 10px; */
    gap: 10px;
    height: 35%;
    
    .av{
        background: rgba(0, 168, 90, 1);
        padding: 10px;
    }

    p{
        font-weight: 500;
        font-size: 18px;

    }

`

const Details = styled.div`
    height: 85%;
    overflow-y: scroll;

   display: flex;
   flex-direction: column;
   gap: 10px;

   .actionbtn{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 10px;
          

            button{
                padding: 15px 35px;
                border: 0.1px solid rgba(90, 99, 118, 1);
                border-radius: 4px;


                @media screen  and (max-width:40em) {
                        margin-bottom: -10px;
                }
                
            }
            button:nth-of-type(2){
       background: rgba(0, 168, 90, 1);
            }
            button:nth-of-type(1){
       background: #FFF;
       color: rgba(90, 99, 118, 1);
            }
        }

    
    .detailscont{
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 1em;

        .detailsinfo{
            color: rgba(51, 59, 74, 1);
        }
        
              

        .details{
            padding: 10px 10px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(233, 237, 245, 1);

            &:last-child{
                border-bottom: none;
            }

            

            h5{
                color: rgba(102, 112, 133, 1);
                font-weight: 400;
                font-size: 16px;
                
            }
            p{
                font-weight: 450;
                font-size: 14px;
            }
        }
      
        

    }
`

export default TransactionDetails