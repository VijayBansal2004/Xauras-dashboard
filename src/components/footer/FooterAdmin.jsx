/*eslint-disable*/
import React from 'react';
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMedium,
  FaTelegram,
  FaDiscord,
} from 'react-icons/fa6';

export default function Footer() {
  const textColor = useColorModeValue('gray.400', 'white');
  const { toggleColorMode } = useColorMode();
  const socialLinks = [
    {
      href: 'https://www.facebook.com/people/Xaurasofficial/61579003671262/',
      icon: <FaFacebookF />,
    },
    {
      href: 'https://www.instagram.com/xauras_official',
      icon: <FaInstagram />,
    },
    { href: 'https://www.youtube.com/@xaurasofficial', icon: <FaYoutube /> },
    { href: 'https://medium.com/@xauras42', icon: <FaMedium /> },
    { href: 'https://t.me/xauras_official', icon: <FaTelegram /> },
    { href: 'https://discord.com/channels/@me', icon: <FaDiscord /> },
  ];

  return (
    <Flex
      zIndex="3"
      gap="20px"
      flexDirection={{
        base: 'column',
        xl: 'row',
      }}
      alignItems={{
        base: 'center',
        xl: 'center',
      }}
      justifyContent="space-between"
      px={{ base: '30px', md: '50px' }}
      pb="40px"
    >
      <List display="flex">
        {socialLinks.map((link, index) => (
          <ListItem
            key={index}
            me={{
              base: '20px',
              md: index !== socialLinks.length - 1 ? '24px' : '0px',
            }}
          >
            <Link
              href={link.href}
              isExternal
              color={textColor}
              fontSize="xl"
              _hover={{ color: 'teal.400' }}
            >
              {link.icon}
            </Link>
          </ListItem>
        ))}
      </List>
      <Text
        color={textColor}
        fontSize="xs"
        textAlign={{
          base: 'center',
          xl: 'start',
        }}
        mb={{ base: '20px', xl: '0px' }}
      >
        {' '}
        &copy; {1900 + new Date().getYear()}
        <Text as="span" fontWeight="500" ms="4px">
          Xauras. All Rights Reserved.
        </Text>
      </Text>
    </Flex>
  );
}
