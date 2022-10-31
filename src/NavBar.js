import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);
  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccounts(accounts);
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="10px">
      <Flex justify="space-around" width="10%" padding="0 1px">
        {/* <Link href="http://www.facebook.com">
          <Image src={Facebook} Size="1px" margin="" />
        </Link> */}
        <Link href="http://www.twitter.com">
          <Image src={Twitter} box Size="5px" margin="" />
        </Link>
        {/* <Link href="http://www.gmail.com">
          <Image src={Email} box Size="30px" margin="" />
        </Link> */}
      </Flex>

      {/* right */}
      <Flex justify="space-around" align="center" padding="30px">
        <Box margin="0 15px">About</Box>
        <Spacer />
        <Box margin="0 15px">Mint</Box>
        <Spacer />
        <Box margin="0 15px">Team</Box>
        <Spacer />

        {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
            backgroundColor="#6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="red"
            cursor="pointer"
            fontFamily="inherit"
            padding="10px"
            margin="0 15px"
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
