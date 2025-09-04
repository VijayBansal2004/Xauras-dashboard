import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // React Router hook to track current route
import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import AdminNavbarLinks from "../../components/navbar/NavbarLinksAdmin";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const [currentBrandText, setCurrentBrandText] = useState("Default Brand");
  const textColor = useColorModeValue("gray.700", "white");

  const location = useLocation(); // Get the current route from React Router

  const { secondary, message } = props;

  let mainText = useColorModeValue("navy.700", "white");
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarShadow = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "0";
  let gap = "0px";

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  // Function to go back to the previous page
  const handleBackClick = () => {
    if (window.history.length > 1) {
      window.history.back(); // Go back to the previous page
    } else {
      window.location.href = "/defaultRoute"; // Fallback route if no history is available
    }
  };

  // Update the brand text based on the current route
  useEffect(() => {
    const routeToBrandText = {
      "/admin/dashboard": "Dashboard",
      "/admin/stake": "Stake",
      "/admin/invite": "Invite",
      "/admin/airdrop": "Air drop",
      "/admin/airdroprewards": "Airdrop Rewards",
      "/admin/energy": "Obtain Energy Value",
      "/admin/mint-issue": "Mint Issue A",
      "/admin/swap": "A/DAI Swap",
      "/admin/tree": "Tree",
    };

    // Set the brand text based on the current path
    setCurrentBrandText(routeToBrandText[location.pathname] || "Dashboard");
  }, [location.pathname]); // Run effect every time the route changes

  return (
    <Box
      borderColor={navbarBorder}
      filter={navbarFilter}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration="0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      display={secondary ? "block" : "flex"}
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="0"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px={{
        sm: paddingX,
        md: "0",
      }}
      ps={{
        xl: "0",
      }}
      pt="0px"
      top={{ base: "12px", md: "16px", lg: "20px", xl: "20px" }}
      w={{
        base: "100%",
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column-reverse",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        mb={gap}
      >
        <Box mb={{ sm: "0", md: "0px" }}>
          {/* Navbar brand and back arrow */}
          {!props.hideFromNavbar && (
            <Flex
              gap="15px"
              align="center"
              justify={{
                sm: "center",
                md: "space-between",
              }}
              position="relative"
            >
              {/* Back Arrow Button */}
              <Link
                color={mainText}
                className="backArrow"
                bg="boxbg"
                borderRadius="inherit"
                _hover={{ color: mainText }}
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                display={{ base: "flex", md: "none" }} // visible only on mobile
                onClick={handleBackClick} // Go back using history
              >
                <Icon as={ArrowBackIcon} w="22px" h="22px" color={textColor} />
              </Link>
              <Text
                color={mainText}
                bg="inherit"
                borderRadius="inherit"
                fontWeight="bold"
                fontSize={{
                  sm: "20px",
                  md: "34px",
                }}
              >
                {currentBrandText} {/* Dynamically updating brand text */}
              </Text>
            </Flex>
          )}
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
            brandText={currentBrandText} // Ensure dynamic brandText is passed down
            scrolled={scrolled}
          />
        </Box>
      </Flex>
      {secondary ? <Text color="white">{message}</Text> : null}
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
