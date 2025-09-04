// views/admin/mint/components/Energy.js
import React from 'react';

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
} from '@chakra-ui/react';

// Custom components
import Card from '../../../../components/card/Card';
import TableTabs from './TableTabs';
import ReceivingList from './ReceivingList';
import { EnergyGridBoxes } from './EnergyGridBoxes';
const Energy = () => {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Box pt={{ base: '30px', md: '30px', xl: '30px' }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <Box position="relative">
          <Card
            className="customcard"
            align="center"
            justifyContent="space-around"
            direction="column"
            w="100%"
            p={{
              sm: '35px 20px',
              md: '60px 25px',
            }}
            overflow="hidden"
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
                  color={textColor}
                  fontSize={{
                    sm: 'sm',
                    md: 'md',
                  }}
                  fontWeight="500"
                >
                  My Energy Quota
                </Text>
              </Flex>
              <Flex align="end">
                <Text
                  color={textColor}
                  fontSize={{
                    sm: '34px',
                    md: '42px',
                  }}
                  fontWeight="700"
                  lineHeight="100%"
                  textShadow="2px 0px 5px #00000094"
                >
                  0.00
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

          <EnergyGridBoxes />
        </Box>
        <TableTabs
          tabs={[
            { label: 'Staking List', content: <ReceivingList /> },
            { label: 'Minting History', content: '' },
          ]}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Energy;
