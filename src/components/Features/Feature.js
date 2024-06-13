"use client";

import { Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";

import styles from "../../app/page.module.css";
import {
  firstContent,
  thirdContent,
  secondContent,
  fourthContent,
} from "./data";

export default function Features() {
  return (
    <Stack spacing={6} className="feature" maxW={"100%"} pb={150}>
      <Heading
        fontFamily={"Inter"}
        fontWeight={800}
        fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
        lineHeight={"150%"}
        textAlign={{ base: "center", md: "center", lg: "center" }}
        position={"relative"}
        color="#1f1f30"
      >
        EasySalary c&apos;est la Simplicité
      </Heading>
      <Text
        as={"h2"}
        fontSize={{ base: "md", lg: "24px" }}
        fontFamily={"Inter"}
        fontWeight={"400"}
        lineHeight={{ base: "25px", md: "34px" }}
        textAlign={{ base: "center", md: "center", lg: "center" }}
        color={"#41415a"}
        marginTop="10px !important"
        pb={10}
      >
        Efficace pour les employeurs, commerçants, les entreprises
      </Text>

      <Stack className={styles.featureContainer}>
        <Image
          src={"https://bit.ly/2Z4KKcF"}
          alt={"features"}
          objectFit={"cover"}
          borderRadius={"2xl"}
          height={"100%"}
        />

        <Stack
          spacing={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {firstContent.map((item, index) => (
            <Feature
              key={index}
              title={item?.title}
              icon={item?.icon}
              iconBg={item?.iconBg}
              description={item?.description}
              subDescription={item?.subDescription}
            />
          ))}
        </Stack>
      </Stack>

      <Stack className={styles.featureContainer}>
        <Stack
          spacing={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {secondContent.map((item, index) => (
            <Feature
              key={index}
              title={item?.title}
              icon={item?.icon}
              iconBg={item?.iconBg}
              description={item?.description}
              subDescription={item?.subDescription}
            />
          ))}
        </Stack>

        <Image
          className="stack-image-item2"
          src={"https://bit.ly/2Z4KKcF"}
          alt={"features"}
          objectFit={"cover"}
          borderRadius={"2xl"}
          height={"100%"}
        />
      </Stack>

      <Stack className={styles.featureContainer}>
        <Image
          src={"https://bit.ly/2Z4KKcF"}
          alt={"features"}
          objectFit={"cover"}
          borderRadius={"2xl"}
          height={"100%"}
        />

        <Stack
          spacing={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {thirdContent.map((item, index) => (
            <Feature
              key={index}
              title={item?.title}
              icon={item?.icon}
              iconBg={item?.iconBg}
              description={item?.description}
              subDescription={item?.subDescription}
            />
          ))}
        </Stack>
      </Stack>

      <Stack className={styles.featureContainer}>
        <Stack
          spacing={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {fourthContent.map((item, index) => (
            <Feature
              key={index}
              title={item?.title}
              description={item?.description}
              subDescription={item?.subDescription}
            />
          ))}
        </Stack>
        <Image
          className="stack-image-item4"
          src={"https://bit.ly/2Z4KKcF"}
          alt={"features"}
          objectFit={"cover"}
          borderRadius={"2xl"}
          height={"100%"}
        />
      </Stack>
    </Stack>
  );
}

const Feature = ({ title, description, subDescription }) => {
  return (
    <Stack
      display={"flex"}
      alignContent={"center"}
      alignItems={"center"}
      transition="all 1s ease-out"
    >
      <Flex direction={"column"}>
        <Text
          textAlign={"left"}
          fontWeight={"700"}
          fontSize={"30px"}
          color="#1f1f30"
          lineHeight={"42px"}
        >
          {title}
        </Text>
        <Text
          mt={2}
          fontSize={"18px"}
          fontWeight={400}
          lineHeight={"30px"}
          color="#1f1f30"
        >
          {description}
        </Text>
        <Text
          fontSize={"18px"}
          fontWeight={400}
          lineHeight={"30px"}
          color="#1f1f30"
        >
          {subDescription}
        </Text>
      </Flex>
    </Stack>
  );
};
