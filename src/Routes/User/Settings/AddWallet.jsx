import { useEffect, useState } from "react";
import Userlayout from "../../../reuseables/Userlayout";
import Centeredbox from "../../../reuseables/Centeredbox";
import Box from "../../../reuseables/Box";
import TextInput from "../../../styles/TextInput";
import CountryDropdown from "../../../reuseables/CountryList";
import Btn from "../../../reuseables/Btn";
import { useMutation } from "@tanstack/react-query";
import { createWallet } from "../../../services/Dashboard";

const AddWallet = () => {
  const [selectedCountry, setSelectedCountry] = useState();
  const userData = JSON.parse(localStorage.getItem("userDetails"));

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: createWallet,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      setTimeout(() => {
        //  seterr("")
      }, 2000);
      return;
    },
  });

  console.log(userData, selectedCountry, "addwallet");

  return (
    <Userlayout useBack={true} current="New Wallet">
      <Centeredbox>
        <Box radius="15px" width="100%" flexDirection="column">
          <div>
            <span>Name</span>
            <div
              style={{
                position: "relative",
              }}
            >
              <input
                name="name"
                type={"text"}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "inherit",
                  lineHeight: 1,
                  border: "1px solid #D0D5DD",
                  borderRadius: "6px",
                  color: "#000",
                  fontWeight: 300,
                }}
              />
            </div>
          </div>

          <br />
          <div>
            <span>Note</span>
            <div
              style={{
                position: "relative",
              }}
            >
              <input
                name="note"
                type={"text"}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "inherit",
                  lineHeight: 1,
                  border: "1px solid #D0D5DD",
                  borderRadius: "6px",
                  color: "#000",
                  fontWeight: 300,
                }}
              />
            </div>
          </div>

          <br />

          <div
            style={{
              borderRadius: "10px",
            }}
          >
            <label htmlFor="html">Country</label>

            <CountryDropdown
              value={selectedCountry}
              onChange={handleCountryChange}
            />
          </div>
        </Box>
        {/*  <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "10px",
            background: "rgba(0, 168, 90, 1)",
            border: "none",
            padding: "14px",
            marginTop: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button> */}

        <Btn
          clicking={() => {
            mutate({
              userId: userData?.data?.user?.userId,
              userWallet: {
                name: "My Naira Wallet",
                note: "My Naira Wallet",
                country: {
                  id: selectedCountry,
                },
              },
            });
          }}
          styles={{
            width: "100%",
          }}
        >
          Save Changes
        </Btn>
      </Centeredbox>
    </Userlayout>
  );
};

export default AddWallet;
