/* eslint-disable no-unused-vars */

import { Axios } from '../utils/Axios';
import { BASE_URL } from '../../config/config';

const baseurl = BASE_URL



export const beneficiaries = async (userId,bid) => {
    const { data } = await Axios.get(
      `${baseurl}moneybusiness/getuserbeneficiaries?userId=${userId || 68059751}&beneficiaryId=${bid || 0}`
    );
    return data;
  };

export const getBanks = async (userId,bid) => {
    const { data } = await Axios.get(
      `${baseurl}moneybusiness/getbanks`
    );
    return data;
  };
export const nameEnquiry = async (bankCode,accountNumber) => {
    const { data } = await Axios.get(
      `${baseurl}moneybusiness/BankDetailsLookUp?bankCode=${bankCode}&accountNumber=${accountNumber}`
    );
    return data;
};

export const Tranx = async (userId) => {
    const { data } = await Axios.get(
      `${baseurl}moneybusiness/getuserlog/${userId}`
    );
    return data;
};
export const TransferPurpose = async () => {
    const { data } = await Axios.get(
      `${baseurl}moneybusiness/gettransferpurpose`
    );
    return data;
};

export const Paymentchannel = async () => {
    const { data } = await Axios.get(
      `${baseurl}moneybusiness/getpaymentchannel`
    );
    return data;
};

export const Payoutchannel = async () => {
    const { data } = await Axios.get(
      `${baseurl}moneybusiness/getpayoutchannel`
    );
    return data;
};

export const Rates = async (fcId,tcId,famount,tamount) => {
    const { data } = await Axios.get(
      `${baseurl}moneybusiness/getrate?fromCurrencyId=${fcId || 0}&toCurrencyId=${tcId || 0}&fromAmount=${famount || 0}&toAmount=${tamount || 0}',
      `
    );
    return data;
};


export const createBeneficiary = async (body) => {
    console.log("🚀 ~ file: Dashboard.jsx:32 ~ createBeneficiary ~ body:", body)
    const { data } = await Axios.post(
      `${baseurl}moneybusiness/adduserbeneficiary`,
      body
    ); 
    return data;
  };

export const createWallet = async (body) => {
    const { data } = await Axios.post(
      `${baseurl}moneybusiness/adduserwallet`,
      body
    ); 
    return data;
  };