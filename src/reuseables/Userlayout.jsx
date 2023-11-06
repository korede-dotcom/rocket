/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { styled } from "styled-components";
import Header from "./Header";
import Nav from "./Nav";

function Userlayout({ children, current, useBack }) {
  return (
    <Layout>
      <Header current={current} useBack={useBack} />
      <div className="cont">{children}</div>
      {window.location.pathname !== "/upload" && <Nav />}
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
  background: #f2f2f2;
  padding: 0;
  margin: 0;

  .cont {
    height: 85vh;
    overflow-y: scroll;
  }
`;

export default Userlayout;
