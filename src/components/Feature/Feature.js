'use client';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';

const newFeatures = () => {
  return (
    <>
      <Flex justifyContent={'space-between'}>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color='#000'
              fontWeight={'400'}
              fontSize={'1rem'}
              lineHeight={'25px'}
              fontFamily={'Inter'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Image
          src={'https://bit.ly/2Z4KKcF'}
          alt={'features-image'}
          height={100}
          width={500}
          loading='lazy'
        />
      </Flex>

      <Flex justifyContent={'space-between'}>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  fontWeight={'500'}
                  color='#1f1f30'
                >
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              color='#000'
              fontWeight={'400'}
              fontSize={'1rem'}
              lineHeight={'25px'}
              fontFamily={'Inter'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Image
          src={'https://bit.ly/2Z4KKcF'}
          alt={'features-image'}
          height={100}
          width={500}
          loading='lazy'
        />
      </Flex>
    </>
  );
};

export default newFeatures;
