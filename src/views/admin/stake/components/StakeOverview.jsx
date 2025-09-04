// Chakra imports
import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../../components/card/Card";
import React, { useEffect, useState } from "react";
import ListTable, { ListTableWithdraw } from "./ListTable";
import CustomModal from "../../../../components/customModal";
import { UserStake, UserWithdraw } from "../../../../utils/contractCalls";
import { useAccount } from "wagmi";
import { useAtom } from "jotai";
import { userBackendDataAtom, userDataAtom } from "../../../../jotai/userData";

export default function StakeOverview(props) {
  const { ...rest } = props;
  const toast = useToast();
  const { address, chainId } = useAccount();

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [userBackendData] = useAtom(userBackendDataAtom);
  const [userData,] = useAtom(userDataAtom);

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    if(address !== import.meta.env.VITE_DEFAULT_REGISTER_ADDRESS && !userData.isValidReferrer) {
      toast({
          title: "Error!",
          description: `Referral is invalid: your referrer must stake first.`,
          status: "error", // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: "top", // "top", "top-right", "bottom-left", etc.
        });
        return;
    }
    setIsOpen(true);
  }

  const onClose = () => {
    setValue("");
    setError("");
    setIsOpen(false);
  }

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState("stake");
  const [loading, setLoading] = useState(false);
  const [stakeCount, setStakeCount] = useState(0);
  const [withdrawalCount, setWithdrawalCount] = useState(0);

  useEffect(() => {
    if (value === "") {
      setError(""); // no error when input is empty
    } else if (Number(value) < 50 && type == "stake") {
      setError("Please enter a valid number greater than 50");
    } else {
      setError("");
    }
  }, [value, type]);

  const handleStakeSubmit = async () => {
    try {
      if (!address) {
        toast({
          title: "Error!",
          description: `Please connect your wallet`,
          status: "error", // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: "top", // "top", "top-right", "bottom-left", etc.
        });
        return;
      }
      const referrerAddress = userBackendData.userData.referral_address;
      // console.log({ referrerAddress })

      if (!referrerAddress) {
        toast({
          title: "Error!",
          description: `Please register first`,
          status: "error", // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: "top", // "top", "top-right", "bottom-left", etc.
        });
        return;
      }
      if (!value || Number(value) < 50) {
        setError("Please enter a valid number greater than 50");
        return;
      }
      if (Number(value) % 50 !== 0) {
        setError("Number must be a multiple of 50");
        return;
      }
      setLoading(true);
      await UserStake(address, referrerAddress, Number(value), toast);
      setStakeCount(prev => prev + 1)
      onClose();
    } catch (err) {
      console.error("Error during submission:", err);
      setError("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  const handleWithdrawSubmit = async () => {
    try {
      if (!address) {
        toast({
          title: "Error!",
          description: `Please connect your wallet`,
          status: "error", // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: "top", // "top", "top-right", "bottom-left", etc.
        });
        return;
      }
      const referrerAddress = userBackendData.userData.wallet_address;

      if (!referrerAddress) {
        toast({
          title: "Error!",
          description: `Please register first`,
          status: "error", // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: "top", // "top", "top-right", "bottom-left", etc.
        });
        return;
      }
      if (!value || Number(value) < 15) {
        setError("Minimum withdrawal amount is 15 USDT");
        return;
      }
      const availableToWithdraw = parseFloat((userData.roiIncome - userData.totalWithdrawn).toString())
      if (Number(value) > availableToWithdraw) {
        setError("Insufficient balance to withdraw");
        return;
      }

      setLoading(true);
      const response = await UserWithdraw(Number(value));
      if (response) {
        toast({
          title: "Success",
          description: `Withdrawal Successful`,
          // status: "success", // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: "top", // "top", "top-right", "bottom-left", etc.
        });
        setWithdrawalCount(prev => prev + 1)
      } else {
        toast({
          title: "Error!",
          description: `Withdrawal failed`,
          status: "error", // "success" | "error" | "warning" | "info"
          duration: 3000,
          isClosable: true,
          position: "top", // "top", "top-right", "bottom-left", etc.
        });
      }
      onClose();
    } catch (err) {
      console.error("Error during submission:", err);
      setError("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  const modalBody = (
    <Box>
      <FormControl mb={4} isInvalid={!!error}>
        <FormLabel htmlFor="userInput">
          {
            type == "stake" ? 'Enter Stake Amount' : 'Enter Unstake Amount'
          }
        </FormLabel>
        <Input
          id="userInput"
          type="text"
          placeholder="50"
          color="white"
          bg="gray.700"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        onClick={
          () => {
            if (type == "stake") {
              handleStakeSubmit();
            } else if (type == "unstake") {
              handleWithdrawSubmit();
            }
          }
        }
        isLoading={loading}
      >
        {
          type == 'stake' ? 'Stake' : 'Unstake'
        }
      </Button>
    </Box>
  );

  return (
    <Card
      className="customcard highlighted"
      align=""
      direction="column"
      w={{
        sm: "100%",
        md: "60%",
      }}
      m="auto"
      {...rest}
    >
      {/* Tabs */}
      <Tabs variant="soft-rounded" colorScheme="green" isFitted>
        <TabList mb="1em" className="customlinktabs">
          <Tab
            fontSize="lg"
            fontWeight="700"
            _selected={{ color: "purple.500", bg: "purple.500" }}
            onClick={() => setType("stake")}
          >
            STAKE
          </Tab>
          <Tab
            fontSize="lg"
            fontWeight="700"
            _selected={{ color: "purple.500", bg: "purple.500" }}
            onClick={() => setType("unstake")}
          >
            WITHDRAW
          </Tab>
        </TabList>
        <hr />
        <TabPanels>
          {/* STAKE Panel */}
          <TabPanel p="0">
            {type == "stake" ? (
              <Flex align="center" justify="center">
                <Text
                  fontSize="md"
                  color="secondaryGray.600"
                  fontWeight="400"
                  mt="20px"
                  textAlign="center"
                >
                  {/* First Staking Time <strong>USDT?</strong> */}
                  {/* <br /> */}
                  Please Approve XAURAS's Use Of Your <strong>USDT</strong> For
                  Staking.
                </Text>
              </Flex>
            ) : null}
            <Button
              mt="30px"
              mb="30px"
              mx="auto"
              align="center"
              justifyContent="center"
              variant="darkBrand"
              color="white"
              fontSize="xl"
              fontWeight="500"
              borderRadius="70px"
              px="35px"
              py="10px"
              height="50px"
              width="100%"
              onClick={onOpen}
              // disabled={!userData.isValidReferrer}
            >
              Approve
            </Button>
            <ListTable stakeCount={stakeCount} />
          </TabPanel>

          {/* UNSTAKE Panel */}
          <TabPanel p="0">
            <Flex align="center" justify="center">
              <Text
                fontSize="md"
                color="secondaryGray.600"
                fontWeight="400"
                mt="20px"
                textAlign="center"
              >
                Minimum Withdrawal Amount <strong>$ </strong> 15
                <br />
              </Text>
            </Flex>
            <Button
              mt="30px"
              mb="30px"
              mx="auto"
              align="center"
              justifyContent="center"
              variant="darkBrand"
              color="white"
              fontSize="xl"
              fontWeight="500"
              borderRadius="70px"
              px="35px"
              py="10px"
              height="50px"
              width="100%"
              onClick={onOpen}
            >
              Withdraw
            </Button>
            <ListTableWithdraw />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title={type == "stake" ? "Stake" : "Unstake"}
        body={modalBody}
        footer={<></>}
      // size="lg"
      />
    </Card>
  );
}
