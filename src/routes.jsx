import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdAutoAwesome,
} from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";
// Admin Imports
import MainDashboard from "./views/admin/default";
import Stake from "./views/admin/stake";
import Invite from "./views/admin/invite";
import Profile from "./views/admin/profile";

// Auth Imports
import SignInCentered from "./views/auth/signIn";
import Mint from "./views/admin/mint";
import AirdropRewards from "./views/admin/mint/components/AirdropRewards";
import Energy from "./views/admin/mint/components/Energy";
import MintIssue from "./views/admin/mint/components/MintIssue";
import AdaiSwap from "./views/admin/mint/components/AdaiSwap";
import Tree from "./views/admin/invite/components/tree";
const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/",
    icon: <Icon as={MdHome} width="22px" height="22px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: "Stake",
    layout: "/admin",
    path: "/stake",
    icon: <Icon as={TbCoin} width="22px" height="22px" color="inherit" />,
    component: <Stake />,
    secondary: true,
  },
  {
    name: "Invite",
    layout: "/admin",
    path: "/invite",
    icon: (
      <Icon as={RiUserAddLine} width="22px" height="22px" color="inherit" />
    ),
    component: <Invite />,
    secondary: true,
  },
  {
    name: "Airdrop",
    layout: "/admin",
    path: "/airdrop",
    icon: (
      <Icon as={MdAutoAwesome} width="22px" height="22px" color="inherit" />
    ),
    // component: <Mint />,
    component: <AirdropRewards />,
    secondary: true,
  },

  {
    name: "Claim Airdrop Rewards", // ✅ This fixes the title
    layout: "/admin",
    path: "/airdroprewards",
    component: <AirdropRewards />,
  },

  {
    name: "Obtain Energy Value", // ✅ This fixes the title
    layout: "/admin",
    path: "/energy",
    component: <Energy />,
  },
  {
    name: "Mint Issue A", // ✅ This fixes the title
    layout: "/admin",
    path: "/mint-issue",
    component: <MintIssue />,
  },
  {
    name: "A/DAI Swap", // ✅ This fixes the title
    layout: "/admin",
    path: "/swap",
    component: <AdaiSwap />,
  },
  {
    name: "Tree", // ✅ This fixes the title
    layout: "/admin",
    path: "/tree",
    component: <Tree />,
  },
  // {
  //   name: 'Sign Out',
  //   layout: '/auth',
  //   path: '/login',
  //   icon: <Icon as={MdLock} width="22px" height="22px" color="inherit" />,
  //   component: <SignInCentered />,
  // },
];

export default routes;
