import SumsubWebSdk from "@sumsub/websdk-react";
import {styled} from "styled-components";
import { useQuery } from "@tanstack/react-query";
import {GetToken} from "../services/Auth"
import { useState } from "react";

export default function Kyc() {
  const applicantEmail = "saheedalbert@gmail.com";
  const applicantPhone = "08089828929";
  const accessToken = "sbx:2JZXIvSCi1XN93DaGhpmmGGN.ivvZPn3kdY1QmPo6Zn4xaEmqpFzkukDW";
  const [accessT,setaccessT] = useState("")
  console.log("🚀 ~ file: Kyc.jsx:12 ~ Kyc ~ accessT:", accessT)

  const { data,isLoading,refetch} = useQuery({
    queryKey: ["8230145"],
    queryFn: GetToken,
    onSuccess:(data) => {
      setaccessT(data?.data?.token)
    },
    // refetchInterval: 10000, // fetch data every 10 seconds
    onError: (err) => {
    //   setMessage(err.response.data.detail || err.message);
    //   setOpen(true);
    console.log(err)
    },
  });






  return (
    <Content>
    <div className="app">
      <SumsubWebSdk 
        // testEnv={true}
        // baseUrl="test-api.sumsub.com"
        accessToken={"_act-sbx-a29d3b2e-8da1-4e77-b858-82fd32fd0b95"}
        pdateAccessToken={(callback) => {
            // Call your backend API to get a new access token
            // fetch('https://api.sumsub.com/resources/sdkIntegrations/websdkInit')
            //   .then((response) => response.json())
            //   .then((data) => {
            //     callback(data.accessToken); // Update the access token
            //   })
            //   .catch((error) => {
            //     console.error('Error fetching new access token:', error);
            //   });
          }}
        expirationHandler={(e) => {
            console.log(e)
        }}
        config={{
          lang: "en",
          email: applicantEmail,
          phone: applicantPhone,
          i18n: {
            document: {
              subTitles: {
                IDENTITY: "Upload a document that proves your identity"
              }
            }
          },
          onMessage: (type, payload) => {
            console.log("WebSDK onMessage", type, payload);
          },
          uiConf: {
            customCssStr:
              ":root {\n  --black: #000000;\n   --grey: #F5F5F5;\n  --grey-darker: #B2B2B2;\n  --border-color: #DBDBDB;\n}\n\np {\n  color: var(--black);\n  font-size: 16px;\n  line-height: 24px;\n}\n\nsection {\n  margin: 40px auto;\n}\n\ninput {\n  color: var(--black);\n  font-weight: 600;\n  outline: none;\n}\n\nsection.content {\n  background-color: var(--grey);\n  color: var(--black);\n  padding: 40px 40px 16px;\n  box-shadow: none;\n  border-radius: 6px;\n}\n\nbutton.submit,\nbutton.back {\n  text-transform: capitalize;\n  border-radius: 6px;\n  height: 48px;\n  padding: 0 30px;\n  font-size: 16px;\n  background-image: none !important;\n  transform: none !important;\n  box-shadow: none !important;\n  transition: all 0.2s linear;\n}\n\nbutton.submit {\n  min-width: 132px;\n  background: none;\n  background-color: var(--black);\n}\n\n.round-icon {\n  background-color: var(--black) !important;\n  background-image: none !important;\n}"
          },
          onError: (error) => {
            console.error("WebSDK onError", error);
          }
        }}
        options={{ addViewportTag: false, adaptIframeHeight: true }}
        onMessage={(type, payload) => {
          console.log("onMessage", type, payload);
        }}
        onError={(data) => console.log("onError", data)}
      />
    </div>
    </Content>
  );
}


const Content = styled.div`
    background-color: #fff;
    height: 100vh;
    overflow-y: scroll;

    .app{
        height: 100%;
        overflow-y: scroll;

        .body{
            height: 100vh;
            overflow-y: scroll;
        }
    }

`