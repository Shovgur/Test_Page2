import { Flex, Text } from "@chakra-ui/react";
import { Button } from "../UI/Button";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import { Sort } from "@/pages/index";

type FilterProps = {
  sort: Sort;
  setSort: Dispatch<SetStateAction<Sort>>;
};

export const Filter = ({ sort, setSort }: FilterProps) => {
  const handleMenuItemClick = (item: Sort) => {
    setSort(item);
  };

  const menuItems = [
    { name: Sort.NAME },
    { name: Sort.CLIENTS },
    { name: Sort.EXPERIENCE },
  ];

  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      mt="54px"
      alignItems="center"
      w="1248px"
      ml="144px"
    >
      <Text
        fontSize="16px"
        fontWeight="600"
        fontFamily="Gilroy"
        lineHeight="24px"
      >
        3,545 freelancer found
      </Text>
      <Flex
        justifyContent="space-between"
        ml="485px"
        alignItems="center"
        direction="row"
      >
        <Text fontWeight="500" fontSize="16px" lineHeight="24px" opacity="0.3">
          Sort by:
        </Text>

        <Flex w="91px" alignItems="center">
          <Menu>
            <MenuButton
              position="absolute"
              border="none"
              background="none"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {sort}
            </MenuButton>
            <MenuList>
              {menuItems.map((item) => {
                const { name } = item;
                return (
                  <MenuItem
                    onClick={() => handleMenuItemClick(name)}
                    key={name}
                  >
                    {name}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Text
        fontSize="16px"
        fontWeight="600"
        fontFamily="Gilroy"
        lineHeight="24px"
      >
        Filter
      </Text>
      <Flex>
        <Button
          h="22px"
          fontFamily="Gilroy"
          fontSize="14px"
          fontWeight="700"
          color="#1236F2"
          border="none"
          backgroundColor="#F8FBFF"
        >
          Clear
        </Button>
      </Flex>
    </Flex>
  );
};
