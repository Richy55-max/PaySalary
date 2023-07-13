"use client";

import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import data from "./data.json";

export default function FaqComponent(props) {
  return (
    <Box py={12}>
      {data?.header.map((header, index) => (
        <Heading
          key={index}
          as={"h2"}
          fontFamily={"Inter"}
          fontWeight={"800"}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          lineHeight={"140%"}
          color="#1f1f30"
          width="-moz-max-content"
          textAlign={"center"}
          marginBottom={"50px"}
        >
          {header.title}
        </Heading>
      ))}

      <Box maxWidth={'70%'} margin={'0 auto'}>
        {data?.faqs.map((faq, index) => (
          <Accordion allowToggle key={index}>
            <AccordionItem
              borderTopWidth={"0px"}
              borderBottomColor={'#e2e8f0'}
              padding={{ base: "10px 0px", md: "10px" }}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      gap={6}
                      padding={{ base: "0.5rem 0rem", md: "1rem" }}
                      _hover={{ background: "none" }}
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize={"20px"}
                        lineHeight={"28px"}
                        // fontFamily={"Sora"}
                        fontWeight={"500"}
                        color="#1f1f30"
                      >
                        {faq.title}
                      </Box>
                      {isExpanded ? (
                        <ChevronUpIcon color="#1f1f30" fontSize="25px" />
                      ) : (
                        <ChevronDownIcon
                          color="#1f1f30"
                          fontSize="25px"
                          _hover={{
                            transition: "all .25s ease-in-out",
                            transform: "rotate(15deg)",
                          }}
                        />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={5}
                    color="#000"
                    fontWeight={"400"}
                    fontSize={"1rem"}
                    lineHeight={"25px"}
                    fontFamily={"Inter"}
                  >
                    {faq.description}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
