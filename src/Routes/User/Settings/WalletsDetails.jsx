/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Userlayout from "../../../reuseables/Userlayout";
import { styled } from "styled-components";
import { Input, Space } from "@arco-design/web-react";
import { Avatar, Typography } from "@arco-design/web-react";
import { Dropdown, Menu, Divider } from "@arco-design/web-react";
import {
  IconDown,
  IconMoreVertical,
  IconAlignCenter,
} from "@arco-design/web-react/icon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tranx } from "../../../services/Dashboard";
import { Transactions as Trnx } from "../../../../config/Test";
import { useQuery, useMutation } from "@tanstack/react-query";
import AmountFormatter from "../../../reuseables/AmountFormatter";
import wallet from "../../../assets/wallet.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import CountryFlag from "react-country-flag";
import { kFormatter, kFormatter2 } from "../../../reuseables/format";
import Btn from "../../../reuseables/Btn";

const Droplist = (
  <Menu>
    <IconMoreVertical />
    <Menu.Item key="1" onClick={() => useNavigate("/user/beneficiary/details")}>
      <span>
        <svg
          width="30"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3334 12.5H6.66671C5.78265 12.5 4.93481 12.8512 4.30968 13.4763C3.68456 14.1014 3.33337 14.9493 3.33337 15.8333V17.5M13.3334 5.83333C13.3334 7.67428 11.841 9.16667 10 9.16667C8.15909 9.16667 6.66671 7.67428 6.66671 5.83333C6.66671 3.99238 8.15909 2.5 10 2.5C11.841 2.5 13.3334 3.99238 13.3334 5.83333Z"
            stroke="#464F60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      View Details
    </Menu.Item>
    <Menu.Item key="2">
      <svg
        width="30"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1666 2.5009C14.3855 2.28203 14.6453 2.10842 14.9313 1.98996C15.2173 1.87151 15.5238 1.81055 15.8333 1.81055C16.1428 1.81055 16.4493 1.87151 16.7353 1.98996C17.0213 2.10842 17.2811 2.28203 17.5 2.5009C17.7188 2.71977 17.8924 2.97961 18.0109 3.26558C18.1294 3.55154 18.1903 3.85804 18.1903 4.16757C18.1903 4.4771 18.1294 4.7836 18.0109 5.06956C17.8924 5.35553 17.7188 5.61537 17.5 5.83424L6.24996 17.0842L1.66663 18.3342L2.91663 13.7509L14.1666 2.5009Z"
          stroke="#464F60"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Edit
    </Menu.Item>
    <Menu.Item key="3">
      <svg
        width="30"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.83337 14.1673L14.1667 5.83398M14.1667 5.83398H5.83337M14.1667 5.83398V14.1673"
          stroke="#464F60"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Send Money
    </Menu.Item>
    <Menu.Item key="3">
      <svg
        width="30"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_151_25216)">
          <path
            d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
            stroke="#464F60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_151_25216">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      ID Upload
    </Menu.Item>
    <Menu.Item key="3">
      <svg
        width="30"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6667 1.66602H5.00004C4.55801 1.66602 4.13409 1.84161 3.82153 2.15417C3.50897 2.46673 3.33337 2.89065 3.33337 3.33268V16.666C3.33337 17.108 3.50897 17.532 3.82153 17.8445C4.13409 18.1571 4.55801 18.3327 5.00004 18.3327H15C15.4421 18.3327 15.866 18.1571 16.1786 17.8445C16.4911 17.532 16.6667 17.108 16.6667 16.666V6.66602M11.6667 1.66602L16.6667 6.66602M11.6667 1.66602V6.66602H16.6667M13.3334 10.8327H6.66671M13.3334 14.166H6.66671M8.33337 7.49935H6.66671"
          stroke="#464F60"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      View Document
    </Menu.Item>
    <Menu.Item key="3" style={{ color: "red" }}>
      <svg
        width="30"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 4.99935H3.16667M3.16667 4.99935H16.5M3.16667 4.99935V16.666C3.16667 17.108 3.34226 17.532 3.65482 17.8445C3.96738 18.1571 4.39131 18.3327 4.83333 18.3327H13.1667C13.6087 18.3327 14.0326 18.1571 14.3452 17.8445C14.6577 17.532 14.8333 17.108 14.8333 16.666V4.99935H3.16667ZM5.66667 4.99935V3.33268C5.66667 2.89065 5.84226 2.46673 6.15482 2.15417C6.46738 1.84161 6.89131 1.66602 7.33333 1.66602H10.6667C11.1087 1.66602 11.5326 1.84161 11.8452 2.15417C12.1577 2.46673 12.3333 2.89065 12.3333 3.33268V4.99935M7.33333 9.16602V14.166M10.6667 9.16602V14.166"
          stroke="#D92D20"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Delete Document
    </Menu.Item>
  </Menu>
);

const InputSearch = Input.Search;

function WalletsDetails() {
  const [userData, setUserData] = useState(null);
  const {
    data: nameEnq,
    isLoading: namEnqloading,
    refetch: refetchnameEnq,
  } = useQuery({
    queryKey: [userData?.data?.user?.userId],
    queryFn: Tranx,
    onError: (err) => {
      console.error(err);
    },
  });

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(
      localStorage.getItem("userDetails")
    );
    setUserData(userDataFromLocalStorage);
  }, []);

  useEffect(() => {
    // Check if nameEnq is available and not loading
    if (nameEnq && !namEnqloading) {
      console.log("🚀 ~ file: History.jsx:95 ~ History ~ nameEnq:", nameEnq);
      // Perform any actions you want to do with nameEnq here
    }
  }, [nameEnq, namEnqloading]);

  const [transactionList, setTransactionList] = useState(
    nameEnq?.data || Trnx?.data
  );

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredData, setFilteredData] = useState(
    transactionList && transactionList
  );
  const [sortOrder, setSortOrder] = useState("asc"); // or 'desc' for descending
  const [showFilterOptions, setshowFilterOptions] = useState(false);
  const [filterby, setFilerby] = useState("");

  // const objectKeys = Object.keys(filteredData[0]);
  const objectKeys =
    filteredData && filteredData.length > 0 ? Object.keys(filteredData[0]) : [];

  // Function to handle search
  const handleSearch = (e) => {
    const keyword = e?.toLowerCase();
    setSearchKeyword(keyword);
  };

  const handlesorts = () => {
    setshowFilterOptions(!showFilterOptions);
  };
  const handleSort = (key) => {
    const sortedData = [...filteredData];

    if (sortOrder === "asc") {
      sortedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortOrder("desc");
    } else {
      sortedData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
      setSortOrder("asc");
    }

    setFilteredData(sortedData);
  };

  return (
    <Userlayout current="Wallets" useBack={true}>
      <Content>
        <div
          style={{
            margin: "20px 0",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              background: "#121212",
              width: "100%",
              height: "18vh",
              position: "relative",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CountryFlag
                  countryCode={"NGN"}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "2000px",
                  }}
                  svg
                />
                <div
                  style={{
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  British Pound
                </div>
              </div>

              <div
                style={{
                  color: "white",
                  fontSize: "30px",
                  marginTop: "10px",
                }}
              >
                ${kFormatter2("4000")}
              </div>
            </div>
            <img
              style={{
                position: "absolute",
                right: "10px",
                bottom: "0px",
              }}
              src={wallet}
              alt=""
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{
                background: "rgba(0, 168, 90, 1)",
              }}
            >
              <svg
                style={{
                  marginRight: "10px",
                }}
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6666 5.83268L6.33329 14.166M6.33329 14.166L14.6666 14.166M6.33329 14.166L6.33329 5.83268"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Fund Wallet
            </Button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button
              style={{
                background: "#D92D20",
              }}
            >
              <svg
                style={{
                  marginRight: "10px",
                }}
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4.99935H4.66667M4.66667 4.99935H18M4.66667 4.99935V16.666C4.66667 17.108 4.84226 17.532 5.15482 17.8445C5.46738 18.1571 5.89131 18.3327 6.33333 18.3327H14.6667C15.1087 18.3327 15.5326 18.1571 15.8452 17.8445C16.1577 17.532 16.3333 17.108 16.3333 16.666V4.99935H4.66667ZM7.16667 4.99935V3.33268C7.16667 2.89065 7.34226 2.46673 7.65482 2.15417C7.96738 1.84161 8.39131 1.66602 8.83333 1.66602H12.1667C12.6087 1.66602 13.0326 1.84161 13.3452 2.15417C13.6577 2.46673 13.8333 2.89065 13.8333 3.33268V4.99935M8.83333 9.16602V14.166M12.1667 9.16602V14.166"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Delete Wallet
            </Button>
          </div>
        </div>

        {/*   <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              background: "#121212",
              width: "100%",
              height: "18vh",
              position: "relative",
            }}
          >
            <img
              style={{
                position: "absolute",
                right: "10px",
                bottom: "0px",
              }}
              src={wallet}
              alt=""
            />
          </div>
        </div> */}
        <div className="head">
          <p>Wallet History</p>
        </div>
        <Header>
          <InputSearch
            allowClear
            placeholder="Search History"
            style={{ width: "80%" }}
            className="input"
            onChange={handleSearch}
          />

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlesorts}
          >
            <path
              d="M3 7H21"
              stroke="#5A6376"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M6 12H18"
              stroke="#5A6376"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M10 17H14"
              stroke="#5A6376"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </Header>
        {showFilterOptions && (
          <div className="filteroptions">
            {Object.keys(filteredData[0]).map((key) => (
              <p onClick={(key) => handleSort(key)} key={key}>
                {key}
              </p>
            ))}
          </div>
        )}

        <BeneficiaryCont>
          <div className="head">
            <p>Today</p>
          </div>
          {filteredData
            ?.filter((item) => {
              if (!searchKeyword.length) return item;
              else if (
                Object.values(item).some((value) =>
                  value.toString().toLowerCase().includes(searchKeyword)
                )
              ) {
                return item;
              }
            })
            .map((item) => (
              <>
                <Link
                  className="box"
                  to={`/user/transactions/details/?id=${item.sn}`}
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  <Box>
                    {/* <Avatar  className="av">AB</Avatar> */}
                    {item?.paymentStatus === "Deposited" ? (
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="25" cy="25" r="25" fill="#00A85A" />
                        <path
                          d="M29.6788 19.9334L19.0722 30.54"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21.1412 19.9508L29.6788 19.9324L29.6611 28.4707"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="26"
                          cy="26"
                          r="25"
                          transform="rotate(-74.6597 26 26)"
                          fill="#F2994A"
                        />
                        <path
                          d="M22.4409 31.1983L31.2167 19.0333"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M30.8661 29.8165L22.4411 31.1987L21.0944 22.7672"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}

                    <div className="text">
                      <h5>{item?.senderName}</h5>
                      <p>{item?.sn}</p>
                      <p>{item?.paymentStatus}</p>
                      {/* <p>{item?.collectionDate}</p> */}
                    </div>
                    <div className="options">
                      <h5>
                        <AmountFormatter
                          value={item?.paymentAmount}
                          currency={item?.senderCurrency}
                        />
                      </h5>
                      <h5>
                        <AmountFormatter
                          value={item?.receivedAmount}
                          currency={item?.beneficiaryCurrency}
                        />
                      </h5>
                    </div>
                  </Box>
                </Link>
              </>
            ))}
        </BeneficiaryCont>
      </Content>
    </Userlayout>
  );
}

const Content = styled.div`
  width: 100%;
  /* background-color: #fff; */
  margin: 0 auto;
  height: 100%;

  .head {
    width: 90%;
    /* padding: 1em; */
    margin: 0px auto;

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 40em) {
    width: 100%;
  }

  .filteroptions {
    display: flex;
    width: 90%;
    margin: 0 auto;
    gap: 8px;
    flex-wrap: wrap;
    padding: 10px;
    p {
      color: grey;
    }
    > p:nth-of-type(even) {
      border: 1px solid #00a85a;
      border-radius: 5px;
      padding: 5px 5px;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background: #00a85a;
        color: #000;
      }
    }
    > p:nth-of-type(odd) {
      background-color: #fff;
      border: 1px solid rgba(241, 149, 74, 1);
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
      &:hover {
        background: rgba(241, 149, 74, 1);
        color: #000;
      }
    }
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height:100px ; */
  /* padding-block: 20px; */
  /* border: 1px solid red; */
  height: 10%;
  gap: 10px;

  .arco-input-inner-wrapper {
    background-color: #fff;

    padding: 5px;
    border: 0.8px solid var(--gray-300, #d0d5dd);
    border-radius: 50px;
  }
`;

const BeneficiaryCont = styled.div`
  overflow-y: scroll;
  /* border: 1px solid red; */
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;

  .head {
    width: 100%;
    /* padding: 1em; */
    margin: 0 auto;

    p {
      font-size: 16px;
    }
  }

  .box {
    background-color: #fff;
    padding: 1.2em;
    border-radius: 8px;
    display: flex;
    gap: 10px;
    width: 100% !important;

    /* border: 0.3px solid green; */
    margin: 0 auto;
    width: 90%;
    height: 350px !important;

    @media screen and (max-width: 40em) {
      width: 100%;
    }

    .text {
      display: inline-flex;
      flex-direction: column;
      /* gap: 4px; */
      letter-spacing: 1;
      font-size: 12;
      /* flex: 1; */
    }
    .options {
      text-align: end;
      /* height: 100%; */
      font-size: 12px;
      align-items: center;
    }

    /* .arco-icon-more-vertical{
        display: none;
    }
     */
  }
`;
const Box = styled.div`
  align-items: center;
  display: flex;
  /* gap: 24px; */
  justify-content: space-around;
  width: 100%;
  height: 90px;
  /* padding-inline: 1em; */
  /* @media screen and (min-width: 90em){
        display: mone;
    } */
  .av {
    background: rgba(0, 168, 90, 1);

    /* width: 50%;
        height: 50%; */
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;

  border: none;
  padding: 14px;
  margin-top: 10px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  color: white;
`;

export default WalletsDetails;
