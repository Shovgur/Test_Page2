import { Flex, Text, Image } from "@chakra-ui/react";
import { Button } from "../UI/Button";

export const Hero = () => {
  return (
    <Flex
      mt="32px"
      justifyContent="center"
      w="1312px"
      h="260px"
      alignItems="center"
    >
      <Image
        borderRadius="20px"
        h="260px"
        position="absolute"
        src="/images/Hero.jpg"
        w="1312px"
        ml="300px"
      />
      <Flex
        w="622px"
        h="100px"
        direction="column"
        justifyContent="space-around"
      >
        <Text
          zIndex="1"
          color="white"
          fontSize="44px"
          fontWeight="700"
          lineHeight="50px"
        >
          Get a discount 10% from our partner for the first project
        </Text>

        <Button
          backgroundColor="white"
          w="143px"
          h="40px"
          color="black"
          border="none"
          borderRadius="10px"
          mt="18px"
          p="10px 24px 10px 24px"
        >
          <Text
            fontWeight="700"
            fontSize="14px"
            lineHeight="22px"
            fontFamily="Gilroy"
          >
            Get a discount
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};
