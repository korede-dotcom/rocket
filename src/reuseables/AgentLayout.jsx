/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import {styled} from 'styled-components'
import Header from './Header'
import Nav from './Nav'
import AgentNav from './AgentNav'


function Agentlayout({children,current,useBack}) {
  return (
   <Layout>
    <Header current={current} useBack={useBack}/>
    <div className='cont'>
        {children}
    </div>
    <AgentNav/>
   </Layout>
  )
}

const Layout = styled.div`
    height: 100vh;
    background: #F2F2F2;
    padding: 0;
    margin: 0;

    .cont{
        height: 85vh;
        overflow-y: scroll;
 
    }
;

`

export default Agentlayout