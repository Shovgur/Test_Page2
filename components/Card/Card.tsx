import { Flex, Text, Avatar, Wrap, WrapItem, Button } from "@chakra-ui/react";

export type FreelancerType = {
  name: string;
  id: number;
};

export type Freelancer = {
  name: string;
  country: string;
  skills: [];
  clients: string;
  experience: { value: number; valueToShow: string };
  freelancerRole: string;
  freelancerType: FreelancerType[];
  id: number;
};

type CardProps = {
  data: Freelancer;
};

export const Card = ({ data }: CardProps) => {
  const {
    name,
    skills,
    country,
    clients,
    experience,
    freelancerType,
    freelancerRole,
  } = data;

  return (
    <Flex
      mt="10px"
      borderRadius="20px"
      bgColor="white"
      ml="144px"
      direction="column"
      w="978px"
      h="270px"
    >
      <Flex>
        <Wrap>
          <WrapItem p="24px">
            <Avatar
              width="56px"
              height="56px"
              name="Dan Abrahmov"
              src="data:image/jpeg;base64,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"
            />
          </WrapItem>
        </Wrap>
        <Flex mt="27px" direction="column">
          <Text
            m="0"
            fontWeight="600"
            fontSize="16px"
            lineHeight="24px"
            opacity="0.4"
            color="black"
          >
            {name}
          </Text>
          <Text m="0" fontWeight="700" fontSize="18px" lineHeight="26px">
            {freelancerRole}
          </Text>
        </Flex>
        <Flex mt="48px" ml="16px" gap="6" w="315px" h="25px">
          <Text
            padding="2px 14px 1px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#FFFFFF"
            textTransform="uppercase"
            borderRadius="100px"
            m="0"
            w="78px"
            h="100%"
            bgColor="#5EE79D"
            whiteSpace="nowrap"
          >
            Vetted
          </Text>
          <Text
            padding="2px 14px 1px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#FFFFFF"
            textTransform="uppercase"
            borderRadius="100px"
            m="0"
            w="101px"
            h="100%"
            bgColor="#FFCE50"
            whiteSpace="nowrap"
          >
            Top Rated
          </Text>
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#FFFFFF"
            textTransform="uppercase"
            borderRadius="100px"
            m="0"
            w="130px"
            h="100%"
            bgColor="#FE6161"
            padding="2px 14px 1px 14px"
            whiteSpace="nowrap"
          >
            Rising Talent
          </Text>
        </Flex>
      </Flex>
      <Flex ml="106px" gap="64px" w="731px" h="68px">
        <Flex direction="column">
          <Text
            m="0"
            fontWeight="600"
            fontSize="14px"
            lineHeight="22px"
            opacity="0.4"
            color="black"
          >
            Past clients
          </Text>
          <Text m="0" fontWeight="600" fontSize="16px" lineHeight="24px">
            {clients}
          </Text>
        </Flex>
        <Flex direction="column" w="259px" h="100%">
          <Text
            m="0"
            fontWeight="600"
            fontSize="14px"
            lineHeight="22px"
            opacity="0.4"
            color="black"
          >
            Location
          </Text>
          <Text m="0" fontWeight="600" fontSize="16px" lineHeight="24px">
            {country}
          </Text>
        </Flex>
        <Flex mb="24px" direction="column" w="135px" h="20px">
          <Text
            m="0"
            fontWeight="600"
            fontSize="14px"
            lineHeight="22px"
            opacity="0.4"
            color="black"
          >
            Industry Experience
          </Text>
          <Text m="0" fontWeight="600" fontSize="16px" lineHeight="24px">
            {experience.valueToShow}
          </Text>
        </Flex>
      </Flex>
      <Flex mt="24px" borderTop="1px solid #EAEFF5" h="64px" p="10px">
        <Flex h="30px" mt="11px" gap="6px">
          {freelancerType.map((item, index) => {
            return (
              <Text
                ml={index === 0 ? "100px" : "0px"}
                opacity="50%"
                padding="4px 12px 4px 12px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#1236F2"
                borderRadius="8px"
                bgColor="rgba(18, 54, 242, 0.05)"
                w="161px"
              >
                {item.name}
              </Text>
            );
          })}

          <Button
            alignItems="center"
            color="#1236F2"
            bgColor="white"
            w="76px"
            h="33px"
            ml="185px"
            fontSize="14px"
            fontWeight="700"
          >
            View profile
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
