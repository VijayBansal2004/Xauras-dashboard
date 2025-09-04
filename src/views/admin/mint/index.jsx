import React from 'react';

// imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

import { MintCardLink } from './components/MintCardLink';

import MintValue from './components/MintValue';
export default function Mint() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue(
    'linear-gradient(26deg, rgb(148 61 245 / 100%) 6.14%, rgb(9 9 11 / 0%) 77.64%)',
    'linear-gradient(26deg, rgb(148 61 245 / 100%) 6.14%, rgb(9 9 11 / 0%) 77.64%)',
  );
  return (
    <Box pt={{ base: '30px', md: '30px', xl: '30px' }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <MintValue />
        <MintCardLink />
      </SimpleGrid>
    </Box>
  );
}
