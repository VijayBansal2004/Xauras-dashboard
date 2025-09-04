import React from 'react';
import logo from '../../../assets/img/logo.png';
// Chakra imports
import { Flex } from '@chakra-ui/react';

// Custom components
import { HSeparator } from '../../../components/separator/Separator';

export function SidebarBrand() {
  return (
    <Flex align="center" direction="column"
      cursor="pointer"
      onClick={() => window.location.href = "https://xauras.io"}
    >
      <img src={logo} alt="Logo" className="logo" />
      {/* <HSeparator mb="20px" /> */}
    </Flex>
  );
}

export default SidebarBrand;
