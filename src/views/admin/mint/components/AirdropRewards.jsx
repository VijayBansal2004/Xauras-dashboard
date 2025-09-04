// views/admin/mint/components/AirdropRewards.js
import React, { useEffect, useState } from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

// Custom components
import Card from '../../../../components/card/Card';
import { SwapStakingList } from './SwapStakingList';
import TableTabs from './TableTabs';
import ReceivingList from './ReceivingList';
import ListTable from '../../../../views/admin/stake/components/ListTable';
import { useAtom } from 'jotai';
import { userBackendDataAtom, userDataAtom, userRewardsDataAtom } from '../../../../jotai/userData';
import { useAccount } from 'wagmi';
import { claimRewards, getUserAirDropContractData } from '../../../../utils/contractCalls';
import { formatEther, formatUnits } from 'viem';
const AirdropRewards = () => {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const [userData,] = useAtom(userDataAtom);
  const [userBackendData,] = useAtom(userBackendDataAtom);
  const [rewardsData, setRewardsData] = useAtom(userRewardsDataAtom);

  const { address } = useAccount();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (rewardsData.isFetched || !address || !userData.isFetched) return;
    fetchUserRewardsData();
  }, [rewardsData, address, userData.isFetched])

  const fetchUserRewardsData = async () => {
    try {
      const result = await getUserAirDropContractData(address);
      // console.log(result)
      if (result?.status) {
        const totalClaimed = parseFloat(formatEther(result.data[0].toString())).toFixed(4)
        const alreadyUsedStake = parseFloat(formatUnits(result.data[1].toString(), 6))
        const stakeDelta = userData.totalStakedAmount - alreadyUsedStake;
        const claimableTokens = parseFloat(userBackendData.userData.conversionRate) > 0 ? parseFloat((stakeDelta / parseFloat(userBackendData.userData.conversionRate)).toFixed(4)) : 0;
        setRewardsData({
          totalClaimed: parseFloat(totalClaimed),
          alreadyUsedStake,
          claimeAble: claimableTokens,
          isFetched: true
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleClaim = async () => {
    try {
      if (isLoading) return;
      if (!address) {
        toast({
          title: 'Error!',
          description: `connect to wallet`,
          status: 'error', // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: 'top', // "top", "top-right", "bottom-left", etc.
        });
        return;
      }
      if (rewardsData.claimeAble <= 0) {
        toast({
          title: 'Error!',
          description: `Insufficient claimable tokens`,
          status: 'error', // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: 'top', // "top", "top-right", "bottom-left", etc.
        });
        return;
      }
      setIsLoading(true)
      const result = await claimRewards(address, toast)
      if (result) {
        toast({
          title: 'Success!',
          description: `Rewards Claimed Successfully`,
          // status: 'success', // "success" | "error" | "warning" | "info"
          duration: 3000,
          containerStyle: {
            backgroundColor: "#852df3", // Chakra color token or hex
            color: "white"
          },
          isClosable: true,
          position: 'top', // "top", "top-right", "bottom-left", etc.
        });
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box pt={ { base: '30px', md: '30px', xl: '30px' } }>
      <SimpleGrid columns={ { base: 1, md: 1, xl: 1 } } gap="20px" mb="20px">
        <Box position="relative">
          <Card
            className="customcard"
            align="center"
            justifyContent="space-around"
            direction="column"
            // w="100%"
            p={ {
              sm: '35px 20px',
              md: '60px 25px',
            } }
            overflow="hidden"
            w={ {
              sm: "100%",
              md: "60%",
            } }
            m="auto"
          >
            <Flex
              flexDirection="column"
              align="center"
              justifyContent="center"
              textAlign="center"
              position="relative"
              zIndex="1"
            >
              <Flex align="end">
                <Text
                  mb="10px"
                  color={ textColor }
                  fontSize={ {
                    sm: 'sm',
                    md: 'md',
                  } }
                  fontWeight="500"
                >
                  The Total Amount of my Airdrop Reward A
                </Text>
              </Flex>
              <Flex align="end">
                <Text
                  color={ textColor }
                  fontSize={ {
                    sm: '34px',
                    md: '42px',
                  } }
                  fontWeight="700"
                  lineHeight="100%"
                  textShadow="2px 0px 5px #00000094"
                >
                  { (rewardsData.totalClaimed + rewardsData.claimeAble).toFixed(4) }
                </Text>
              </Flex>
            </Flex>

            <div className="gradient-bg">
              <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                      result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
              </div>
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
              </div>
            </div>
          </Card>
          <Box textAlign="center" mt="20px" w={ {
            sm: "100%",
            md: "60%",
          } }
            m="auto">
            <Button
              variant="darkBrand"
              color="white"
              fontSize="md"
              fontWeight="500"
              justifyContent="center"
              borderRadius="70px"
              my="10px"
              px="24px"
              py="5px"
              width="100%"
              aria-label="Claim"
              onClick={ handleClaim }
              disabled={ isLoading || rewardsData.claimeAble <= 0 }
              isLoading={ isLoading }
            >
              Claim
            </Button>
            <small className="smalltext">Total Staked: { userData.totalStakedAmount } USDT</small><br />
            <small className="smalltext">Total Claimed: { rewardsData.totalClaimed } XRS</small><br />
            <small className="smalltext">Available To Claim: { rewardsData.claimeAble } XRS</small>
          </Box>
          <SwapStakingList />
        </Box>
        {/* <TableTabs
          tabs={[
            { label: 'Receiving List', content: <ReceivingList /> },
            { label: 'Staking Records', content: '' },
          ]}
        /> */}
      </SimpleGrid>
      <Flex align="center" justify="center">
        <Text
          fontSize="sm"
          color="secondaryGray.500"
          fontWeight="400"
          mt="20px"
          mb="25px"
          textAlign="center"
        >
          Note: The Airdrop A Rewards will be available for manual collection
          after the A Stablecoin is launched.
        </Text>
      </Flex>
    </Box>
  );
};

export default AirdropRewards;
