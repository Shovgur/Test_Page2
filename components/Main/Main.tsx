import { Flex } from "@chakra-ui/react";

export const Main = (props: any) => {
  return (
    <Flex direction="column" w="100vw" h="100vh" bg="#F8FBFF" justify="center">
      {props.children}
    </Flex>
  );
};
