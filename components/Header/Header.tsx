import { Flex,Text  } from "@chakra-ui/react";
import { Button } from "../UI/Button";

export const Header = () => {
  return (
    <Flex
      boxShadow="xs"
      p="6"
      rounded="md"
      bg="white"
      as="header"
      justifyContent="space-between"
      width="100vw"
      height="80px"
      alignItems="center"
    >
      <Flex ml="114px">
        <Text fontWeight="700" fontSize="24px" fontFamily="Gilroy">
          Be
        </Text>
        <Text
          fontWeight="700"
          textTransform="uppercase"
          fontSize="24px"
          fontFamily="Gilroy"
          color="rgba(18, 54, 242, 1)"
        >
          free
        </Text>
      </Flex>
      <Flex
        gap="56px"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        mr="114px"
      >
        <Flex gap="16px" justifyContent="space-evenly" w="215px">
          <Text
            color="#222222"
            lineHeight="24px"
            fontStyle="normal"
            w="88px"
            fontFamily="Gilroy"
            fontSize="16px"
            fontWeight="600"
          >
            Find Project
          </Text>
          <Text
            lineHeight="24px"
            fontStyle="normal"
            w="111px"
            fontFamily="Gilroy"
            fontSize="16px"
            fontWeight="600"
          >
            Find freelancer
          </Text>
        </Flex>
        <Flex gap="26px" w="212px">
          <Button
            backgroundColor="white"
            border="none"
            color="#1236F2"
            fontFamily="Gilroy"
            cursor="pointer"
          >
            Sign in
          </Button>
          <Button
            bg=" #1236F2"
            fontSize="16px"
            color="white"
            fontWeight="700"
            w="136px"
            h="46px"
            gap="8px"
            padding="11px 40px"
            cursor="pointer"
            fontFamily="Gilroy"
            borderRadius="12px"
            border="none"
          >
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
