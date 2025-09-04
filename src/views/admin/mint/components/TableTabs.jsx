// TableTabs.js
import {
  Flex,
  Text,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Image,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import Card from '../../../../components/card/Card';
import React from 'react';
import nodata from '../../../../assets/img/nodata.png';

export default function TableTabs({ tabs = [], ...rest }) {
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Card className="customcard grdcard" direction="column" w="100%" {...rest}>
      <Tabs variant="soft-rounded" colorScheme="green" isFitted>
        <TabList mb="1em" className="customlinktabs">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              fontSize={{ sm: 'sm', md: 'lg' }}
              fontWeight="700"
              _selected={{ color: 'purple.500', bg: 'purple.500' }}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <hr />
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index} p="0">
              {tab.content ? (
                tab.content
              ) : (
                <Flex
                  flexDir="column"
                  align="center"
                  justify="center"
                  py="40px"
                >
                  <Image src={nodata} alt="No Data" boxSize="50px" mb="10px" />
                  <Text color={textColor} fontWeight="500" fontSize="sm">
                    No Data Available
                  </Text>
                </Flex>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Card>
  );
}
