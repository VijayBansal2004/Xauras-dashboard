import axios from "axios";

let backendUrl = import.meta.env.VITE_BACKEND_URL;
let getUserDataUrl = import.meta.env.VITE_GET_USER_DATA_URL;
let registerNewUserUrl = import.meta.env.VITE_REGISTER_NEW_USER;
let stakeHistoryUrl = import.meta.env.VITE_GET_STAKE_HISTORY;
let unstakeHistoryUrl = import.meta.env.VITE_GET_UNSTAKE_HISTORY;
let getClaimRewardUrl = import.meta.env.VITE_GET_CLAIM_REWARD_URL;

export const getProfileData = async (userAddress) => {
  try {
    const response = await axios.get(backendUrl + getUserDataUrl, { params: { walletAddress: userAddress } });
    if (response?.data?.status) {
      return response?.data?.data
    }
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = async (userAddress, referrerUserAddress) => {
  try {
    const response = await axios.post(backendUrl + registerNewUserUrl, { walletAddress: userAddress, referralWalletAddress: referrerUserAddress });
    if (response?.data?.status) {
      return { status: true, data: response?.data?.data };
    }
  } catch (err) {
    console.error("Error in register user", err);
    return { status: false, error: err?.response?.data?.error }
  }
};

export const getStakeHistory = async (userAddress, page = 0) => {
  try {
    const response = await axios.post(backendUrl + stakeHistoryUrl, { walletAddress: userAddress, page });
      return response?.data;
  } catch (err) {
    console.error("Error in fetching stake history", err);
  }
};

export const getUnStakeHistory = async (userAddress, page = 0) => {
  try {
    const response = await axios.post(backendUrl + unstakeHistoryUrl, { walletAddress: userAddress, page });
      return response?.data;
  } catch (err) {
    console.error("Error in fetching withdrawal history", err);
  }
};

export const getClaimRewardSignature = async (userAddress) => {
  try {
    const response = await axios.post(backendUrl + getClaimRewardUrl, { walletAddress: userAddress })
    return response?.data;
  } catch (err) {
    console.error("Error in getClaimRewardSignature", err);
  }
}