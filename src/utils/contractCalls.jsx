import { readContract, writeContract, waitForTransactionReceipt, signMessage } from '@wagmi/core'
import { networks, wagmiAdapter } from '../components/AppkitProvider'
import IERC20Abi from "../abi/IERC20.json"
import XaurasStakingAbi from "../abi/XaurasStaking.json"
import AirDropDataAbi from "../abi/AirDrop.json"
import { formatEther, parseEther, parseUnits } from 'viem'
import { switchChain } from '@wagmi/core'
import { getClaimRewardSignature } from '../api'

const config = wagmiAdapter.wagmiConfig
const SUCCESS = "success"
const USDTtokenAddress = import.meta.env.VITE_USDT_TOKEN_ADDRESS;
const UserControllerAddress = import.meta.env.VITE_USER_CONTROLLER_CONTRACT_ADDRESS;
const AirdropContractAddress = import.meta.env.VITE_AIRDROP_CONTRACT_ADDRESS;

export const approveTokens = async (depositAmount) => {
    try {
        await switchChain(config, { chainId: networks[0].id })
        const approveTxnHash = await writeContract(config, {
            abi: IERC20Abi,
            address: USDTtokenAddress,
            functionName: 'approve',
            args: [
                UserControllerAddress,
                depositAmount,
            ],
            chainId: networks[0].id
        })

        // console.log({ approveTxnHash })
        const approveTxnReceipt = await waitForTransactionReceipt(config, {
            confirmations: 2,
            hash: approveTxnHash,
        })
        // console.log({ approveTxnReceipt })
        return approveTxnReceipt?.status == SUCCESS
    } catch (err) {
        console.error(err)
    }
}

export const userStakeContract = async (referrer, depositAmount) => {
    try {
        await switchChain(config, { chainId: networks[0].id })
        const stakeTxnHash = await writeContract(config, {
            abi: XaurasStakingAbi,
            address: UserControllerAddress,
            functionName: 'stake',
            args: [
                referrer,
                depositAmount,
            ],
            chainId: networks[0].id
        })

        // console.log({ stakeTxnHash })
        const stakeTxnReceipt = await waitForTransactionReceipt(config, {
            confirmations: 2,
            hash: stakeTxnHash,
        })
        // console.log({ approveTxnReceipt })
        return stakeTxnReceipt?.status == SUCCESS
    } catch (err) {
        console.error(err)
    }
}

export const UserStake = async (userAddress, referrerAddress, amount, toast) => {
    try {
        amount = (parseUnits(amount.toString(), 6)).toString()
        let availableBalance = await getTokenBalance(userAddress);
        if (!availableBalance?.status) {
            toast({
                title: 'Error!',
                description: `unable to fetch latest balances, please try again`,
                status: 'error', // "success" | "error" | "warning" | "info"
                duration: 3000,
                isClosable: true,
                position: 'top', // "top", "top-right", "bottom-left", etc.
            });
            return
        }

        if (availableBalance.balance < parseFloat(amount)) {
            toast({
                title: 'Error!',
                description: `Insufficient balance`,
                status: 'error', // "success" | "error" | "warning" | "info"
                duration: 3000,
                isClosable: true,
                position: 'top', // "top", "top-right", "bottom-left", etc.
            });
            return;
        }
        let approveTxn = await approveTokens(amount)
        if (approveTxn) {
            toast({
                title: 'Success!',
                description: `Tokens Approval successful`,
                // status: 'success', // "success" | "error" | "warning" | "info"
                duration: 3000,
                containerStyle: {
                    backgroundColor: "#852df3", // Chakra color token or hex
                    color: "white"
                },
                isClosable: true,
                position: 'top', // "top", "top-right", "bottom-left", etc.
            });
            let res = await userStakeContract(referrerAddress, amount)
            if (res) {
                toast({
                    title: 'Success!',
                    description: `Staked Successfully`,
                    // status: 'success', // "success" | "error" | "warning" | "info"
                    duration: 3000,
                    containerStyle: {
                        backgroundColor: "#852df3", // Chakra color token or hex
                        color: "white"
                    },
                    isClosable: true,
                    position: 'top', // "top", "top-right", "bottom-left", etc.
                });
                return true;
            } else {
                toast({
                    title: 'Failed!',
                    description: `Staking unsuccessful, please try again`,
                    status: 'error', // "success" | "error" | "warning" | "info"
                    duration: 3000,
                    isClosable: true,
                    position: 'top', // "top", "top-right", "bottom-left", etc.
                });
                return;
            }
        } else {
            toast({
                title: 'Error!',
                description: `Failed to Approve tokens, please try again`,
                status: 'error', // "success" | "error" | "warning" | "info"
                duration: 3000,
                isClosable: true,
                position: 'top', // "top", "top-right", "bottom-left", etc.
            });
            return;
        }
    } catch (err) {
        console.error(err)
        toast({
            title: 'Error!',
            description: `something went wrong, please try again`,
            status: 'error', // "success" | "error" | "warning" | "info"
            duration: 3000,
            isClosable: true,
            position: 'top', // "top", "top-right", "bottom-left", etc.
        });
    }
}

export const UserWithdraw = async (withdrawAmount) => {
    try {
        withdrawAmount = (parseUnits(withdrawAmount.toString(), 6)).toString()
        await switchChain(config, { chainId: networks[0].id })
        const withdrawTxnHash = await writeContract(config, {
            abi: XaurasStakingAbi,
            address: UserControllerAddress,
            functionName: 'withdrawROI',
            args: [
                withdrawAmount,
            ],
            chainId: networks[0].id
        })

        // console.log({ withdrawTxnHash })
        const withdrawTxnReceipt = await waitForTransactionReceipt(config, {
            confirmations: 2,
            hash: withdrawTxnHash,
        })
        // console.log({ approveTxnReceipt })
        return withdrawTxnReceipt?.status == SUCCESS
    } catch (err) {
        console.error(err)
    }
}

export const claimRewards = async (userAddress, toast) => {
    try {
        await switchChain(config, { chainId: networks[0].id })
        const data = await getClaimRewardSignature(userAddress);
        if (!data?.status) {
            toast({
                title: 'Error!',
                description: `please try again`,
                status: 'error', // "success" | "error" | "warning" | "info"
                duration: 3000,
                isClosable: true,
                position: 'top', // "top", "top-right", "bottom-left", etc.
            });
            return;
        }
        const txnHash = await writeContract(config, {
            abi: AirDropDataAbi,
            address: AirdropContractAddress,
            functionName: 'claimRewards',
            args: [
                data.conversionRate,
                data.signature,
            ],
            chainId: networks[0].id
        })

        const txnReceipt = await waitForTransactionReceipt(config, {
            confirmations: 2,
            hash: txnHash,
        })

        return txnReceipt?.status == SUCCESS
    } catch (err) {
        console.error(err)
    }
}

export const getTokenBalance = async (userAddress) => {
    try {
        const usdtBalance = await readContract(config, {
            abi: IERC20Abi,
            address: USDTtokenAddress,
            functionName: "balanceOf",
            args: [userAddress],
            chainId: networks[0].id,
        })
        // console.log("USDT Balance: ", usdtBalance)
        return { status: true, balance: parseFloat(usdtBalance) };
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const getUserContractData = async (userAddress) => {
    try {
        const data = await readContract(config, {
            abi: XaurasStakingAbi,
            address: UserControllerAddress,
            functionName: "getUserData",
            args: [userAddress],
            chainId: networks[0].id,
        })
        // console.log("UserContractData ", data)
        return { status: true, data };
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const getUserTotalRoiData = async (userAddress) => {
    try {
        const data = await readContract(config, {
            abi: XaurasStakingAbi,
            address: UserControllerAddress,
            functionName: "getUserTotalRoiIncome",
            args: [userAddress],
            chainId: networks[0].id,
        })
        // console.log("UserContractData ", data)
        return { status: true, data };
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const getUserLevelsContractData = async (userAddress) => {
    try {
        const data = await readContract(config, {
            abi: XaurasStakingAbi,
            address: UserControllerAddress,
            functionName: "getUserLevels",
            args: [userAddress],
            chainId: networks[0].id,
        })
        // console.log("UserContractData ", data)
        return { status: true, data };
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const getUserAirDropContractData = async (userAddress) => {
    try {
        const data = await readContract(config, {
            abi: AirDropDataAbi,
            address: AirdropContractAddress,
            functionName: "getUserAirDropData",
            args: [userAddress],
            chainId: networks[0].id,
        })
        // console.log("getUserAirDropData ", data)
        return { status: true, data };
    } catch (err) {
        console.error(err);
        return null;
    }
};