import React, { useState } from "react";
import {
  Checkbox,
  Flex,
  Input,
  Text,
  CheckboxGroup,
  Stack,
  Button,
} from "@chakra-ui/react";

type CheckBoxProps = {
  handleFilters: (data: number[]) => void;
  handleApplyFilter: () => void;
};

const checkBoxArray = [
  {
    id: 1,
    name: "Full-time",
  },
  {
    id: 2,
    name: "Contract",
  },
  {
    id: 3,
    name: "Intership",
  },
  {
    id: 4,
    name: "Part-time",
  },
];

function CheckBox1({ handleFilters, handleApplyFilter }: CheckBoxProps) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value: number) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    handleFilters(newChecked);
  };

  const renderCheckboxList = () =>
    checkBoxArray.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          fontWeight="500"
          fontSize="14px"
          lineHeight="20px"
          type="checkbox"
          onChange={() => handleToggle(value.id)}
          checked={checked.indexOf(value.id) === -1 ? false : true}
        >
          {value.name}
        </Checkbox>
      </React.Fragment>
    ));
  return (
    <Flex borderRadius="20px" bg="white" mt="14px" ml="24px">
      <Flex direction="column" p="24px">
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
            {renderCheckboxList()}
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
          onClick={handleApplyFilter}
        >
          Apply Filter
        </Button>
      </Flex>
    </Flex>
  );
}

export default CheckBox1;
