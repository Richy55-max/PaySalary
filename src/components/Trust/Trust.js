"use client";

import React from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      spacing={6}
      boxShadow={"0 5px 5px 0 rgba(46,58,158,.0784313725490196)!important"}
      p={5}
      borderRadius={"lg"}
      border={"1px solid #f6f6f8"}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"#f5f6ff"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign={"left"} color="#1f1f30">
        {title}
      </Text>
      <Text textAlign={"left"} color="#1f1f30">
        {text}
      </Text>
    </Stack>
  );
};

export default function Trust() {
  return (
    <Box pb={150}>
      <Heading
        fontFamily={"Inter"}
        fontWeight={700}
        fontSize={{ base: "28px", sm: "28px", md: "34px" }}
        lineHeight={"150%"}
        textAlign={{ base: "center", md: "center", lg: "center" }}
        position={"relative"}
        color="#1f1f30"
        mb={6}
      >
        Your smart business account is backed by
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Sécurité des transactions"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Traçabilité et transparence"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Support technique"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
