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
  Button,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaAnglesRight, FaAngleDoubleRight } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack spacing={6}>
      <Flex
        w={10}
        h={10}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"#0b23e26e"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text
        fontWeight={600}
        textAlign={"left"}
        fontSize={"20px"}
        color="#1f1f30"
      >
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
    <Box pb={100}>
      <Heading
        fontFamily={"Inter"}
        fontWeight={700}
        fontSize={{ base: "28px", sm: "28px", md: "34px" }}
        lineHeight={"150%"}
        textAlign={{ base: "center", md: "center", lg: "center" }}
        position={"relative"}
        zIndex={"100"}
        color="#1f1f30"
        pb={50}
        pt={50}
      >
        Your smart business account is backed by
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 5 }} columnGap={"15px"}>
        <Feature
          icon={1}
          title={"Register in minutes"}
          text={"Sign up in a few minutes"}
        />
        <Stack>
          <FaAngleDoubleRight
            style={{
              alignSelf: "center",
              margin: "0px auto",
            }}
            color="#0b23e257"
            fontSize={"50px"}
          />
        </Stack>
        <Feature
          icon={2}
          title={"Complete KYC verification"}
          text={"Verify your business and personal identity"}
        />
        <FaAngleDoubleRight
          style={{ alignSelf: "center", margin: "0px auto" }}
          color="#0b23e257"
          fontSize={"50px"}
        />
        <Feature
          icon={3}
          title={"Get your virtual account"}
          text={"Your account is ready! Get started"}
        />
      </SimpleGrid>

      <Box
        mt={20}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          className={"cta-button"}
          role={"group"}
          transition={"all .3s ease"}
          _hover={{ background: "#081fde" }}
          _active={{ background: "#081fde" }}
          fontSize={"1rem"}
          p={"1.5rem"}
          lineHeight={"1"}
          background={"#5466f9"}
          color={"#fff"}
          variant="solid"
          width={"auto"}
        >
          <Link target={"_blank"} href={""} style={{ textDecoration: "none" }}>
            Create account
          </Link>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(8px)"}
            opacity={1}
            _groupHover={{ opacity: "100%", transform: "translateX(13px)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"#fff"} w={5} h={5} as={ArrowForwardIcon} />
          </Flex>
        </Button>
      </Box>
    </Box>
  );
}
