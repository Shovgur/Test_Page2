import {
  Checkbox,
  CheckboxGroup,
  Input,
  Flex,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";

import { useState } from "react";

// export type CheckboxProps = {
// filter: any
// onFilterChange: {( string: string ): void};
// };

export const types = [
  { title: "Full-time", name: "sava" },

  { title: "Contract" },
  { title: "Intership" },
  { title: "Part-time" },
];


export const Location = (props:any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);


  return (
    <Flex mt="10px" ml="24px" borderRadius="20px" w="310px" h="722px" bg="white">
      <Flex mt="24px" direction="column" ml="24px">
        <Text fontWeight="600" fontSize="14px" lineHeight="24px">
          Location
        </Text>
        <Input
          p="12px 16px 12px 16px"
          w="262px"
          mt="6px"
          placeholder="Basic usage"
        />
        <Text fontWeight="600" fontSize="14px" lineHeight="22px" mt="20px">
          Freelancer Type
        </Text>
        <CheckboxGroup colorScheme="blue">
          <Stack mt="10px" spacing={[1, 1]} direction={["row", "column"]}>
            <Checkbox
              //  {...types.map(item => (
              //  {types.title}
              //               ))}
              // onChange={() => onFilterChange([...filter.freelanceType, 'Full-time'], 'freelanceType')}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="full"
              isChecked={isChecked}
            >
              Full-time
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="contract"
              isChecked={isChecked}
            >
              Contract
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="intership"
            >
              Intership
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="part-time"
            >
              Part-time
            </Checkbox>
          </Stack>
        </CheckboxGroup>
        <Text fontWeight="600" fontSize="14px" lineHeight="22px" mt="20px">
          Skills
        </Text>
        <CheckboxGroup colorScheme="blue">
          <Stack mt="10px" spacing={[1, 1]} direction={["row", "column"]}>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="english"
            >
              English
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="hard-work"
            >
              Hard work
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="communication"
            >
              Communication
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="stress-tolerance"
            >
              Stress tolerance
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="quick response"
            >
              Quick response
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="fast work"
            >
              Fast work
            </Checkbox>
          </Stack>
        </CheckboxGroup>
        <Text fontWeight="600" fontSize="14px" lineHeight="22px" mt="20px">
          Language
        </Text>
        <CheckboxGroup colorScheme="blue">
          <Stack mt="10px" spacing={[1, 1]} direction={["row", "column"]}>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="language"
            >
              English
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="language"
            >
              Russian
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="language"
            >
              Ukrainian
            </Checkbox>
            <Checkbox
              onChange={() => setIsChecked(!isChecked)}
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              value="language"
            >
              Polish
            </Checkbox>
          </Stack>
        </CheckboxGroup>
        <Button
          p="10px 52px 10px 52px"
          borderRadius="10px"
          color="white"
          bg="#1236F2"
          mt="36px"
          w="262px"
          h="40px"
        >
          Apply Filter
        </Button>
      </Flex>
    </Flex>
  );
};
