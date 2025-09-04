import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Select,
  useColorModeValue,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Progress,
} from '@chakra-ui/react';
import Card from '../../../../components/card/Card';

function StakingCalculator() {
  const [amount, setAmount] = useState(1000);
  const [apy, setApy] = useState(5);
  const [days, setDays] = useState(365);
  const [frequency, setFrequency] = useState('daily');

  const textColor = useColorModeValue('gray.700', 'white');
  const textColorSecondary = useColorModeValue('gray.400', 'secondaryGray.600');
  const rewardsColor = useColorModeValue('green.500', 'green.500');

  // Compounding frequency in terms of times per year
  const compoundingMap = {
    daily: 365,
    weekly: 52,
    monthly: 12,
    yearly: 1,
  };

  const calculateResults = () => {
    const P = Number(amount);
    const r = Number(apy) / 100;
    const t = Number(days) / 365;
    const n = compoundingMap[frequency];

    const finalBalance = P * Math.pow(1 + r / n, n * t);
    const rewards = finalBalance - P;

    return {
      initial: P,
      finalBalance,
      rewards,
    };
  };

  const { initial, finalBalance, rewards } = calculateResults();

  return (
    <Card className="customcard" align="" direction="column" w="100%" p="20px">
      <Heading
        fontSize={{ md: '22px', sm: '20px' }}
        mb="30px"
        color={textColor}
        textAlign={{
          md: 'left',
          sm: 'center',
        }}
      >
        Staking Calculator
      </Heading>

      {/* Inputs */}
      <Flex gap="20px" flexWrap="wrap">
        <Box flex="1" className="fullflex">
          <Text mb="8px" color={textColor} fontSize="sm" fontWeight="500">
            Investment Amount
          </Text>
          <Input
            type="number"
            value={amount}
            placeholder="Enter the amount of $USDT"
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
          />
        </Box>
        <Box flex="1" className="fullflex">
          <Text mb="8px" color={textColor} fontSize="sm" fontWeight="500">
            Annual APY (%)
          </Text>
          <Input
            type="number"
            value={apy}
            onChange={(e) => setApy(e.target.value)}
            className="form-control"
          />
        </Box>
      </Flex>

      <Flex gap="20px" flexWrap="wrap" mt="20px">
        <Box flex="1" className="fullflex">
          <Text mb="8px" color={textColor} fontSize="sm" fontWeight="500">
            Time Period (days)
          </Text>
          <Input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="form-control"
          />
        </Box>
        <Box flex="1" className="fullflex">
          <Text mb="8px" color={textColor} fontSize="sm" fontWeight="500">
            Compounding Frequency
          </Text>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="form-control"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </Box>
      </Flex>

      {/* Results */}
      <Flex gap="20px" mt="30px" flexWrap="wrap">
        <Stat
          flex="1"
          p="15px"
          borderRadius="12px"
          className="darkcard"
          bg="gray.700"
        >
          <StatLabel mb="8px" color={textColor} fontSize="sm" fontWeight="500">
            USDT Balance
          </StatLabel>
          <StatNumber color={textColor}>${initial.toFixed(2)}</StatNumber>
        </Stat>

        <Stat
          flex="1"
          p="15px"
          borderRadius="12px"
          bg="gray.700"
          className="darkcard"
        >
          <StatLabel mb="8px" color={textColor} fontSize="sm" fontWeight="500">
            Total USD
          </StatLabel>
          <StatNumber color={rewardsColor}>${rewards.toFixed(2)}</StatNumber>
        </Stat>
      </Flex>

      <Box
        mt="30px"
        p="20px"
        borderRadius="12px"
        bg="gray.700"
        className="darkcard"
      >
        <Text mb="8px" color={textColor} fontSize="sm" fontWeight="500">
          Next Reward Yield
        </Text>
        <Text fontSize="28px" fontWeight="700" color={textColor}>
          ${finalBalance.toFixed(2)}
        </Text>
        {/* <Progress
          value={100} // always full
          size="sm"
          borderRadius="8px"
          bg="gray.700" // background bar (grey)
          sx={{
            '& > div': {
              background: '#01b574', // custom filled color
            },
          }}
        /> */}
        {/* Gradient Progress Bar */}
        <Box
          mt="15px"
          h="10px"
          w="100%"
          borderRadius="full"
          bg="gray.600" // background track
          overflow="hidden"
        >
          <Box
            h="100%"
            w="100%"
            bgGradient={`linear(to-l, #09090b ${
              (initial / finalBalance) * 100
            }%, #e08cfd ${(initial / finalBalance) * 100}%)`}
          />
        </Box>
        <Flex justify="space-between" mt="8px">
          <Text fontSize="sm" color="gray.400">
            Principal
          </Text>
          <Text fontSize="sm" color="gray.400">
            Rewards
          </Text>
        </Flex>
      </Box>
    </Card>
  );
}

export default StakingCalculator;
