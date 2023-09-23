/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Input, Link, Space } from '@arco-design/web-react';
import Logo from '../images/logo.svg'
import Left from '../images/left.svg'
import { InputStyle } from "../styles/Input";
import { CenterElement } from "../styles/CenterEle";
import { Checkbox } from '@arco-design/web-react';
import Btn from '../reuseables/Btn';
import { Switch, Timeline, Typography } from '@arco-design/web-react';
import { DatePicker } from '@arco-design/web-react';
import { Select } from '@arco-design/web-react';
import { userLogin } from "../services/Auth";
import { useMutation } from "@tanstack/react-query";
import { useSessionStorage } from '../hooks/useSessionStorage'
import { useNavigate } from 'react-router-dom';
import { Spin, Modal } from '@arco-design/web-react';
import axios from 'axios';
import { UserTestData } from "../../config/Test"
import Modals from '../reuseables/Modals';
import { ToastContainer, toast } from 'react-toastify';
import { Axios } from '../utils/Axios';


const Option = Select.Option;
const TextArea = Input.TextArea;

const TimelineItem = Timeline.Item;




function Login() {

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": "shaphanayenajeyi@gmail.com",
  "password": "fileopen",
  "deviceId": "Tets",
  "source": "Web"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  maxBodyLength: Infinity,
  body: raw,
  redirect: 'follow'
};

fetch("https://moneybusiness.tm-dev.xyz/moneybusiness/auth", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



    const navigate = useNavigate();
    const [err, seterr] = useState(null)
    const [loginDetails, setloginDetails] = useState({
        username: "",
        password: "",
        deviceId: "Tets",
        source: "Web"
    })
    console.log("🚀 ~ file: Login.jsx:31 ~ Login ~ loginDetails:", loginDetails)

    const handleLogin = async () => {
        mutate(loginDetails)

        const result = await Axios.post("moneybusiness/auth", {
            method: 'POST',
            body: JSON.stringify(loginDetails),
          });
        console.log("🚀 ~ file: Login.jsx:55 ~ handleLogin ~ result:", result)
    }

    const handleChange = (value, i) => {
        const { name } = i.target

        setloginDetails((prev) => {
            return { ...prev, [name]: value }
        })

    }
    const { setSessionStorage } = useSessionStorage("__appUser")

    const { mutate, isLoading, isError } = useMutation({
        mutationFn: userLogin,
        onSuccess: (data) => {
            console.log("🚀 ~ file: Login.jsx:61 ~ Login ~ data:", data)
            if (!data.status) {
                seterr(data?.message)
                toast.error(data?.message)
            }
            // localStorage.setItem("userDetails",JSON.stringify(UserTestData))
            setSessionStorage({
                access_token: data.token,
            });
            //  navigate("/dashboard");
        },
        onError: (data) => {
            // localStorage.setItem("userDetails",JSON.stringify(UserTestData))
            // console.log(data.response.data.message)
            setTimeout(() => {
                //  seterr("")
            }, 2000)
            return
        }
    });

    return (
        <LoginCotainer>
            <div className='flex'>
                <div className='side1'>

                </div>
                <div className='side2'>

                    <Center>
                        <img src={Logo} />
                        <div className='logintext'>
                            <h1>Log in to your account</h1>
                            <p>Welcome back! Please enter your details.</p>
                        </div>
                        <div className='inputform'>
                            <div>
                                <span>Email</span>
                                <InputStyle >
                                    <Input onChange={handleChange} name='username' className="input" style={{ borderRadius: '8px;' }} placeholder='Enter your email' />
                                </InputStyle>
                            </div>
                            <div>
                                <span>Password</span>
                                {/* <InputStyle > */}
                                <Input.Password style={{ width: '100%' }} className="input" defaultValue='' onChange={handleChange} name='password' placeholder='Enter your password' />
                                {/* </InputStyle > */}
                            </div>
                            <div className='flexjustify'>
                                <Checkbox>Remember for 30 days</Checkbox>
                                <Link style={{ color: 'var(--primary-color)' }}>Forgot password</Link>
                            </div>
                            <div>
                                <Btn clicking={handleLogin} styles={{ width: '100%', background: 'var(--primary-color)', color: '#fff', borderRadius: '8px', padding: '0.8em' }}>
                                    {isLoading ? <Spin dot /> : "Sign In"}
                                </Btn>
                            </div>
                            <CenterElement>
                                <span>Don’t have an account?</span>
                                <Link href='/signup' style={{ color: 'var(--primary-color)' }}>Sign up</Link>
                            </CenterElement>
                        </div>

                       
                        <ToastContainer
                            position="top-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        {/* Same as */}
                        <ToastContainer />


                    </Center>


                </div>
            </div>
        </LoginCotainer>
    )
}


const LoginCotainer = styled.div`
   
    height: 100vh;
    overflow: hidden;

    .arco-spin-dot-list > div{
       background-color: #FFFFFF !important;
    }

    .input{
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

    .flexjustify{
        display: flex;
        justify-content: space-between;
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
            overflow-y: scroll;
        }
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

    .logintext{
        display: flex;

        flex-direction: column;
        h1 {
            margin-block:0 ;
        }
        p{
            color: var( --small-color-font);
        }
    }

    .inputform{
       display: flex;
       flex-direction: column;
       gap: 20px;
       width: 60%;

       color: #000;

       .arco-select-view{
        background: transparent;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid var(--gray-300, #D0D5DD);
       }

       
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

export default Login