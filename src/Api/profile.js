
import api from "../Service";
import { toastr } from "react-redux-toastr";

const baseController = "api/user/profile/";
const baseControllerBank = "api/user/profile/bank/";
const baseControllerWallet = "api/user/wallet/";
const baseControllerSubscription = "api/user/profile/cancel/";
const baseControllerPayment = "api/user/payment/";



export const updateProfile = async (body) => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.post(`${baseController}update`, body);
        if (typeof response !== "undefined") {
          if (response.status === 200 && response.data.status === true) {
            toastr.success("Update Profile", "success");
            return response.data.status;
          } else {
            toastr.error("Something went wrong", `${response.data.message}`);
            return response.data.status;
          }
        } else {
          toastr.error("Update Profile", "An Error occured while updating profile");
        }
      } catch (ex) {
        toastr.error("Update Profile", "An error occured");
      }
    }
  };
  


  export const getProfile = async () => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseController}data`);
        if (typeof response !== "undefined") {
          if (response.status === 200 && response.data.status === true) {
            return response.data.data;
          }
        } else {
          toastr.error("An Error occured", "Could not retrieve profile");
        }
      } catch (ex) {
        toastr.error("An Error occurred", "Please Ensure youre logged in");
      }
    }
  };




  
export const createBankDetails = async (body) => {
    debugger
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.post(`${baseControllerBank}save`, body);
        if (typeof response !== "undefined") {
          if (response.status === 200) {
            toastr.success("Bank Details Saved Successfully", "success");
            return response.data.message;
          } else {
            toastr.error("Something went wrong", `${response.data.message}`);
            return response.data.message;
          }
        } else {
          toastr.error("Create Bank Details", "An Error occured while updating profile");
        }
      } catch (ex) {
        toastr.error("Create Bank Details", "An error occured");
      }
    }
  };



  export const getAllBanks = async () => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseControllerBank}all`);
        if (typeof response !== "undefined") {
          if (response.status === 200) {
            return response.data.data;
          }
        } else {
          toastr.error("An Error occured", "Could not retrieve profile");
        }
      } catch (ex) {
        toastr.error("An Error occurred", "Please Ensure youre logged in");
      }
    }
  };




  export const getWalletDetails = async () => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseControllerWallet}details`);
        if (typeof response !== "undefined") {
          if (response.status === 200) {
            return response.data;
          }
        } else {
          toastr.error("An Error occured", "Could not retrieve wallet");
        }
      } catch (ex) {
        toastr.error("An Error occurred", "Please Ensure youre logged in");
      }
    }
  };


  

  export const withdrawWalletFunds = async (body) => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.post(`${baseControllerWallet}withdraw`, body);
        if (typeof response !== "undefined") {
          if (response.status === 200) {
            toastr.success("Wallet Withdrawal Successful", "success");
            return response.data.message;
          } else {
            toastr.error("Something went wrong", `${response.data.message}`);
            return response.data.message;
          }
        } else {
          toastr.error("wallet withdrawal", "An Error occured");
        }
      } catch (ex) {
        toastr.error("wallet withdrawal", `${ex.response.data.message}`);
        return ex.response.data.message
      }
    }
  };




  export const cancelTrial = async () => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseControllerSubscription}trial`);
        if (typeof response !== "undefined") {
          if (response.status === 200) {
            toastr.success("Trial Subscription Cancelled Successfully", "success");
            return response.data.status;
          }
        } else {
          toastr.error("An Error occured", "Could not cancel Trial Subscription");
        }
      } catch (ex) {
        toastr.error("An Error occurred", "Please Ensure youre logged in");
      }
    }
  };



  export const cancelSub = async () => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseControllerSubscription}subscription`);
        if (typeof response !== "undefined") {
          if (response.status === 200) {
            toastr.success("Subscription Cancelled Successfully", "success");
            return response.data.status;
          }
        } else {
          toastr.error("An Error occured", "Could not cancel Subscription");
        }
      } catch (ex) {
        toastr.error("An Error occurred", "Please Ensure youre logged in");
      }
    }
  };



  export const makeWebPurchase = async () => {
    if (navigator.onLine === false) {
      toastr.error("No Internet Connection", "Please try again");
    } else {
      try {
        const response = await api.get(`${baseControllerPayment}callbackTest`);
        console.log(response)
        if (typeof response !== "undefined") {
          if (response.status === 200) {
            toastr.success("You have successfully subscribed", "success");
            return response.data.status;
          }
        } else {
          toastr.error("An Error occured", "Could not process your subscription");
        }
      } catch (ex) {
        toastr.error("An Error occurred", "Please Ensure youre logged in");
      }
    }
  };