import { useEffect, useState } from "react";
import { NextPage } from "next";
import { ChakraProvider, theme, Flex } from "@chakra-ui/react";
import axios from "axios";

import React from "react";

import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Filter as Sorting } from "../components/Filter/Filter";
import { Card, Freelancer } from "../components/Card/Card";
import CheckBox1 from "../components/CheckBox1";

export enum Sort {
  NAME = "Name",
  EXPERIENCE = "Experience",
  CLIENTS = "Clients",
}

const Index: NextPage = () => {
  const [data, setData] = useState<Freelancer[]>([]);
  const [sort, setSort] = useState(Sort.NAME);
  const [filters, setFilters] = useState<number[]>([]);

  const getData = async () => {
    const src =
      "https://641713c17107365a7ca40e20.mockapi.io/bestmatch?language=";
    const { data } = await axios.get<Freelancer[]>(src);

    const filteredData = data.filter(({ freelancerType }) => {
      if (!filters.length) return true;

      let flag = false;

      const frilancerTypeIds = freelancerType.map((item) => item.id);

      frilancerTypeIds.forEach((item) => {
        if (filters.includes(item)) {
          flag = true;
          return;
        }
      });

      return flag;
    });

    if (sort === Sort.NAME) {
      const sortedData = filteredData.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      setData(sortedData);
    } else if (sort === Sort.EXPERIENCE) {
      const sortedData = filteredData.sort(
        (a, b) => a.experience.value - b.experience.value
      );
      setData(sortedData);
    } else if (sort === Sort.CLIENTS) {
      const sortedData = filteredData.sort(
        (a, b) => a.clients.length - b.clients.length
      );
      setData(sortedData);
    } else {
      setData(filteredData);
    }
  };

  // axios
  // .get(src)
  // .then((data) => {
  //   setData(data.data);

  useEffect(() => {
    getData();
  }, [sort]);

  const handleFilters = (newFilters: number[]) => {
    setFilters(newFilters);
  };

  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
      <Flex bgColor=" #F8FBFF" direction="column" w="100%" h="100%">
        <Hero></Hero>

        <Sorting sort={sort} setSort={setSort} />
        <Flex direction="row">
          <Flex direction="column">
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </Flex>
          <CheckBox1
            handleFilters={handleFilters}
            handleApplyFilter={getData}
          />
          
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
