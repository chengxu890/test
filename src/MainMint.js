import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import nft from "./NFT.json";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const nftaddress = "0xF987dc0b909A86D63A6FD0a294cC35301dcfecf7";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(nftaddress, nft.abi, signer);
      try {
        const response = await contract.mint(
          BigNumber.from(mintAmount)
          // {
          //   value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
          // }
        );
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex justify="center" align="center" height="90vh" paddingBottom="150px">
      <box width="1520px">
        <div>
          <Text fontSize="35px" color="yellow">
            A Collection of Lovely Kitties
          </Text>
          <Text
            frontSize="30px"
            color="blue"
            letterSpacing="1%"
            textShadow="0 2px 2px #000000"
            marginLeft="100px"
            marginRight="100px"
            marginTop="10px"
            marginBottom="10px"
          >
            毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛
            茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸
            茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸毛茸茸
          </Text>
        </div>

        {isConnected ? (
          <div>
            <Flex justify="center" align="center">
              <Button
                backgroundColor="#6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="red"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="10px"
                marginTop="10px"
                type="number"
                value={mintAmount}
              />
              <Button
                backgroundColor="#6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="red"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>
            <Button
              backgroundColor="#6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="red"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              marginTop="10px"
              onClick={handleMint}
            >
              Mint Now
            </Button>
          </div>
        ) : (
          <Text color="red">You must be Connected to mint!</Text>
        )}
      </box>
    </Flex>
  );
};

export default MainMint;
