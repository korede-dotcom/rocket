/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { styled } from 'styled-components'
import { Input, Link, Space } from '@arco-design/web-react';
import Logo from '../images/logo.svg'
import Left from '../images/left.svg'
import {InputStyle} from "../styles/Input";
import {CenterElement} from "../styles/CenterEle";
import { Checkbox } from '@arco-design/web-react';
import Btn from '../reuseables/Btn';
import { Switch, Timeline, Typography } from '@arco-design/web-react';
import { DatePicker } from '@arco-design/web-react';
import { Select} from '@arco-design/web-react';
import { useNavigate } from 'react-router-dom';
import {countries,cities,states,employment,profession} from "../services/Auth"
import {countries as testCountries,stateTest as testState,cityTest as cityTest,employment as employmentTest, profession as professionTest } from "../../config/Test"
import { useMutation,useQuery } from "@tanstack/react-query";
import axios from 'axios';
const Option = Select.Option;
const TextArea = Input.TextArea;


const TimelineItem = Timeline.Item;
function Register() {


    
    const handleChange = (value,i) => {
        const { name } = i.target
        
        setUser((prev) => {
            return {...prev, [name]:value}
         })
        }

    const [reverse, setReverse] = useState(false);
    const [step1, setstep1] = useState(true);
    const [step2, setstep2] = useState(false);
    const [step3, setstep3] = useState(false);
    const [selectedCountry, setselectedCountry] = useState("");
    const [SelectState, setSelectState] = useState("");
    const [SelectCity, setSelectCity] = useState();
    const [countryDetails, setCountryDetails] = useState();
    const [stateDetails, setStateDetails] = useState();
    const [gender, setGender] = useState();
    const [cityDetails, setCityDetails] = useState();
    // const [cityDetails, setCityDetails] = useState();
    
    const [user,setUser] = useState({
        "firstName": "",
        "surName": "",
        "email": "",
        "password": "",
        "dob": "",
        "gender": "",
        "phone": "",
        "address": "",
        "postcode": "",
        "countryId": 161,
        "stateId": 306,
        "cityId": undefined,
        "employmentStatusId": 1,
        "professionId": 5,
        "companyName": "",
        "onboardingSource": "Web",
        "agentId": 0
    })


    console.log("🚀 ~ file: Register.jsx:44 ~ Register ~ user:", user)



    const { data:countrylist,isLoading:countrylistloading,refetch:refetchcountrylist } = useQuery({
        queryKey: ["getCategories"],
        queryFn: countries,
        // refetchInterval: 10000, // fetch data every 10 seconds
        onError: (err) => {
        //   setMessage(err.response.data.detail || err.message);
        //   setOpen(true);
        console.log(err)
        },
      });

    const [Countries,setCountries] = useState(countrylist || testCountries.data)
    const navigate = useNavigate();

   
    const { data:statelist,isLoading:statelistloading,refetch:refetchstatelist } = useQuery({
    
    //   queryKey: [countryDetails?.id,0],
        queryFn: states(countryDetails?.id || 0 ,0),
        // refetchInterval: 10000, // fetch data every 10 seconds
        onError: (err) => {
        //   setMessage(err.response.data.detail || err.message);
        //   setOpen(true);
        },
    });
    
    const { data:citylist,isLoading:citylistloading,refetch:refetchcitylist } = useQuery({
    
    //   queryKey: [countryDetails?.id,0],
        queryFn: cities(countryDetails?.id,stateDetails?.id,0),
        // refetchInterval: 10000, // fetch data every 10 seconds
        onError: (err) => {
        //   setMessage(err.response.data.detail || err.message);
        //   setOpen(true);
        },
    });

    const { data:employmentlist,isLoading:employmentlistloading,refetch:refetchemploymentlist } = useQuery({
    
    //   queryKey: [countryDetails?.id,0],
        queryFn: employment,
        // refetchInterval: 10000, // fetch data every 10 seconds
        onError: (err) => {
        //   setMessage(err.response.data.detail || err.message);
        //   setOpen(true);
        },
    });

    const { data:professionlist,isLoading:professionlistloading,refetch:refetchprofessionlist } = useQuery({
    
    //   queryKey: [countryDetails?.id,0],
        queryFn: profession,
        // refetchInterval: 10000, // fetch data every 10 seconds
        onError: (err) => {
        //   setMessage(err.response.data.detail || err.message);
        //   setOpen(true);
        },
    });

    
    
    const [City,setCity] = useState(citylist || cityTest.data)
    const [State,setState] = useState(statelist || testState.data)
    const [Employment,setEmployment] = useState(employmentlist || employmentTest.data)
    const [Proffession,setProffession] = useState(professionlist || professionTest.data)


    // Function to navigate back
 
    const CountryOption = [...Countries.map(d => d.name)];
    const StateOption = [...State.map(d => d.name)]
    const EmploymentOption = [...Employment.map(d => d.name)]
    const ProffessionOption = [...Proffession.map(d => d.name)]
    const CityOption = [...City.map(d => d.name)]
  

    const handleSelectCountry = (e) => {
        setselectedCountry(e)
        const getCountryDetails = Countries.find(d => d.name === e);
        setCountryDetails(getCountryDetails && getCountryDetails)
        console.log("🚀 ~ file: Register.jsx:78 ~ handleSelectCountry ~ e:", getCountryDetails)
        
    }

    const handleSelectState = (e) => {
        setSelectState(e)
        const getStateDetails = State.find(d => d.name === e);
        setStateDetails(getStateDetails && getStateDetails)
    }
    const handleSelectCity = (e) => {
        setSelectCity(e)
        const getCityDetails = City.find(d => d.name === e);
        setCityDetails(getCityDetails && getCityDetails)
        setUser((prev) => {
            return {...prev, ['cityId']:getCityDetails.id}
         })
    }
   

    const handleStepThree = () => {
        setstep1(false)
        setstep2(false)
        setstep3(true)
    }
    const handleStepTwo = () => {
        setstep1(false)
        setstep2(false)
        setstep3(true)
    }
    const handleStepOne = () => {
        setstep1(false)
        setstep2(true)
    }

    const handleBackStepThree = () => {
        setstep3(false)
        setstep2(true)
    }
    const handleBackStepTwo = () => {
        setstep1(true)
        setstep2(false)
    }






  return (
    <LoginCotainer>
        <div className='flex'>
            <div className='side1'>
             
            </div>
            <div className='side2 fade-In'>
              
                {
                    step1 && (
                        <Center>
                        <div className='signup'>
                            <div className='signupcontent'>
                                <div className='navigation'>
                                    <Link href='/' style={{color:'var(--primary-color)',display:'flex',gap:'5px'}} >
                                        <img src={Left}/>
                                        <p>Back</p>
                                        </Link>
                                </div>
                                <div className='signuptext'>
                                    <span>Already have an account?</span>
                                    <Link href='/' style={{color:'var(--primary-color)'}}>Sign in</Link>
                                </div>
                            </div>
                            <br/>
                            <div className='timeline'>
                                <Timeline direction='horizontal' dotColor='var(--primary-color)' reverse={reverse}>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)'></TimelineItem>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)'></TimelineItem>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)'></TimelineItem>
                                </Timeline>
                            </div>
                        </div>
                        <div className='signupheadtext'>
                            <p>Step 1 of 3</p>  
                            <h1>What’s your email address?</h1>   
                            <p>Please enter your details.</p>  
                        </div>
        
                            <div className='inputform'>
                                <div>
                                    <span>Email</span>
                                    <InputStyle >
                                    <Input name='email' onChange={handleChange} className="input" style={{borderRadius:'8px;',width:'100%'}} placeholder='Enter your Email' />
                                    </InputStyle>
                                </div>
                               
                                <div>
                                    <span>Password</span>
                                    <br/>
                                    <Input.Password name="password" className="inputpass" style={{width:'100%'}}  placeholder='Enter your Password' />
                                    <br/>
                                </div>
                                <div>
                                    <span>Confirm Password</span>
                                    <br/>
                                    <Input.Password onChange={handleChange} name="password" className="inputpass" style={{width:'100%'}}  placeholder='Enter your Password' />
                                    <br/>
                                    <span className='smalltext'>Password must contain at least one uppercase letter, one special character, one number and must be 8 characters long.</span>
                                </div>
                                <div>
                                    <span>Referral Code</span>
                                    <Input className="inputpass" style={{}}  placeholder='Enter referral code' />
                                  
                                </div>
                               
                                <div>
                                    <Btn clicking={handleStepOne} disabled={false} o  styles={{width:'100%',background:'var(--primary-color)',color:'#fff',borderRadius:'8px',padding:'0.8em'}}>
                                        Continue
                                    </Btn>
                                </div>
                               
                            </div>
                    
                        </Center>
                    )
                }
               
                {
                    step2 && (
                        <Center>
                        <div className='signup'>
                            <div className='signupcontent'>
                                <div className='navigation'>
                                    <Link onClick={handleBackStepTwo} style={{color:'var(--primary-color)',display:'flex',gap:'5px'}} >
                                        <img src={Left}/>
                                        <p>Back</p>
                                        </Link>
                                </div>
                                <div className='signuptext'>
                                    <span>Already have an account?</span>
                                    <Link href='/' style={{color:'var(--primary-color)'}}>Sign in</Link>
                                </div>
                            </div>
                            <br/>
                            <div className='timeline'>
                                <Timeline direction='horizontal' dotColor='var(--primary-color)' reverse={reverse}>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)'  lineColor="var(--primary-color)"></TimelineItem>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)'></TimelineItem>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)'></TimelineItem>
                                </Timeline>
                            </div>
                        </div>
                        <div className='signupheadtext'>
                            <p>Step 2 of 3</p>  
                            <h1>Personal Information</h1>   
                            <p>Please enter your details.</p>  
                        </div>
        
                            <div className='inputform makescroll'>
                                <div>
                                    <span>First Name</span>
                                    {/* <InputStyle > */}
                                    <Input name='firstName' onChange={handleChange} className="input" style={{borderRadius:'8px;'}} placeholder='Enter your Frist name' />
                                    {/* </InputStyle> */}
                                </div>
                                <div>
                                    <span>Last Name</span>
                                    <InputStyle >
                                    <Input name='surName' onChange={handleChange}  className="input" style={{borderRadius:'8px;'}}  placeholder='Enter your Last Name' />
                                    </InputStyle>
                                </div>
                                <div>
                                    <span>Gender</span>
                                    {/* <InputStyle > */}
                                    <Select name="gender"  style={{height:"30px"}} onChange={(value) => {
                                        setGender(value)
                                        setUser((prev) => {
                                            return {...prev, ['gender']:value}
                                         })
                                        
                                        }} showSearch  value={gender && gender } placeholder='Please select your Gender'  allowClear>
                                    {gender}
                                        {["Male","Female"].map((option, index) => (
                                            <Option key={option} disabled={index === 3} value={option}>
                                            {option}
                                            </Option>
                                        ))}
                                    </Select>
                                    {/* </InputStyle> */}
                                </div>
                                <div>
                                    <span>Date of birth</span>
                                    {/* <InputStyle > */}
                                    
                                    <DatePicker onChange={(value) => {
                                         setUser((prev) => {
                                            return {...prev, ['dob']:value}
                                         })
                                    }}   locale="en" name="dob"  className="inputdate" style={{width:'100%',paddingLeft:"-10px"}} placeholder="pick a date"/>
                                    {/* </InputStyle> */}
                                </div>
                                <div>
                                    <span>Country</span>
                                    {/* <InputStyle > */}
                                    <Select name="countryId" style={{height:"30px"}} onChange={handleSelectCountry} showSearch  value={selectedCountry && selectedCountry } placeholder='Please select a Country'  allowClear>
                                    {selectedCountry}
                                        {CountryOption.map((option, index) => (
                                            <Option key={option} disabled={index === 3} value={option}>
                                            {option}
                                            </Option>
                                        ))}
                                    </Select>
                                    {/* </InputStyle> */}
                                </div>
                                <div>
                                    <span>State</span>
                                    {/* <InputStyle > */}
                                    <Select name="stateId" style={{height:"30px"}} onChange={handleSelectState} showSearch  value={SelectState && SelectState } placeholder='Please select a State'  allowClear>
                                    {SelectState}
                                        {StateOption.map((option, index) => (
                                            <Option key={option} disabled={index === 3} value={option}>
                                            {option}
                                            </Option>
                                        ))}
                                    </Select>
                                    {/* </InputStyle> */}
                                </div>
                                <div>
                                    <span>Mobile Number</span>
                                    <InputStyle >
                                    <Input name='phone' onChange={(value) => {
                                        
                                         setUser((prev) => {
                                             return {...prev, ['phone']:`${countryDetails?.telephoneCode}${value}`}
                                          })
                                    }}  addBefore={countryDetails?.telephoneCode}  className="input" style={{borderRadius:'8px;',height:"42px",padding:"5px"}} placeholder='+44 000-000-0000' />
                                    </InputStyle>
                                </div>
                                <div>
                                    <Btn clicking={handleStepTwo} styles={{width:'100%',background:'var(--primary-color)',color:'#fff',borderRadius:'8px',padding:'0.8em'}}>
                                        Continue
                                    </Btn>
                                </div>
                               
                            </div>
                    
                        </Center>
                    )
                }
                {
                    step3 && (
                        <Center >
                           
                        <div className='signup'>
                            <div className='signupcontent'>
                                <div className='navigation'>
                                    <Link onClick={handleBackStepThree} style={{color:'var(--primary-color)',display:'flex',gap:'5px'}} >
                                        <img src={Left}/>
                                        <p>Back</p>
                                        </Link>
                                </div>
                                <div className='signuptext'>
                                    <span>Already have an account?</span>
                                    <Link style={{color:'var(--primary-color)'}}>Sign in</Link>
                                </div>
                            </div>
                            <br/>
                            <div className='timeline'>
                                <Timeline direction='horizontal' dotColor='var(--primary-color)' reverse={reverse}>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)'  lineColor="var(--primary-color)"></TimelineItem>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)' lineColor="var(--primary-color)"></TimelineItem>
                                    <TimelineItem className="lines" dotColor='var(--primary-color)' lineColor="var(--primary-color)"></TimelineItem>
                                </Timeline>
                            </div>
                        </div>
                        <div className='signupheadtext'>
                            <p>Step 3 of 3</p>  
                            <h1>Lastly, Your Address</h1>   
                            <p>Please enter your details.</p>  
                        </div>
                            <div className='inputform makescroll'>
                                
                                <div>
                                    <span>Postcode</span>
                                    <InputStyle >
                                    <Input name='postcode' onChange={handleChange}   className="input" style={{borderRadius:'8px;'}}  placeholder='Enter your Postcode' />
                                    </InputStyle>
                                </div>
                                <div>
                                    <span>House Number</span>
                                    <InputStyle >
                                    <Input name='phone' onChange={handleChange}  className="input" style={{borderRadius:'8px;'}}  placeholder='Enter your House No' />
                                    </InputStyle>
                                </div>
                                <div>
                                    <span>Address: 1</span>
                                    <InputStyle >
                                        <TextArea name='address' onChange={handleChange} className="textarea" placeholder='Please enter ...' style={{ minHeight: 64, background:'transparent'}} />
                                   
                                    </InputStyle>
                                  
                                </div>
                                <div>
                                    <span>Address: 2</span>
                                    <InputStyle >
                                        <TextArea name='address' onChange={handleChange} className="textarea" placeholder='Please enter ...' style={{ minHeight: 64, background:'transparent'}} />
                                    
                                    </InputStyle>
                                </div>
                                <div>
                                    <span>City</span>
                                
                                    <InputStyle >
                                        <Select  name='cityId' style={{height:"30px"}} onChange={handleSelectCity} showSearch  value={cityDetails?.name && cityDetails?.name } placeholder='Please select a Country'  allowClear>
                                            {CityOption.map((option, index) => (
                                            <Option key={option} disabled={index === 3} value={option}>
                                                {option}
                                            </Option>
                                            ))}
                                        </Select>
                                    </InputStyle>
                                </div>
                                
                                <div>
                                    <span>Employment Status</span>
                                    <InputStyle >
                                        <Select name="employmentStatusId" style={{height:"30px"}} onChange={handleSelectCountry} showSearch  value={selectedCountry && selectedCountry } placeholder='Please select a Country'  allowClear>
                                            {EmploymentOption.map((option, index) => (
                                            <Option key={option} disabled={index === 3} value={option}>
                                                {option}
                                            </Option>
                                            ))}
                                        </Select>
                                    </InputStyle>
                                    
                                </div>          
                                <div>
                                    <span>Profession</span>
                                    <InputStyle >
                                    <Select name="professionId" placeholder='Select Proffession' style={{borderRadius:'8px;',height:"20px",background:"none"}}   allowClear showSearch>
                                        {ProffessionOption.map((option, index) => (
                                        <Option key={option} disabled={index === 3} value={option}>
                                            {option}
                                        </Option>
                                        ))}
                                    </Select>
                                    </InputStyle>
                                </div>
                                <div>
                                    <span>Company Name</span>
                                    <InputStyle >
                                    <Input name='companyName' onChange={handleChange} className="input" style={{borderRadius:'8px;'}}  placeholder='Enter your Last Name' />
                                    </InputStyle>
                                </div>
                                <div>
                                    <Btn clicking={handleStepThree} styles={{width:'100%',background:'var(--primary-color)',color:'#fff',borderRadius:'8px',padding:'0.8em'}}>
                                        All Set Submit
                                    </Btn>
                                </div> 
                               
                            </div>
                        </Center>
                    )
                }
             
            </div>
        </div>
    </LoginCotainer>
  )
}


const LoginCotainer = styled.div`
   
    height: 100vh;
    overflow: hidden;


 

    .input{
        padding: 0.7em;
        border-radius: 8px;
        outline: none;
        border: 0.1px solid var(--gray-300, #D0D5DD);
        background: #FFFFFF;

       }
    .inputpass{
        margin: 0;
        padding: 0.7em;
        border-radius: 8px;
        outline: none;
        border: 0.1px solid var(--gray-300, #D0D5DD);
        background: #FFFFFF;

       }
    .inputdate{
        padding: 1.3rem;
        border-radius: 8px;
        outline: none;
        border: 1px solid var(--gray-300, #D0D5DD);
        background: #FFFFFF;

       }
   
    .flex{
        display: flex;
        overflow: hidden;
        height: 100%;
       

        @media screen and (max-width: 40em) {

            .side1 {
                display: none;
            }
            .side2{
            background: #FCFCFC;
            width: 100%;
            flex: 1;
        }

        }

        .side1{
            width: 50%;
            height: 100%;
            background: var(--Primary-Colour, #00A85A);
        }
        .side2{
            background: #FCFCFC;
            width: 50%;
            height: 100%;
            overflow-y: scroll;


            .makescroll{
                height: 65%;
       
                overflow-y: scroll;
                >::-webkit-scrollbar{
                    display: none;
                }
            }
        }
    }
    .show{
        display: initial;
    }
    .hide{
        display: none;
    }

`

const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width:100%;
    gap: 10px;
    overflow-x: hidden;
    

    @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

    .logintext{
        display: flex;

        flex-direction: column;
        h1 {
            margin-block:0 ;
        }
        p{
            color: var(--small-color-font);
        }
    }

    .inputpass {
        /* background-color: red !important;  */
    }
    input[type="password"]{
        padding: 0;
        background-color: #FFFFFF;
    }
    .arco-input-password{
        width: 95%;
    }
    .arco-input-group{
        background-color: #FFFFFF;
        z-index: 1;
    }

    .inputform{
       display: flex;
       flex-direction: column;
       gap: 20px;
       width: 60%;

       .arco-select-view{
        background: #FFFFFF;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid var(--gray-300, #D0D5DD);
       }

       .phonenum {
  /* position: relative; */
  /* margin-top: -5px; */

}

       
    }


    .signupheadtext{

       width:60%;

       p{
        margin: 0 0;
       }

    }
    .signup{
        width: 60%;


        .signupcontent{
            display: flex;
            justify-content: space-between;

            width: 100%;

            .navigation{
                flex: 1;
            }
        }

        .signuptext{
            width: 100%;
            display: inline-flex;
            justify-content: flex-end;
            flex: 1;
            font-size: 12px;
            align-items: center;
        }

     

        .timeline{
            /* border: 1px solid red; */

            width: 147%;
            .arco-timeline .arco-timeline-left{
                width: 100%;
            }
            .lines{
                width: 100%;
                /* width: 500px; */
            }
        }
    
       
    }

`

export default Register