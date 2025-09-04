import './assets/css/App.css';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import { useEffect, useState, useRef } from 'react';
import { userDataAtom, userBackendDataAtom } from './jotai/userData';
import { useAtom } from 'jotai';
import { getUserContractData, getUserTotalRoiData } from './utils/contractCalls';
import { useAccount, useDisconnect } from 'wagmi';
import { getProfileData, registerUser } from './api';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import CustomModal from './components/customModal';
import { formatEther, formatUnits } from 'viem';
import { getNextGenerationRewardBonus, getNextMatchingBonus } from './utils/constants';

export default function App() {
  localStorage.removeItem('chakra-ui-color-mode');
  const { address } = useAccount();
  const prevAddress = useRef(null);

  const [searchParams] = useSearchParams();
  const disconnect = useDisconnect();
  const toast = useToast();

  const [referrerAddress, setReferrerAddress] = useState("");
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [error, setError] = useState("");

  const [userData, setUserData] = useAtom(userDataAtom);
  const [userBackendData, setUserBackendData] = useAtom(userBackendDataAtom);

  const fetchUserData = async (userAddress) => {
    if (!userAddress) return;
    const response = await getUserContractData(userAddress);
    if (response && response.status) {
      const totalEarned = parseFloat(response.data[0].directBonus) + parseFloat(response.data[0].stakingBonus);
      setUserData(prev => ({
        ...prev,
        totalPackages: Number(response.data[0]?.numberOfPackages ?? 0),
        totalStakedAmount: parseFloat(Number(formatUnits(BigInt(response.data[0]?.totalStakedAmount) ?? 0, 6)).toFixed(6)),
        totalEarned: parseFloat(Number(formatUnits(BigInt(totalEarned), 6)).toFixed(6)), // assuming totalEarned is a number
        totalWithdrawn: parseFloat(formatUnits(BigInt(response.data[0]?.totalWithdrawn) ?? 0, 6)),
        directBonus: parseFloat(Number(formatUnits(BigInt(response.data[0]?.directBonus) ?? 0, 6)).toFixed(6)),
        stakingBonus: parseFloat(Number(formatUnits(BigInt(response.data[0]?.stakingBonus) ?? 0, 6)).toFixed(6)),
        matchingBonus: parseFloat(Number(formatUnits(BigInt(response.data[0]?.matchingBonus) ?? 0, 6)).toFixed(6)),
        generationReward: parseFloat(Number(formatUnits(BigInt(response.data[0]?.generationReward) ?? 0, 6)).toFixed(6)),
        referralPercentAchieved: response.data[0]?.referralPercentAchieved,
        nextMatchingBonus: getNextMatchingBonus(formatUnits(BigInt(response.data[1]))),
        nextGenerationReward: getNextGenerationRewardBonus(formatUnits(BigInt(response.data[2]), 6)),
        matchingBonusMaxChildVolume: parseFloat(Number(formatUnits(BigInt(response.data[3]), 6)).toFixed(6)),
        matchingBonusBusiness: parseFloat(Number(formatUnits(BigInt(response.data[4]), 6)).toFixed(6)),
        generationRewardMaxChildVolume: parseFloat(Number(formatUnits(BigInt(response.data[5]), 6)).toFixed(6)),
        generationRewardBusiness: parseFloat(Number(formatUnits(BigInt(response.data[6]), 6)).toFixed(6)),
        isFetched: true
      }));
    } else {
      console.error("Failed to fetch user data");
    }
  }

  const fetchReferrerData = async (userAddress) => {
    if (!userAddress) return;
    const response = await getUserContractData(userAddress);
    if (response && response.status) {
      if(response.data[0]?.numberOfPackages > 0) {
        setUserData(prev => ({...prev, isValidReferrer: true}))
      }
    } else {
      console.error("Failed to fetch referrer data");
    }
  }

  const fetchTotalRoiIncome = async (userAddress) => {
    if (!userAddress) return;
    const response = await getUserTotalRoiData(userAddress);
    if (response && response.status) {
      const totalRoi = parseFloat(Number(formatUnits(response.data ?? 0, 6)).toFixed(6))
      setUserData(prev => ({
        ...prev,
        roiIncome: totalRoi
      }));
    } else {
      console.error("Failed to fetch user data");
    }
  }

  useEffect(() => {
    if (prevAddress.current && prevAddress.current !== address) {
      window.location.reload();
    }
    prevAddress.current = address || null;
  }, [address]);

  useEffect(() => {
    if (userData.isFetched || !address) return;
    fetchUserData(address);
    fetchTotalRoiIncome(address);
  }, [userData, address]);

    useEffect(() => {
    if (!userBackendData.isFetched) return;
    fetchReferrerData(userBackendData.userData.referral_address);
  }, [userBackendData]);

  const fetchUserDetails = async () => {
    const result = await getProfileData(address);
    // console.log("isUserExist", isUserExist);
    if (result) {
      setUserBackendData(prev => ({ ...prev, userData: result, isFetched: true }))
    } else {
      // const address =
      //   searchParams.get("ref") ||
      //   import.meta.env.VITE_DEFAULT_REGISTER_ADDRESS;
      const address = searchParams.get("ref")
      setReferrerAddress(address);
      setRegisterModalOpen(true);
    }
  };

  useEffect(() => {
    if (address && !userBackendData.isFetched) {
      fetchUserDetails();
    }
  }, [address, searchParams, userBackendData.userData]);

  const actionRegister = async () => {
    try {
      setIsSpinning(true);
      // console.log("actionRegister");
      if (!referrerAddress) {
        setError("Please enter a valid referral address");
        return;
      }
      const result = await registerUser(address, referrerAddress);
      // console.log(result);
      if (result?.status) {
        setUserBackendData(prev => ({ ...prev, userData: result.data }))
        setRegisterModalOpen(false);
        toast({
          title: 'Success!',
          description: `Welcome to  DAO Xauras`,
          // status: 'success', // "success" | "error" | "warning" | "info"
          duration: 3000,
          containerStyle: {
            backgroundColor: "#852df3", // Chakra color token or hex
            color: "white"
          },
          isClosable: true,
          position: 'top', // "top", "top-right", "bottom-left", etc.
        });
      } else {
        toast({
          title: 'Error!',
          description: result?.error || "register failed, please try again.",
          status: 'error', // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: 'top', // "top", "top-right", "bottom-left", etc.
        });
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsSpinning(false);
    }
  };

  const closeModal = () => {
    setRegisterModalOpen(false);
    disconnect.disconnect();
  };

  const modalBody = (
    <Box>
      <FormControl mb={4} isInvalid={!!error}>
        <FormLabel htmlFor="userInput">Enter Your referral address: </FormLabel>
        <Input
          id="userInput"
          type="text"
          color="white"
          bg="gray.700"
          value={referrerAddress}
          onChange={(e) => setReferrerAddress(e.target.value)}
        />
        {/* {error && <FormErrorMessage>{error}</FormErrorMessage>} */}
      </FormControl>

      <Button colorScheme="blue" width="100%" onClick={actionRegister} isLoading={isSpinning}>
        Register
      </Button>
    </Box>
  );

  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to={`/admin${location.search}`} replace />} />
      </Routes>
      <CustomModal
        isOpen={registerModalOpen}
        onClose={closeModal}
        title="Confirm Registration"
        body={modalBody}
        footer={<></>}
        size="lg"
      />
    </>
  );
}
