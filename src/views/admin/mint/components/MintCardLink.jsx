import React from 'react';
import { Flex, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import {
  MdTrendingUp,
  MdBolt,
  MdOutlineToken,
  MdSwapHoriz,
} from 'react-icons/md'; // ✅ add more icons from Material Design
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Card from '../../../../components/card/Card';
import IconBox from '../../../../components/icons/IconBox';
import { Link } from 'react-router-dom';

export const MintCardLink = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue(
    'linear-gradient(26deg, rgb(148 61 245) 6.14%, rgba(9,9,11,0) 77.64%)',
    'linear-gradient(26deg, rgb(148 61 245) 6.14%, rgba(9,9,11,0) 77.64%)',
  );

  const menuItems = [
    {
      label: 'Claim Airdrop Rewards',
      icon: MdTrendingUp,
      to: '/admin/airdroprewards',
    },

    { label: 'Obtain Energy Value', icon: MdBolt, to: '/admin/energy' },
    { label: 'Mint Issue A', icon: MdOutlineToken, to: '/admin/mint-issue' }, // use new route
    { label: 'A/DAI Swap', icon: MdSwapHoriz, to: '/admin/swap' },
  ];

  return (
    <Card
      className="customcard mintcardview"
      direction="column"
      w="100%"
      p="25px"
      gap="12px"
    >
      {menuItems.map((item, idx) => (
        <Card
          key={idx}
          className="customcard grdcard"
          direction={{ base: 'column' }}
          justify="center"
          p="15px"
        >
          <Link to={item.to}>
            <Flex position="relative" align="center">
              <IconBox
                w="36px"
                h="36px"
                bg={boxBg}
                icon={
                  <Icon w="22px" h="22px" as={item.icon} color={brandColor} />
                }
              />
              <Flex direction="column" align="center">
                <Text
                  color={textColor}
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight="bold"
                  ml="14px"
                >
                  {item.label}
                </Text>
              </Flex>
              <Flex ml={{ base: 'auto' }} align="center">
                <Icon
                  as={ArrowForwardIcon}
                  w="22px"
                  h="22px"
                  color={textColor}
                />
              </Flex>
            </Flex>
          </Link>
        </Card>
      ))}
    </Card>
  );
};
