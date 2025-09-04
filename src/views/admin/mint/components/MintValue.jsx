import React from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import Card from '../../../../components/card/Card';

export default function MintValue() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card
      className="customcard"
      align="center"
      justifyContent="center"
      direction="column"
      w="100%"
      p={{
        sm: '25px 20px',
        md: '25px',
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
            A Total Supply
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
            4771268.03
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection={{
          sm: 'row',
          md: 'row',
        }}
        align="center"
        justifyContent="space-between"
        textAlign="center"
        mt="40px"
        position="relative"
        zIndex="1"
        gap={{
          base: '10px',
          md: '30px',
        }}
      >
        <Box>
          <Text
            className="card-sm-heading"
            color={textColor}
            fontSize={{
              sm: 'xs',
              md: 'sm',
            }}
            lineHeight="normal"
            fontWeight="500"
            mb="10px"
          >
            A/DAI Anchored Reserve Fund
          </Text>
          <Text
            className="card-sm-value"
            color={textColor}
            fontSize={{
              sm: 'xs',
              md: 'sm',
            }}
            fontWeight="700"
            lineHeight="normal"
            textAlign="center"
          >
            0.00
          </Text>
        </Box>
        <Box>
          <Text
            className="card-sm-heading"
            color={textColor}
            fontSize={{
              sm: 'xs',
              md: 'sm',
            }}
            lineHeight="normal"
            fontWeight="500"
            mb="10px"
          >
            24 Hours Destruction Quantity
          </Text>
          <Text
            className="card-sm-value"
            color={textColor}
            fontSize={{
              sm: 'xs',
              md: 'sm',
            }}
            fontWeight="700"
            lineHeight="normal"
            textAlign="center"
          >
            58043.13
          </Text>
        </Box>
        <Box>
          <Text
            className="card-sm-heading"
            color={textColor}
            fontSize={{
              sm: 'xs',
              md: 'sm',
            }}
            lineHeight="normal"
            fontWeight="500"
            mb="10px"
          >
            USDT Total Destruction Quantity
          </Text>
          <Text
            className="card-sm-value"
            color={textColor}
            fontSize={{
              sm: 'xs',
              md: 'sm',
            }}
            fontWeight="700"
            lineHeight="normal"
            textAlign="center"
          >
            13564665.06
          </Text>
        </Box>
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
  );
}
