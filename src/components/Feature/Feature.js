'use client';

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Collapse,
  useDisclosure,
  transition,
} from '@chakra-ui/react';
import Image from 'next/image';
import { default as data } from './data.json';

const Feature = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = (id) => {
    console.log(id);
    setSelectedItem(id);
  };

  const imageStyle = {
    borderRadius: '12px',
    aspectRatio: '1/1',
    transition: 'all 0.5s ease-out',
  };

  return (
    <Box className='features-container'>
      <VStack alignItems={'flex-start'} gap={2}>
        {data.map((item, index) => (
          <Box
            key={item.id}
            className={
              selectedItem === item.id || (selectedItem === null && index === 0)
                ? 'feature-content-box'
                : ''
            }
            padding={'1rem 24px'}
            borderRadius={'xl'}
            cursor={'pointer'}
            onClick={() => handleClick(item.id)}
          >
            <div className='desktop-feature-heading'>
              <Heading
                fontFamily={'Inter'}
                fontWeight={500}
                fontSize={{ base: '22px', sm: '22px', md: '22px' }}
                lineHeight={'28px'}
                position={'relative'}
                color='#1f1f30'
              >
                {item.title}
              </Heading>
              <Text
                as={'h2'}
                fontSize='1rem'
                fontFamily={'Inter'}
                fontWeight={'400'}
                lineHeight={'22px'}
                color={'#41415a'}
                marginTop='10px !important'
              >
                {item.description}
              </Text>
            </div>

            <div className='mobile-feature-heading'>
              <Heading
                fontFamily={'Inter'}
                fontWeight={500}
                fontSize={{ base: '22px', sm: '22px', md: '22px' }}
                lineHeight={'28px'}
                position={'relative'}
                color='#1f1f30'
              >
                {item.title}
              </Heading>
            </div>

            <Collapse
              className='collapse-wrapper'
              in={isOpen}
              transition={{ exit: { delay: 0.5 }, enter: { duration: 0.5 } }}
            >
              <Text
                as={'h2'}
                fontSize='1rem'
                fontFamily={'Inter'}
                fontWeight={'400'}
                lineHeight={'22px'}
                color={'#41415a'}
                marginTop='10px !important'
              >
                {item.description}
              </Text>
              <Image
                src={'https://bit.ly/2Z4KKcF'}
                alt={'features-image'}
                height={100}
                width={500}
                loading='lazy'
                priority={false}
                style={imageStyle}
                className={
                  selectedItem === '2'
                    ? 'stack-image opacity-1'
                    : 'stack-image opacity-0'
                }
              />
            </Collapse>
          </Box>
        ))}
      </VStack>

      <VStack className='stack-image-container' position={'relative'}>
        {' '}
        <Image
          src={'https://bit.ly/4dhK0Tm'}
          alt={'features-image'}
          height={100}
          width={500}
          loading='lazy'
          priority={false}
          style={imageStyle}
          className={
            selectedItem === null || selectedItem === '1'
              ? 'stack-image opacity-1'
              : 'stack-image opacity-0'
          }
        />
        <Image
          src={'https://bit.ly/2Z4KKcF'}
          alt={'features-image'}
          height={100}
          width={500}
          loading='lazy'
          priority={false}
          style={imageStyle}
          className={
            selectedItem === '2'
              ? 'stack-image opacity-1'
              : 'stack-image opacity-0'
          }
        />
        <Image
          src={'https://bit.ly/3SyI7th'}
          alt={'features-image'}
          height={100}
          width={500}
          loading='lazy'
          priority={false}
          style={imageStyle}
          className={
            selectedItem === '3'
              ? 'stack-image opacity-1'
              : 'stack-image opacity-0'
          }
        />
      </VStack>
    </Box>
  );
};

export default Feature;
